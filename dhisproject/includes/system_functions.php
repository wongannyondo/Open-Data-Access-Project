<?php 
// function to start project automatically if activities have started
function auto_update_project_status () {
	global $conn;
	// get all projects
	$get_projects = $conn->query("SELECT * FROM project");
	while ($result_project = $get_projects->fetch_assoc()) {
		// waiting
		if ($result_project['project_status'] == "waiting") {
			// check project activities
			$get_activities = $conn->query("SELECT * FROM activity WHERE project_id = \"{$result_project['project_id']}\" AND (activity_status = 'on going' OR activity_status = 'finished')");
			if ($get_activities->num_rows >= 1) {
				// update project status to on going
				$update = $conn->query("UPDATE project SET project_status = 'on going' WHERE project_id = \"{$result_project['project_id']}\"");
			}
		}
		// on going
		if ($result_project['project_status'] == "on going") {
			// check project activities
			$get_activities = $conn->query("SELECT * FROM activity WHERE project_id = \"{$result_project['project_id']}\"");
			$all_finished = true;
			while ($result_activity = $get_activities->fetch_assoc()) {
				if ($result_activity['activity_status'] == "waiting" || $result_activity['activity_status'] == "on going") {
					$all_finished = false;
				}
			}
			// all finished 
			if ($all_finished == true) {
				$update = $conn->query("UPDATE project SET project_status = 'finished' WHERE project_id = \"{$result_project['project_id']}\"");
			}
		}
	}
}
?>