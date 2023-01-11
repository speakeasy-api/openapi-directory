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
exports.PutPublicNotificationDefinitionRequest = exports.PutPublicNotificationDefinitionRequestFilterRule = exports.PutPublicNotificationDefinitionRequestCallout = exports.PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var calloutauth_1 = require("./calloutauth");
var filterruleparameterdefinition_1 = require("./filterruleparameterdefinition");
var PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
(function (PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum) {
    PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Get"] = "GET";
    PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Put"] = "PUT";
    PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Post"] = "POST";
    PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Delete"] = "DELETE";
})(PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum = exports.PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum || (exports.PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum = {}));
var PutPublicNotificationDefinitionRequestCallout = /** @class */ (function (_super) {
    __extends(PutPublicNotificationDefinitionRequestCallout, _super);
    function PutPublicNotificationDefinitionRequestCallout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutAuth" }),
        __metadata("design:type", calloutauth_1.CalloutAuth)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "calloutAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutBaseurl" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "calloutBaseurl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutParams" }),
        __metadata("design:type", Object)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "calloutParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutRetry" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "calloutRetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requiredAuth" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequestCallout.prototype, "requiredAuth", void 0);
    return PutPublicNotificationDefinitionRequestCallout;
}(utils_1.SpeakeasyBase));
exports.PutPublicNotificationDefinitionRequestCallout = PutPublicNotificationDefinitionRequestCallout;
var PutPublicNotificationDefinitionRequestFilterRule = /** @class */ (function (_super) {
    __extends(PutPublicNotificationDefinitionRequestFilterRule, _super);
    function PutPublicNotificationDefinitionRequestFilterRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestFilterRule.prototype, "condition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequestFilterRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters", elemType: filterruleparameterdefinition_1.FilterRuleParameterDefinition }),
        __metadata("design:type", Object)
    ], PutPublicNotificationDefinitionRequestFilterRule.prototype, "parameters", void 0);
    return PutPublicNotificationDefinitionRequestFilterRule;
}(utils_1.SpeakeasyBase));
exports.PutPublicNotificationDefinitionRequestFilterRule = PutPublicNotificationDefinitionRequestFilterRule;
var PutPublicNotificationDefinitionRequest = /** @class */ (function (_super) {
    __extends(PutPublicNotificationDefinitionRequest, _super);
    function PutPublicNotificationDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequest.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout" }),
        __metadata("design:type", PutPublicNotificationDefinitionRequestCallout)
    ], PutPublicNotificationDefinitionRequest.prototype, "callout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutActive" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequest.prototype, "calloutActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communicationProfileId" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequest.prototype, "communicationProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailActive" }),
        __metadata("design:type", Boolean)
    ], PutPublicNotificationDefinitionRequest.prototype, "emailActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailTemplateId" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequest.prototype, "emailTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRule" }),
        __metadata("design:type", PutPublicNotificationDefinitionRequestFilterRule)
    ], PutPublicNotificationDefinitionRequest.prototype, "filterRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRuleParams" }),
        __metadata("design:type", Object)
    ], PutPublicNotificationDefinitionRequest.prototype, "filterRuleParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPublicNotificationDefinitionRequest.prototype, "name", void 0);
    return PutPublicNotificationDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.PutPublicNotificationDefinitionRequest = PutPublicNotificationDefinitionRequest;
