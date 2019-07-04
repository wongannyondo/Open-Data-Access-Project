<?php

/****************************************************************************************/
/***class to allow delete multiple elements at the same time****************************/
class deleteMultiple
{
		protected $deleted;
		protected $notDeleted;
		protected $deletedTrue;
		
		public function __construct()
		{
			$this->notDeleted = 0;
			$this->deletedTrue = 0;
		}
		
		public function __call($methodName,$arguments)
		{
			$acceptedMethod=array("deleteItems");
			if(!in_array($methodName,$acceptedMethod))
			{
				trigger_error("Method $methodName is unrecognised",E_USER_ERROR);
			}
			 else if(count($arguments)==2)
			{
				$this->deleteItems1($arguments[0],$arguments[1]);
			}
			else if(count($arguments)==4)
			{
				$this->deleteItems2($arguments[0],$arguments[1],$arguments[2],$arguments[3]);
			}
		}
		
		public function add_id($id)
		{
			?>
			 <form role='form' action="<?php $_SERVER['PHP_SELF']; ?>" method='post'>
			   <input style='float:right;' type="checkbox" name="deleteItems[]" value="<?php print $id; ?>" title="click to put on delete list" /> <!--put a style in the other link of float left for them to  be in the same line-->
			<?php
		}
		
		public function submitButton($num)
		{
			print "<tr style='border: 0 !important; background-color: transparent !important;'>";
			for($i=1; $i<=$num-1; $i++)
			{
				print "<td style='border: 0 !important;'></td>";
			}
			print "<td style='border: 0 !important;'><button style='clear:both;float:right;' class=\"w3-btn w3-red\" type=\"submit\" name=\"delete\" onClick=\"return window.confirm('Are you sure to delete?')\" >delete</button>"; 
			print "</tr>";
		}
		
		public function deleteItems2($table,$column,$checkingTable,$checkingCondition)
		{
			$count=0;
			global $conn;
			$this->deleted=false;
			if(isset($_POST['delete']) && !empty($_POST['deleteItems']))
			{
				foreach($_POST["deleteItems"] as $key=>$id)
			    {
				  if(!empty($id))
				  {
					   $check = $conn->query("SELECT * FROM $checkingTable WHERE $checkingCondition = '$id'");
					   if($check->num_rows >= 1)
					   {
						   $this->notDeleted++;
					   }
					   else
					   {
						   $this->deleteForDeleteItems2($table,$column,$id);
					   }
			      }
		        }
	        }
            return "<div class = 'alert alert-success'>$this->deletedTrue ITEMS WERE SUCCESSFULLY DELETED, BUT $this->notDeleted ITEMS WERE NOT DELETED BECAUSE THEY ARE NEEDED BY THE SYSTEM</div>";			
		}
		
		public function deleteForDeleteItems2($table,$column,$id)
		{
			  global $conn;
			  $this->deleted=mysqli_query($conn,"DELETE FROM $table WHERE $column='$id'");
			  if($this->deleted)
			  {
				  $this->deletedTrue++;
			  }
			  
		}
		
		public function deleteItems1($table,$column)
		{
			$count=0;
			global $conn;
			$this->deleted=false;
			if(isset($_POST['delete']) && !empty($_POST['deleteItems']))
			{
			   foreach($_POST["deleteItems"] as $key=>$value)
			   {
				  if(!empty($value))
				  {
					  $this->deleted=mysqli_query($conn,"DELETE FROM $table WHERE $column=\"{$value}\"");
					  if($this->deleted)
					  {
						  $count++;
					  }
				  }
			   }
			}
			if($count >= 1)
			{
				if($count == 1)
				{
					return "<div class='alert alert-danger'>$count ITEM WAS DELETED</div>";
				}
				else
				{
					return "<div class='alert alert-danger'>$count ITEMS WERE DELETED</div>";	
				}
			}
			else
			{
				//do nothing
			}
		}
}
/********************************************************************************************************/

/********************************************************************************************************/
	class processFile
	{
		  //disgard the image name, you can put a file there instead
		  protected $location;
		  protected $imageName;
		  protected $imageTMP;
		  protected $imageType;
		  protected $targetImage;
		  protected $moveValue;
		  
		  public function __construct($loc) //$loc is image folder/location 
		  {
			  $this->location=$loc;
			  if(!is_dir($this->location))
			  {
				  mkdir($this->location,0777,true);
			  }
			  if(isset($_FILES['image']['name']) && !empty($_FILES['image']['name']))
			  {
				  $this->imageName=$_FILES['image']['name'];
				  $this->imageTMP=$_FILES['image']['tmp_name'];
				  $this->targetImage=$this->location.basename($this->imageName);
				  $this->imageType=pathinfo($this->targetImage,PATHINFO_EXTENSION);
			  }
		  }
		  
		  public function moveFile()
		  {
				  if(isset($_FILES['image']['name']) && !empty($_FILES['image']['name']))
				  {
					 if(file_exists($this->location.$this->imageName))
					 {
						 return $this->imageName;
					 }
					 else
					{
						$this->moveValue=move_uploaded_file($this->imageTMP, $this->location.$this->imageName); //move image into local disk
						if($this->moveValue)
						{
							return $this->imageName;
						}
					 }
				  }			  
		  }		  
	}
	/********************************************************************************************************/
/********************************************************************************************************/
class ProcessImage
{
	  protected $location;
	  protected $imageName;
	  protected $imageTMP;
	  protected $imageType;
	  protected $targetImage;
	  protected $moveValue;
	  protected $uploadImage;
	  protected $resizeImage;
	  protected $actualImage;
	  protected $width;
	  protected $height;
	  protected $newWidth;
	  protected $newHeight;
	  protected $source;
	  protected $imageJPEG;
	  protected $imagePNG;
	  protected $imageGIF;
	  protected $thumb;
	  protected $image_names;
	  
	  public function __construct($loc) //$loc is image folder/location 
	  {
		  $this->location=$loc;
		  if(!is_dir($this->location))
		  {
			 mkdir($this->location,0777,true);
		  }
		  if(!is_array($this->image_names))
		  {
		  		$this->image_names = array();
		  }
		  if(isset($_FILES['image']['name']) && !empty($_FILES['image']['name']))
		  {
			  foreach($_FILES['image']['name'] as $key => $value)
			  {
				  $this->imageName=$_FILES['image']['name'][$key];
				  $this->imageTMP=$_FILES['image']['tmp_name'][$key];
				  $this->targetImage=$this->location.basename($this->imageName);
				  $this->imageType=pathinfo($this->targetImage,PATHINFO_EXTENSION);
				  if($this->imageType=="jpg" || $this->imageType=="png" || $this->imageType=="jpeg" || $this->imageType=="gif" || $this->imageType=="JPG" || $this->imageType=="PNG" || $this->imageType=="JPEG" || $this->imageType=="GIF")
				  {
					  if($this->moveImage() == true)
					  {
						  array_push($this->image_names, $this->imageName);
					  }
				  }
			  }
		  }
	  }
	  
	  public function getImageName()
	  {
		  return $this->image_names;
	  }
	  
	  public function unSetImageNames()
	  {
	  	 unset($this->image_names);
	  }
	  
	  public function moveImage()
	  {
		 if(file_exists($this->location.$this->imageName))
		 {
			 return true;
		 }
		 else
		 {
			$this->moveValue=move_uploaded_file($this->imageTMP, $this->location.$this->imageName); //move image into local disk
			if($this->moveValue)
			{
				//$this->compressImage();
				return true;
			}
		  }
					  
	  }
} //closes namespace general_classes
?>