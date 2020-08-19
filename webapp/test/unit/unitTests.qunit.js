/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5ex/uiexer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});