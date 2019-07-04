
var url='http://localhost:8080/dhis/api/dataValueSets.json?dataSet=A9sqGZIEUtr&period=201905&orgUnit=xPcax9XyWv7'


fetch(url)
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		// console.log(data.dataValues)
		//appenddata(data.dataValues)
		displaytraversed(data);
	})
	.catch(function(err){
		console.log(err);
	});

function displaytraversed(data){
	for(delement in data){
		if(delement == 'dataValues')
			for(dvalue in delement){
				console.log(delement[dvalue])
			}
	}
}
function appenddata(data){
	try{
		var row = document.getElementById(data[i].dataElement);
		for(var i = 0; i < 30; i+=2){
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			
			td1.innerHTML = maina(data[i].dataElement);
			td2.innerHTML = data[i].value;		
			td3.innerHTML = data[i+1].value;
			row.appendChild(td1);
			row.appendChild(td2);
			row.appendChild(td3);
		}
	}
	catch(err){
		console.log(err)
		// row = document.getElement
	}
	
}

function linebyline(data){
	var row = document.getElementById(''+data[0].dataElement);
	console.log(data[0].dataElement);
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		row.innerHTML = '';
		td1.innerHTML = data[0].dataElement;
}


function checkdata(data){
	for(el in data){
		if(data == undefined){
			console.log("not defined")
		}else{
			console.log("defined")
		}
	}
	
}

function additionaltbl(data){
	var container = document.getElementById("viewdata");
	for(element in names){
		//var div  = document.createElement("div");
		var row = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		
		// td1.innerHTML = names[element];
		td2.innerHTML = '';		
		td3.innerHTML = '';
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		container.appendChild(row);
	}
}

// function additionaltbl(ids){
// 	var container = document.getElementById("viewdata")
// 	for(var i = 0; i < 14; i+=2){
// 		//var div  = document.createElement("div");
// 		var row = document.createElement("tr");
// 		var td1 = document.createElement("td");
// 		var td2 = document.createElement("td");
// 		var td3 = document.createElement("td");
		
// 		if(data[i].value != null | data[i].value != undefined){
// 			td1.innerHTML = "name";
// 			td2.innerHTML = '';//data[i].value;		
// 			td3.innerHTML = '';//data[i+1].value;
// 			row.appendChild(td1);
// 			row.appendChild(td2);
// 			row.appendChild(td3);
// 		}
// 		container.appendChild(row)
// 	}
// }

function selected_organisation(){
    var selector = document.getElementById('pOyLJltufaO');
    var value = selector[selector.selectedIndex].value;
    var id = selector[selector.selectedIndex].getAttribute("id")
    return id
}

function selected_period(){
    var selector = document.getElementById('period');
    var value = selector[selector.selectedIndex].value;
    selected_month();
    return value
}

function selected_month(){
    var selector = document.getElementById('month');
    var id = selector[selector.selectedIndex].getAttribute("id");
    return id;
}

function selectChanged(){
	var container = document.getElementById("viewdata");
	container.innerHTML = '';
	period = selected_period()+''+selected_month();
	console.log(period);
	var url='http://localhost:8080/dhis/api/dataValueSets.json?dataSet=A9sqGZIEUtr&period='+period+'&orgUnit='+selected_organisation();

//var txt = "<table border='1'><thead> <tr><th>OutPatient Department</th> <th><5 years</th><th>5+ years</th></tr></thead><tbody>"

	fetch(url)
		.then(function(response){
			return response.json()
		})
		.then(function(data){
			console.log(data.dataValues)
			//appenddata(data.dataValues)
			displaytraversed(data)
		})
		.catch(function(err){
			console.log(err)
		});
} 
var names={
	bnYOiwtIEGD: "Confirmed cases receiving anti malarial medication",
	gi8pO63dS9Q:"Inpatient malaria deaths",
	kG6hGLGGbVL:"Inpatient deaths",
	J1V9SvQi5qA:"Confirmed malaria cases(microscopy)",
	QTxyMxMzQZW:"Presumed (clinically diagonosed) malaria cases",
	USuBjWTPquz:"Inpatients",
	rQx4lWnwr0c:"Total Suspected Malaria cases",
	qZ7zh9SeAJd:"Suspected malaria cases tested(microscopy)",
	wUIoXicmEwz:"Confirmed malaria cases",
	R54Rg3MsSbk:"Presumed malaria cases(clinically diagonosed)",
	Sd0TeC4VzqW:"Presumed malaria cases receiving anti malarial medication",
	PSaHYc6EqvW:"Suspected malaria cases tested(mRDT)",
	SjBzTKJitha:"Positive Malaria cases(microscopy)",
	RG2XDmzWECE:"Positive malaria cases(mRDT)"
}

// var idz={
// 	bnYOiwtIEGD: "Confirmed cases receiving anti malarial medication",
// 	gi8pO63dS9Q:"Inpatient malaria deaths",
// 	kG6hGLGGbVL:"Inpatient deaths",
// 	J1V9SvQi5qA:"Confirmed malaria cases(microscopy)",
// 	QTxyMxMzQZW:"Presumed (clinically diagonosed) malaria cases",
// 	USuBjWTPquz:"Inpatients",
// 	rQx4lWnwr0c:"Total Suspected Malaria cases",
// 	qZ7zh9SeAJd:"Suspected malaria cases tested(microscopy)",
// 	wUIoXicmEwz:"Confirmed malaria cases",
// 	R54Rg3MsSbk:"Presumed malaria cases(clinically diagonosed)",
// 	Sd0TeC4VzqW:"Presumed malaria cases receiving anti malarial medication",
// 	PSaHYc6EqvW:"Suspected malaria cases tested(mRDT)",
// 	SjBzTKJitha:"Positive Malaria cases(microscopy)",
// 	RG2XDmzWECE:"Positive malaria cases(mRDT)"
// }
// kk = 0;
// console.log(idz);
// for(el in idz){
// 	if(kk%2 == 0)
// 		delete idz[el]
// 	//console.log(el)
// 	kk++;
// }
// console.log(idz);
function maina(keys){
	return names[keys]
}

// console.log(maina("Sd0TeC4VzqW"));

