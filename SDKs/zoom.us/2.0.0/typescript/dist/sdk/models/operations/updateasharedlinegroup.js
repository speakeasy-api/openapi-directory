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
exports.UpdateASharedLineGroupResponse = exports.UpdateASharedLineGroupRequest = exports.UpdateASharedLineGroupRequests = exports.UpdateASharedLineGroupMultipartFormData = exports.UpdateASharedLineGroupMultipartFormDataStatusEnum = exports.UpdateASharedLineGroupMultipartFormDataPrimaryNumber = exports.UpdateASharedLineGroupApplicationJson = exports.UpdateASharedLineGroupApplicationJsonStatusEnum = exports.UpdateASharedLineGroupApplicationJsonPrimaryNumber = exports.UpdateASharedLineGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateASharedLineGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupPathParams, _super);
    function UpdateASharedLineGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupPathParams.prototype, "sharedLineGroupId", void 0);
    return UpdateASharedLineGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupPathParams = UpdateASharedLineGroupPathParams;
// UpdateASharedLineGroupApplicationJsonPrimaryNumber
/**
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
var UpdateASharedLineGroupApplicationJsonPrimaryNumber = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupApplicationJsonPrimaryNumber, _super);
    function UpdateASharedLineGroupApplicationJsonPrimaryNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupApplicationJsonPrimaryNumber.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupApplicationJsonPrimaryNumber.prototype, "number", void 0);
    return UpdateASharedLineGroupApplicationJsonPrimaryNumber;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupApplicationJsonPrimaryNumber = UpdateASharedLineGroupApplicationJsonPrimaryNumber;
var UpdateASharedLineGroupApplicationJsonStatusEnum;
(function (UpdateASharedLineGroupApplicationJsonStatusEnum) {
    UpdateASharedLineGroupApplicationJsonStatusEnum["Active"] = "active";
    UpdateASharedLineGroupApplicationJsonStatusEnum["Inactive"] = "inactive";
})(UpdateASharedLineGroupApplicationJsonStatusEnum = exports.UpdateASharedLineGroupApplicationJsonStatusEnum || (exports.UpdateASharedLineGroupApplicationJsonStatusEnum = {}));
var UpdateASharedLineGroupApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupApplicationJson, _super);
    function UpdateASharedLineGroupApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateASharedLineGroupApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_number" }),
        __metadata("design:type", UpdateASharedLineGroupApplicationJsonPrimaryNumber)
    ], UpdateASharedLineGroupApplicationJson.prototype, "primaryNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupApplicationJson.prototype, "timezone", void 0);
    return UpdateASharedLineGroupApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupApplicationJson = UpdateASharedLineGroupApplicationJson;
// UpdateASharedLineGroupMultipartFormDataPrimaryNumber
/**
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
var UpdateASharedLineGroupMultipartFormDataPrimaryNumber = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupMultipartFormDataPrimaryNumber, _super);
    function UpdateASharedLineGroupMultipartFormDataPrimaryNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupMultipartFormDataPrimaryNumber.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupMultipartFormDataPrimaryNumber.prototype, "number", void 0);
    return UpdateASharedLineGroupMultipartFormDataPrimaryNumber;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupMultipartFormDataPrimaryNumber = UpdateASharedLineGroupMultipartFormDataPrimaryNumber;
var UpdateASharedLineGroupMultipartFormDataStatusEnum;
(function (UpdateASharedLineGroupMultipartFormDataStatusEnum) {
    UpdateASharedLineGroupMultipartFormDataStatusEnum["Active"] = "active";
    UpdateASharedLineGroupMultipartFormDataStatusEnum["Inactive"] = "inactive";
})(UpdateASharedLineGroupMultipartFormDataStatusEnum = exports.UpdateASharedLineGroupMultipartFormDataStatusEnum || (exports.UpdateASharedLineGroupMultipartFormDataStatusEnum = {}));
var UpdateASharedLineGroupMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupMultipartFormData, _super);
    function UpdateASharedLineGroupMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupMultipartFormData.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateASharedLineGroupMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=primary_number;json=true" }),
        __metadata("design:type", UpdateASharedLineGroupMultipartFormDataPrimaryNumber)
    ], UpdateASharedLineGroupMultipartFormData.prototype, "primaryNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupMultipartFormData.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupMultipartFormData.prototype, "timezone", void 0);
    return UpdateASharedLineGroupMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupMultipartFormData = UpdateASharedLineGroupMultipartFormData;
var UpdateASharedLineGroupRequests = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupRequests, _super);
    function UpdateASharedLineGroupRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateASharedLineGroupApplicationJson)
    ], UpdateASharedLineGroupRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateASharedLineGroupMultipartFormData)
    ], UpdateASharedLineGroupRequests.prototype, "object1", void 0);
    return UpdateASharedLineGroupRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupRequests = UpdateASharedLineGroupRequests;
var UpdateASharedLineGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupRequest, _super);
    function UpdateASharedLineGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateASharedLineGroupPathParams)
    ], UpdateASharedLineGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateASharedLineGroupRequests)
    ], UpdateASharedLineGroupRequest.prototype, "request", void 0);
    return UpdateASharedLineGroupRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupRequest = UpdateASharedLineGroupRequest;
var UpdateASharedLineGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateASharedLineGroupResponse, _super);
    function UpdateASharedLineGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateASharedLineGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateASharedLineGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateASharedLineGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateASharedLineGroupResponse.prototype, "updateASharedLineGroup204ApplicationJSONAny", void 0);
    return UpdateASharedLineGroupResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateASharedLineGroupResponse = UpdateASharedLineGroupResponse;
