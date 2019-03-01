sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.modelos.controller.View1", {
		onInit: function () {

			//Fonte de dados
			var oPessoa = {
				nome: "Fabio",
				sobrenome: "Pagoti",
				cidade: {
					nome: "São Bernardo do campo",
					estado: "SP"
				},
				feliz: true,
				skills: ["UI5", "ABAP", "Javascript"],
				skills2: [{
					nome: "UI5"
				}, {
					nome: "ABAP"
				}, {
					nome: "Javascript"
				}],
				nota: 3,
				ocupado: false
			};

			//Encapsular a fonte em um modelo
			var oModeloPessoa = new JSONModel(oPessoa);

			/*			var oInputName = this.byId("nome");
						oInputName.setModel(oModeloPessoa);*/

			this.getView().setModel(oModeloPessoa);
		},
		caixaAlta: function (texto) {
			return texto.toUpperCase();
		},
		onSave: function (oEvent) {
			var oModelo = this.getView().getModel(); //JSONModel
			var bOcupado = oModelo.getProperty("/ocupado");
			oModelo.setProperty("/ocupado", !bOcupado);
		}
	});
});