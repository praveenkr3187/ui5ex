sap.ui.define([
	"sap/ui/test/Opa5",
	"../../../localService/mockserver"
], function (Opa5, mockserver) {
	"use strict";

	return Opa5.extend("ui5ex.uiexer.test.integration.pages.Common", {

		theUnitNumbersShouldHaveTwoDecimals: function (sControlType, sViewName, sSuccessMsg, sErrMsg) {
			var rTwoDecimalPlaces = /^-?(\d+,)?\d+\.\d{2}$/;

			return this.waitFor({
				controlType: sControlType,
				viewName: sViewName,
				success: function (aNumberControls) {
					Opa5.assert.ok(aNumberControls.every(function (oNumberControl) {
						return rTwoDecimalPlaces.test(oNumberControl.getNumber());
					}), sSuccessMsg);
				},
				errorMessage: sErrMsg
			});
		},

		getEntitySet: function (sEntitySet) {
			return mockserver.getMockServer().getEntitySetData(sEntitySet);
		}

	});

});
