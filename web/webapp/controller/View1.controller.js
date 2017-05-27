sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("employeeslist.controller.View1", {
		onInit: function() {	
			//ToDo: These two models needs to merged into one.
			var employeeModel = new JSONModel();
			this.getView().setModel(employeeModel, "employees");
			var oDataModel = new sap.ui.model.odata.ODataModel("/employeeslist.svc");
			oDataModel.read("/Employees",
					 null,
					 null,
					 false,
					 function _OnSuccess(oData, response) {
						 var data = { "Employees" : oData.results };
						 employeeModel.setData(data);
					 },
					 function _OnError(error) {
						 console.log(error);
					 }
				   );		
			
			
			var oBar = new sap.m.Bar({
				contentLeft: [new sap.m.Image({
					src: "https://www.sap.com/dam/application/shared/logos/sap-logo.png.adapt.72_36.false.false.false.false.png",
					height: "45px"
				})],
				contentMiddle: [new sap.m.Label({
					text: "{i18n>title}",
					textAlign: "Left",
					design: "Bold"
				})],
				contentRight: []
			});
			var oPage = this.getView().byId("idpage");
			oPage.setCustomHeader(oBar);
		},
		onPress: function(oEvent){
			//ToDo: These two models needs to merged into one.
            var oDataModel = new sap.ui.model.odata.ODataModel("/employeeslist.svc");
            var employeesModel = this.getView().getModel("employees");
			var oLastName = this.getView().byId("idlastname").getValue();
			var oFirstName = this.getView().byId("idfirstname").getValue();
			
			var employee = {};
			employee.FirstName = oFirstName;
			employee.LastName = oLastName;
			
			oDataModel.create("/Employees",employee);
			oDataModel.read("/Employees",
				 null,
				 null,
				 false,
				 function _OnSuccess(oData, response) {
					 var data = { "Employees" : oData.results };
					 employeesModel.setData(data);
				 },
				 function _OnError(error) {
					 console.log(error);
				 }
			   );		
			
	   }

  });						
});