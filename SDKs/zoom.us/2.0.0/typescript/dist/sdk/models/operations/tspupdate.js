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
exports.TspUpdateResponse = exports.TspUpdateRequest = exports.TspUpdateRequests = exports.TspUpdateMultipartFormData = exports.TspUpdateMultipartFormDataTspBridgeEnum = exports.TspUpdateApplicationJson = exports.TspUpdateApplicationJsonTspBridgeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TspUpdateApplicationJsonTspBridgeEnum;
(function (TspUpdateApplicationJsonTspBridgeEnum) {
    TspUpdateApplicationJsonTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    TspUpdateApplicationJsonTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(TspUpdateApplicationJsonTspBridgeEnum = exports.TspUpdateApplicationJsonTspBridgeEnum || (exports.TspUpdateApplicationJsonTspBridgeEnum = {}));
var TspUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(TspUpdateApplicationJson, _super);
    function TspUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_number_unrestricted" }),
        __metadata("design:type", Boolean)
    ], TspUpdateApplicationJson.prototype, "dialInNumberUnrestricted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], TspUpdateApplicationJson.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=master_account_setting_extended" }),
        __metadata("design:type", Boolean)
    ], TspUpdateApplicationJson.prototype, "masterAccountSettingExtended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modify_credential_forbidden" }),
        __metadata("design:type", Boolean)
    ], TspUpdateApplicationJson.prototype, "modifyCredentialForbidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], TspUpdateApplicationJson.prototype, "tspBridge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_enabled" }),
        __metadata("design:type", Boolean)
    ], TspUpdateApplicationJson.prototype, "tspEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_provider" }),
        __metadata("design:type", String)
    ], TspUpdateApplicationJson.prototype, "tspProvider", void 0);
    return TspUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TspUpdateApplicationJson = TspUpdateApplicationJson;
var TspUpdateMultipartFormDataTspBridgeEnum;
(function (TspUpdateMultipartFormDataTspBridgeEnum) {
    TspUpdateMultipartFormDataTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    TspUpdateMultipartFormDataTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(TspUpdateMultipartFormDataTspBridgeEnum = exports.TspUpdateMultipartFormDataTspBridgeEnum || (exports.TspUpdateMultipartFormDataTspBridgeEnum = {}));
var TspUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(TspUpdateMultipartFormData, _super);
    function TspUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=dial_in_number_unrestricted" }),
        __metadata("design:type", Boolean)
    ], TspUpdateMultipartFormData.prototype, "dialInNumberUnrestricted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=enable" }),
        __metadata("design:type", Boolean)
    ], TspUpdateMultipartFormData.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=master_account_setting_extended" }),
        __metadata("design:type", Boolean)
    ], TspUpdateMultipartFormData.prototype, "masterAccountSettingExtended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=modify_credential_forbidden" }),
        __metadata("design:type", Boolean)
    ], TspUpdateMultipartFormData.prototype, "modifyCredentialForbidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], TspUpdateMultipartFormData.prototype, "tspBridge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tsp_enabled" }),
        __metadata("design:type", Boolean)
    ], TspUpdateMultipartFormData.prototype, "tspEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tsp_provider" }),
        __metadata("design:type", String)
    ], TspUpdateMultipartFormData.prototype, "tspProvider", void 0);
    return TspUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.TspUpdateMultipartFormData = TspUpdateMultipartFormData;
var TspUpdateRequests = /** @class */ (function (_super) {
    __extends(TspUpdateRequests, _super);
    function TspUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TspUpdateApplicationJson)
    ], TspUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", TspUpdateMultipartFormData)
    ], TspUpdateRequests.prototype, "object1", void 0);
    return TspUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.TspUpdateRequests = TspUpdateRequests;
var TspUpdateRequest = /** @class */ (function (_super) {
    __extends(TspUpdateRequest, _super);
    function TspUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TspUpdateRequests)
    ], TspUpdateRequest.prototype, "request", void 0);
    return TspUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.TspUpdateRequest = TspUpdateRequest;
var TspUpdateResponse = /** @class */ (function (_super) {
    __extends(TspUpdateResponse, _super);
    function TspUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TspUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TspUpdateResponse.prototype, "statusCode", void 0);
    return TspUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.TspUpdateResponse = TspUpdateResponse;
