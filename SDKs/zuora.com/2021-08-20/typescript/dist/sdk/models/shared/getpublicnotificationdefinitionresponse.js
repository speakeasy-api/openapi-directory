"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPublicNotificationDefinitionResponse = exports.GetPublicNotificationDefinitionResponseFilterRule = exports.GetPublicNotificationDefinitionResponseCallout = exports.GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var calloutauth_1 = require("./calloutauth");
var filterruleparameterdefinition_1 = require("./filterruleparameterdefinition");
var GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum;
(function (GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum) {
    GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum["Get"] = "GET";
    GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum["Put"] = "PUT";
    GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum["Post"] = "POST";
    GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum["Delete"] = "DELETE";
})(GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum = exports.GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum || (exports.GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum = {}));
var GetPublicNotificationDefinitionResponseCallout = /** @class */ (function (_super) {
    __extends(GetPublicNotificationDefinitionResponseCallout, _super);
    function GetPublicNotificationDefinitionResponseCallout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutAuth" }),
        __metadata("design:type", calloutauth_1.CalloutAuth)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "calloutAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutBaseurl" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "calloutBaseurl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutParams" }),
        __metadata("design:type", Object)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "calloutParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutRetry" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "calloutRetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requiredAuth" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponseCallout.prototype, "requiredAuth", void 0);
    return GetPublicNotificationDefinitionResponseCallout;
}(utils_1.SpeakeasyBase));
exports.GetPublicNotificationDefinitionResponseCallout = GetPublicNotificationDefinitionResponseCallout;
var GetPublicNotificationDefinitionResponseFilterRule = /** @class */ (function (_super) {
    __extends(GetPublicNotificationDefinitionResponseFilterRule, _super);
    function GetPublicNotificationDefinitionResponseFilterRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseFilterRule.prototype, "condition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseFilterRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseFilterRule.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponseFilterRule.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters", elemType: filterruleparameterdefinition_1.FilterRuleParameterDefinition }),
        __metadata("design:type", Object)
    ], GetPublicNotificationDefinitionResponseFilterRule.prototype, "parameters", void 0);
    return GetPublicNotificationDefinitionResponseFilterRule;
}(utils_1.SpeakeasyBase));
exports.GetPublicNotificationDefinitionResponseFilterRule = GetPublicNotificationDefinitionResponseFilterRule;
var GetPublicNotificationDefinitionResponse = /** @class */ (function (_super) {
    __extends(GetPublicNotificationDefinitionResponse, _super);
    function GetPublicNotificationDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponse.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout" }),
        __metadata("design:type", GetPublicNotificationDefinitionResponseCallout)
    ], GetPublicNotificationDefinitionResponse.prototype, "callout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutActive" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponse.prototype, "calloutActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communicationProfileId" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "communicationProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdOn" }),
        __metadata("design:type", Date)
    ], GetPublicNotificationDefinitionResponse.prototype, "createdOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailActive" }),
        __metadata("design:type", Boolean)
    ], GetPublicNotificationDefinitionResponse.prototype, "emailActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailTemplateId" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "emailTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeNamespace" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "eventTypeNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRule" }),
        __metadata("design:type", GetPublicNotificationDefinitionResponseFilterRule)
    ], GetPublicNotificationDefinitionResponse.prototype, "filterRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRuleParams" }),
        __metadata("design:type", Object)
    ], GetPublicNotificationDefinitionResponse.prototype, "filterRuleParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], GetPublicNotificationDefinitionResponse.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedOn" }),
        __metadata("design:type", Date)
    ], GetPublicNotificationDefinitionResponse.prototype, "updatedOn", void 0);
    return GetPublicNotificationDefinitionResponse;
}(utils_1.SpeakeasyBase));
exports.GetPublicNotificationDefinitionResponse = GetPublicNotificationDefinitionResponse;
