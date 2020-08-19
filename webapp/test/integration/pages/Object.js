sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/BindingPath",
	"./Common",
	"./shareOptions"
], function (Opa5, BindingPath, Common, shareOptions) {
	"use strict";

	var sViewName = "Object";

	Opa5.createPageObjects({
		onTheObjectPage: {
			baseClass: Common,
			viewName: sViewName,

			actions: shareOptions.createActions(sViewName),

			assertions: Object.assign({

				iShouldSeeTheRememberedObject: function () {
					return this.waitFor({
						success: function () {
							var sBindingPath = this.getContext().currentItem.bindingPath;
							return this.waitFor({
								id: "page",
								matchers: new BindingPath({
									path: sBindingPath
								}),
								success: function (oPage) {
									Opa5.assert.ok(true, "Should land on detail page for remembered item");
								},
								errorMessage: "Detail page is not for remembered item with binding path " + sBindingPath
							});
						}
					});
				},

				theObjectViewShouldContainOnlyFormattedUnitNumbers: function () {
					return this.theUnitNumbersShouldHaveTwoDecimals("sap.m.ObjectNumber",
						sViewName,
						"Object numbers are properly formatted",
						"Object view has no entries which can be checked for their formatting");
				},

				theShareTileButtonShouldContainTheRememberedObjectName: function () {
					return this.waitFor({
						id: "shareTile",
						matchers: function (oButton) {
							var sObjectName = this.getContext().currentItem.name;
							var sTitle = oButton.getTitle();
							return sTitle && sTitle.indexOf(sObjectName) > -1;
						}.bind(this),
						success: function () {
							Opa5.assert.ok(true, "The Save as Tile button contains the object name");
						},
						errorMessage: "The Save as Tile did not contain the object name"
					});
				}

			}, shareOptions.createAssertions(sViewName))

		}

	});

});
