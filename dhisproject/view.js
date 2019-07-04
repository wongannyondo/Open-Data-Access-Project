
var myForm = function(data) {
	var form = document.createElement("form");
	var selectContener = document.createElement("div");
	var formtiltle = document.createElement("div");

			var selectContenerrow = document.createElement("div");
			var selectContenercol = document.createElement("div");
			var selectContenercol2 = document.createElement("div");
			var selectContenercol3 = document.createElement("div");
	// console.log(data.dataSets[0].dataEntryForm.id)
	// name of the form: use id
	form.id = data.dataSets[0].dataEntryForm.id;
	var formId = form.id;
	form.name = data.dataSets[0].dataEntryForm.name;
	// form.name = "malaria";

	var formLabel = document.createElement("label");getFormData
	formLabel.textContent = data.dataSets[0].name; // data set name




	selectContener.className = "container card text-center p-4";
	selectContener.appendChild(formLabel);



	// headerDiv.innerHTML = selectContener;
	form.appendChild(selectContener);
	formLabel.className = "mb-3";

			// next line
	var br = document.createElement("br");
	form.appendChild(br);

	// organisationUnits
	var orgLabel = document.createElement("label");
	orgLabel.textContent = "Select Organisation Unit: "
	orgLabel.className="oowncss text-light mb-3"
	selectContenercol.appendChild(orgLabel);
	selectContenercol.className = "container card-body text-center bg-primary";

	form.appendChild(selectContenercol);

	var selectOrgUnits = document.createElement("select");
	selectOrgUnits.name = "organisationUnit";
	selectOrgUnits.setAttribute('onchange','selectChanged()');
	selectOrgUnits.className = "btn btn-outline-light dropdown-toggle p-2 m-2"

	// create org options
	data.dataSets[0].organisationUnits.map(function(organisationUnit) {
		var orgOption = document.createElement("option");
		orgOption.textContent = organisationUnit.name;
		orgOption.id = organisationUnit.id;
	 	selectOrgUnits.id = orgOption.id;

		selectOrgUnits.appendChild(orgOption);

	})
	selectContenercol.appendChild(selectOrgUnits);
	form.appendChild(selectContenercol);

	//period
	var yearlabel = document.createElement("label");
	yearlabel.innerHTML = "Choose Year";
	yearlabel.className = "oowncss text-light mb-3"
	selectContenercol.appendChild(yearlabel);

	var period = document.createElement("select");
	period.name = "year";
	period.id = "year";
	period.setAttribute('onchange','selectChanged()');
	period.className = "btn btn-outline-light dropdown-toggle p-2 m-2"
	var periodList = [2019, 2018, 2017, 2016, 2015, 2014, 2013,2012,2011,2010];
	periodList.map(function(periodRange, index){
		var periodOption = document.createElement("option");
		periodOption.name = periodRange;
		periodOption.textContent = periodRange;
		period.appendChild(periodOption);
	})
	selectContenercol.appendChild(period);

	var monthlabel = document.createElement("label");
	monthlabel.innerHTML = "Choose Month";
	monthlabel.className = "oowncss text-light mb-3"
	selectContenercol.appendChild(monthlabel);

	var month = document.createElement("select");
	month.name = "month";
	month.id = "month";
	month.setAttribute('onchange','selectChanged()');
	month.className = "btn btn-outline-light dropdown-toggle p-2 m-2"
	var monthList = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];
	monthList.map(function(monthRange, index){
		var monthOption = document.createElement("option");
		monthOption.name = monthRange;
		monthOption.textContent = monthRange;
		ind  = "0"+(index+1);
		monthOption.id = ind.slice(-2);
		// console.log(monthRange +" "+ ind.slice(-2));
		month.appendChild(monthOption);
	})
	selectContenercol.appendChild(month);
	form.appendChild(selectContenercol);

			var row = document.createElement("div");
			var col = document.createElement("div");
			var col_title = document.createElement("label");
			col_title.innerHTML = "Attribute";
			col.appendChild(col_title);
			var col23 = document.createElement("div")
			var col2323 = document.createElement("div")
			var col2 = document.createElement("div");
			var col2_title = document.createElement("label");
			col2_title.innerHTML = "Under Five (<5)";
			col2.appendChild(col2_title);
			var col3 = document.createElement("div");
			var col3_title = document.createElement("label");
			row.className= "row";
			col23.style="{border:none}"
			col.className = "col-sm-5 list-group-item form-inline";
			col23.className="row"
			col2323.className="col-sm-7 list-group-item form-inline"
			col2.className = "col-sm-6 list-group-item form-inline text-center";
			col3.className = "col-sm-6 list-group-item form-inline text-center";
			col3_title.innerHTML = "Over Five (>5)";
			col3.appendChild(col3_title);
			row.appendChild(col);
			col23.appendChild(col2);
			col23.appendChild(col3);
			col2323.appendChild(col23)
			row.appendChild(col2323)
			form.appendChild(row);

	data.dataSets[0].dataSetElements.map(function(dataElement, index) {
			// console.log(dataElement.dataElement.categoryCombo.id)
			//console.log(dataElement)
			var element = document.createElement("div");
			var row = document.createElement("div");
			var col = document.createElement("div");
			var col2 = document.createElement("div");
			var col3 = document.createElement("div");
			var p = document.createElement("span");
			p.textContent = dataElement.dataElement.name + ":";
			//p.setAttribute("on")
			row.className= "row";
			col.className = "col-sm-5 list-group-item form-inline";
			col2.className = "col-sm-7 list-group-item form-inline text-center";
			col3.className = "col-sm-7 list-group-item form-inline text-center";
			var lebos = document.createElement("div");
			lebos.className="row";
			p.id = dataElement.dataElement.id;
			p.className="";
			element.className = "container";
			col.appendChild(p);
			row.appendChild(col);
			element.appendChild(row);
			form.appendChild(element);
			// categoryOptions
			if(dataElement.dataElement.categoryCombo.id === "FVbhoWBHwrG") {
				dataElement.dataElement.categoryCombo.categoryOptionCombos.map(function(categoryOption, indx) {
					var input = document.createElement("label");
					// console.log(categoryOption);
					// console.log(categoryOption.name);
					input.type = "number";
					input.name = categoryOption.name;
					input.className = "col-sm-6 inp badge badge-primary p-2"
					input.id = dataElement.dataElement.id + "." + categoryOption.id;
					lebos.appendChild(input);
					col2.appendChild(lebos)
					row.appendChild(col2);
					element.appendChild(row);				});
			} else if(dataElement.dataElement.categoryCombo.id === "SRutekGT1bH") {
				data.dataSets[0].dataSetElements[0].dataElement.categoryCombo.categoryOptionCombos.map(function(categoryOption, pos) {
					var input = document.createElement("input");
					// console.log(categoryOption);
					// console.log(categoryOption.name);
					input.type = "number";
					input.className = "col-sm-6 inp badge badge-primary p-2"
					input.name = categoryOption.name;
					input.id = dataElement.dataElement.id + "." + categoryOption.id;
					lebos.appendChild(input);
					col3.appendChild(lebos)
					row.appendChild(col3);
					element.appendChild(row);
				});
			} else {

			}

		}
	);

			// form submit button
	var submitButton = document.createElement("input");
	submitButton.id = "submit_form";
	submitButton.type = "button";
	submitButton.value = "Update";
	submitButton.name = "submit";
	submitButton.placeholder = "Submit";
	submitButton.className = "btn btn-primary m-2 float-right"
	submitButton.setAttribute("onclick", 'getFormData()');
	//submitButton.setAttribute("onchange",'getOrgUnitId()')
	//form.appendChild(submitButton);

	
	var formPanel = document.getElementById('myForm1');
	formPanel.appendChild(form);
}	

var url= "http://localhost:8080/dhis/api/dataSets.json?fields=id,name,dataEntryForm[id,name],organisationUnits[id,name],dataSetElements[dataElement[id,name,categoryCombo[id,name,categoryOptionCombos[id,name]]]";

var response = function() {
	return fetch(url)
			.then(function(res) {
				// console.log(res)
				if (res.status === 200) {
					return res.json()
				}
			})
			.then(function(myDataSet){
				// console.log(myDataSet);
				myForm(myDataSet)
			});
}

response()

function getFormData(){

	var inputs = document.querySelector("form");
    var div = document.querySelector("div, id");
   // console.log(inputs[0][0].getAttribute("id"))

    var payload = {
    	"dataSet": "A9sqGZIEUtr", 
	    "period": [],
	    "orgUnit": [],
	    "dataValues":[]
    }
  	for (var i =0; i< inputs.length; i++) {
        var x = inputs[i].id;
        var xsplit = x.split(".");

        //if (inputs[i].value === "" || inputs[i].value === null || inputs[i].value === undefined) {

        	//inputs[i].value = 0;
        	// console.log(inputs[i].value);
        //}

        if (inputs[i].type==="number"){

        	payload.dataValues.push({
	        	"dataElement": xsplit[0],
	        	"categoryOptionCombo": xsplit[1], 
	        	"value":inputs[i].value
	        });

        } else if(inputs[i].type === "button"){
 
        } else {

        	if (document.querySelector("select").name === "organisationUnit"){

	        	payload.orgUnit.push({
		        	//"name":inputs[i].value,
		        	// "id":inputs[i].id
		        	"id":show_selected()//inputs[i][i].getAttribute("id")
		        });
	        } 

	        if(document.getElementById("year").name === "year") {
    			payload.period.push({
		        	"value":inputs[i].value
		        });
        	}
        	
        }
       
	}
       console.log(payload);


	Object.assign(payload, { "orgUnit":payload.orgUnit[0].id, "period": payload.period[1].value + appendmonthtoperiod() });
    console.log(payload)
  var headers = new Headers();
             headers.append('Content-Type','application/json')

             fetch('http://localhost:8080/dhis/api/dataValueSets', {
                 method: 'POST',
                 headers : headers,
               body:JSON.stringify(
                    payload
                )}).then((res) => res.json())
               .then((data) =>  {console.log(data)
              });

    //show_selected()
}

function show_selected(){
    var selector = document.getElementById('pOyLJltufaO');
    var value = selector[selector.selectedIndex].value;
    var id = selector[selector.selectedIndex].getAttribute("id")
    //console.log(value);
    appendmonthtoperiod()
    return id
}

function appendmonthtoperiod(){
    var selector = document.getElementById('month');
    var id = selector[selector.selectedIndex].getAttribute("id");
    return id;
}

var url='http://localhost:8080/dhis/api/dataValueSets.json?dataSet=A9sqGZIEUtr&period=201905&orgUnit=xPcax9XyWv7'

fetch(url)
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		//console.log(data.dataValues)
		//appenddata(data.dataValues)
		//additionaltbl()
	})
	.catch(function(err){
		console.log(err);
	});

var idz = names;

var done = [];

function appenddata(datavalues){
	done = []
	//console.log(data)
	try{	
		// console.log(datavalues.length)
		for(var i  = 0; i < datavalues.length; i++){
			//console.log(datavalues[i].dataElement+"."+datavalues[i].categoryOptionCombo);
			document.getElementById(datavalues[i].dataElement+"."+datavalues[i].categoryOptionCombo).innerHTML = datavalues[i].value;
			done.push(datavalues[i].dataElement+"."+datavalues[i].categoryOptionCombo)
		}
		console.log('done = ')
		console.log(done)
	}

	catch(err){
		//console.log(err)
		additionaltbl()
	}
}


function additionaltbl(){
	for(element in doted){
		if(done.indexOf(element) == -1 ){
			document.getElementById(element).innerHTML='';
		}else{
			console.log('already traversed');
		}
		
	}
}


function selected_organisation(){
    var selector = document.getElementById('pOyLJltufaO');
    var value = selector[selector.selectedIndex].value;
    var id = selector[selector.selectedIndex].getAttribute("id")
    return id
}

function selected_period(){
    var selector = document.getElementById('year');
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
	var inps = document.getElementsByClassName("inp")
	for(var i = 0; i < inps.length; i++){
		inps[i].innerHTML = '';
	}
	period = selected_period()+''+selected_month();
	console.log(period);
	var url='http://localhost:8080/dhis/api/dataValueSets.json?dataSet=A9sqGZIEUtr&period='+period+'&orgUnit='+selected_organisation();

//var txt = "<table border='1'><thead> <tr><th>OutPatient Department</th> <th><5 years</th><th>5+ years</th></tr></thead><tbody>"
//eElement("select")
	fetch(url)
		.then(function(response){
			return response.json()
		})
		.then(function(data){
			//console.log(data.dataValues)
			appenddata(data.dataValues)
			
		})
		.catch(function(err){
			console.log(err)
		});
} 

function indata(datavalues){
	console.log(datavalues.length)
	for(var i  = 0; i < datavalues.length; i++){
		console.log(datavalues[i].dataElement+"."+datavalues[i].categoryOptionCombo);
		document.getElementById(datavalues[i].dataElement+"."+datavalues[i].categoryOptionCombo).innerHTML = datavalues[i].value;

	}
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

var dataID=[
	"bnYOiwtIEGD",
	"gi8pO63dS9Q",
	"kG6hGLGGbVL",
	"J1V9SvQi5qA",
	"QTxyMxMzQZW",
	"USuBjWTPquz",
	"rQx4lWnwr0c",
	"qZ7zh9SeAJd",
	"wUIoXicmEwz",
	"R54Rg3MsSbk",
	"Sd0TeC4VzqW",
	"PSaHYc6EqvW",
	"SjBzTKJitha",
	"RG2XDmzWECE"
]

function maina(keys){
	return names[keys]
}

// console.log(maina("Sd0TeC4VzqW"));

doted = ["bnYOiwtIEGD.Psg9DQeOd6L",
"bnYOiwtIEGD.Rk2hjVeZey1",
"gi8pO63dS9Q.Psg9DQeOd6L",
"gi8pO63dS9Q.Rk2hjVeZey1",
"kG6hGLGGbVL.Psg9DQeOd6L",
"kG6hGLGGbVL.Rk2hjVeZey1",
"J1V9SvQi5qA.Rk2hjVeZey1",
"QTxyMxMzQZW.Psg9DQeOd6L",
"QTxyMxMzQZW.Rk2hjVeZey1",
"qZ7zh9SeAJd.Rk2hjVeZey1",
"USuBjWTPquz.Psg9DQeOd6L",
"USuBjWTPquz.Rk2hjVeZey1",
"rQx4lWnwr0c.Psg9DQeOd6L",
"rQx4lWnwr0c.Rk2hjVeZey1",
"qZ7zh9SeAJd.Psg9DQeOd6L",
"Sd0TeC4VzqW.Rk2hjVeZey1",
"wUIoXicmEwz.Psg9DQeOd6L",
"wUIoXicmEwz.Rk2hjVeZey1",
"R54Rg3MsSbk.Psg9DQeOd6L",
"R54Rg3MsSbk.Rk2hjVeZey1",
"Sd0TeC4VzqW.Psg9DQeOd6L",
"PSaHYc6EqvW.Psg9DQeOd6L",
"PSaHYc6EqvW.Rk2hjVeZey1",
"SjBzTKJitha.Psg9DQeOd6L",
"SjBzTKJitha.Rk2hjVeZey1",
"RG2XDmzWECE.Psg9DQeOd6L",
"RG2XDmzWECE.Rk2hjVeZey1",
"J1V9SvQi5qA.Psg9DQeOd6L",
"bnYOiwtIEGD.HllvX50cXC0"
]