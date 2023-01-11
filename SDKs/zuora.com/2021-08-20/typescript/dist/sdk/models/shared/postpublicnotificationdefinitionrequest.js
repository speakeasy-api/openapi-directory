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
exports.PostPublicNotificationDefinitionRequest = exports.PostPublicNotificationDefinitionRequestFilterRule = exports.PostPublicNotificationDefinitionRequestCallout = exports.PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var calloutauth_1 = require("./calloutauth");
var filterruleparameterdefinition_1 = require("./filterruleparameterdefinition");
var PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
(function (PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum) {
    PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Get"] = "GET";
    PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Put"] = "PUT";
    PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Post"] = "POST";
    PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum["Delete"] = "DELETE";
})(PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum = exports.PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum || (exports.PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum = {}));
var PostPublicNotificationDefinitionRequestCallout = /** @class */ (function (_super) {
    __extends(PostPublicNotificationDefinitionRequestCallout, _super);
    function PostPublicNotificationDefinitionRequestCallout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutAuth" }),
        __metadata("design:type", calloutauth_1.CalloutAuth)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "calloutAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutBaseurl" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "calloutBaseurl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutParams" }),
        __metadata("design:type", Object)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "calloutParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutRetry" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "calloutRetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "httpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requiredAuth" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequestCallout.prototype, "requiredAuth", void 0);
    return PostPublicNotificationDefinitionRequestCallout;
}(utils_1.SpeakeasyBase));
exports.PostPublicNotificationDefinitionRequestCallout = PostPublicNotificationDefinitionRequestCallout;
var PostPublicNotificationDefinitionRequestFilterRule = /** @class */ (function (_super) {
    __extends(PostPublicNotificationDefinitionRequestFilterRule, _super);
    function PostPublicNotificationDefinitionRequestFilterRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestFilterRule.prototype, "condition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequestFilterRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters", elemType: filterruleparameterdefinition_1.FilterRuleParameterDefinition }),
        __metadata("design:type", Object)
    ], PostPublicNotificationDefinitionRequestFilterRule.prototype, "parameters", void 0);
    return PostPublicNotificationDefinitionRequestFilterRule;
}(utils_1.SpeakeasyBase));
exports.PostPublicNotificationDefinitionRequestFilterRule = PostPublicNotificationDefinitionRequestFilterRule;
var PostPublicNotificationDefinitionRequest = /** @class */ (function (_super) {
    __extends(PostPublicNotificationDefinitionRequest, _super);
    function PostPublicNotificationDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequest.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout" }),
        __metadata("design:type", PostPublicNotificationDefinitionRequestCallout)
    ], PostPublicNotificationDefinitionRequest.prototype, "callout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calloutActive" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequest.prototype, "calloutActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communicationProfileId" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "communicationProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailActive" }),
        __metadata("design:type", Boolean)
    ], PostPublicNotificationDefinitionRequest.prototype, "emailActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailTemplateId" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "emailTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeNamespace" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "eventTypeNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRule" }),
        __metadata("design:type", PostPublicNotificationDefinitionRequestFilterRule)
    ], PostPublicNotificationDefinitionRequest.prototype, "filterRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterRuleParams" }),
        __metadata("design:type", Object)
    ], PostPublicNotificationDefinitionRequest.prototype, "filterRuleParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPublicNotificationDefinitionRequest.prototype, "name", void 0);
    return PostPublicNotificationDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.PostPublicNotificationDefinitionRequest = PostPublicNotificationDefinitionRequest;
