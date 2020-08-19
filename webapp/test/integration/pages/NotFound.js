sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/I18NText",
	"./Common"
], function (Opa5, Press, I18NText, Common) {
	"use strict";

	var sObjectNotFoundView = "ObjectNotFound",
		sNotFoundView = "NotFound";

	Opa5.createPageObjects({
		onTheNotFoundPage: {
			baseClass: Common,

			actions: {

				iPressTheObjectNotFoundShowWorklistLink: function () {
					return this.waitFor({
						id: "link",
						viewName: sObjectNotFoundView,
						actions: new Press(),
						errorMessage: "Did not find the link on the " + sObjectNotFoundView + " page"
					});
				},

				iPressTheNotFoundShowWorklistLink: function () {
					return this.waitFor({
						id: "link",
						viewName: sNotFoundView,
						actions: new Press(),
						errorMessage: "Did not find the link on the " + sNotFoundView + " page"
					});
				}
			},

			assertions: {

				iShouldSeeObjectNotFound: function () {
					return this.waitFor({
						id: "page",
						viewName: sObjectNotFoundView,
						matchers: [
							new I18NText({
								key: "objectTitle",
								propertyName: "title"
							}),
							new I18NText({
								key: "noObjectFoundText",
								propertyName: "text"
							})
						],
						success: function (oPage) {
							Opa5.assert.ok(true, "The 'Object not found' text and title are displayed");
						},
						errorMessage: "Did not display the 'Object not found' page"
					});
				},

				iShouldSeeResourceNotFound: function () {
					return this.waitFor({
						id: "page",
						viewName: sNotFoundView,
						matchers: [
							new I18NText({
								key: "notFoundTitle",
								propertyName: "title"
							}),
							new I18NText({
								key: "notFoundText",
								propertyName: "text"
							})
						],
						success: function (oPage) {
							Opa5.assert.ok(true, "The 'Object not found' text and title are displayed");
						},
						errorMessage: "Did not display the 'Object not found' page"
					});
				}

			}

		}

	});

});
