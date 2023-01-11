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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSipConfigResponse = exports.AssignSipConfigRequest = exports.AssignSipConfigSecurity = exports.AssignSipConfigRequests = exports.AssignSipConfigMultipartFormData = exports.AssignSipConfigApplicationJson = exports.AssignSipConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignSipConfigPathParams = /** @class */ (function (_super) {
    __extends(AssignSipConfigPathParams, _super);
    function AssignSipConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AssignSipConfigPathParams.prototype, "accountId", void 0);
    return AssignSipConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigPathParams = AssignSipConfigPathParams;
var AssignSipConfigApplicationJson = /** @class */ (function (_super) {
    __extends(AssignSipConfigApplicationJson, _super);
    function AssignSipConfigApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AssignSipConfigApplicationJson.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_callout_internal_number" }),
        __metadata("design:type", Boolean)
    ], AssignSipConfigApplicationJson.prototype, "showCalloutInternalNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_zoom_provided_callout_countries" }),
        __metadata("design:type", Number)
    ], AssignSipConfigApplicationJson.prototype, "showZoomProvidedCalloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_zoom_provided_numbers" }),
        __metadata("design:type", Number)
    ], AssignSipConfigApplicationJson.prototype, "showZoomProvidedNumbers", void 0);
    return AssignSipConfigApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigApplicationJson = AssignSipConfigApplicationJson;
var AssignSipConfigMultipartFormData = /** @class */ (function (_super) {
    __extends(AssignSipConfigMultipartFormData, _super);
    function AssignSipConfigMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=enable" }),
        __metadata("design:type", Boolean)
    ], AssignSipConfigMultipartFormData.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=show_callout_internal_number" }),
        __metadata("design:type", Boolean)
    ], AssignSipConfigMultipartFormData.prototype, "showCalloutInternalNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=show_zoom_provided_callout_countries" }),
        __metadata("design:type", Number)
    ], AssignSipConfigMultipartFormData.prototype, "showZoomProvidedCalloutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=show_zoom_provided_numbers" }),
        __metadata("design:type", Number)
    ], AssignSipConfigMultipartFormData.prototype, "showZoomProvidedNumbers", void 0);
    return AssignSipConfigMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigMultipartFormData = AssignSipConfigMultipartFormData;
var AssignSipConfigRequests = /** @class */ (function (_super) {
    __extends(AssignSipConfigRequests, _super);
    function AssignSipConfigRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignSipConfigApplicationJson)
    ], AssignSipConfigRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignSipConfigMultipartFormData)
    ], AssignSipConfigRequests.prototype, "object1", void 0);
    return AssignSipConfigRequests;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigRequests = AssignSipConfigRequests;
var AssignSipConfigSecurity = /** @class */ (function (_super) {
    __extends(AssignSipConfigSecurity, _super);
    function AssignSipConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AssignSipConfigSecurity.prototype, "oAuth", void 0);
    return AssignSipConfigSecurity;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigSecurity = AssignSipConfigSecurity;
var AssignSipConfigRequest = /** @class */ (function (_super) {
    __extends(AssignSipConfigRequest, _super);
    function AssignSipConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipConfigPathParams)
    ], AssignSipConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipConfigRequests)
    ], AssignSipConfigRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipConfigSecurity)
    ], AssignSipConfigRequest.prototype, "security", void 0);
    return AssignSipConfigRequest;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigRequest = AssignSipConfigRequest;
var AssignSipConfigResponse = /** @class */ (function (_super) {
    __extends(AssignSipConfigResponse, _super);
    function AssignSipConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignSipConfigResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignSipConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignSipConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignSipConfigResponse.prototype, "assignSIPConfig204ApplicationJSONAny", void 0);
    return AssignSipConfigResponse;
}(utils_1.SpeakeasyBase));
exports.AssignSipConfigResponse = AssignSipConfigResponse;
