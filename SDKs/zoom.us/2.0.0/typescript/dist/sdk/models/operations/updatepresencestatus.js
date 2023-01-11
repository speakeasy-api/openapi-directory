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
exports.UpdatePresenceStatusResponse = exports.UpdatePresenceStatusRequest = exports.UpdatePresenceStatusRequests = exports.UpdatePresenceStatusMultipartFormData = exports.UpdatePresenceStatusMultipartFormDataStatusEnum = exports.UpdatePresenceStatusApplicationJson = exports.UpdatePresenceStatusApplicationJsonStatusEnum = exports.UpdatePresenceStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdatePresenceStatusPathParams = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusPathParams, _super);
    function UpdatePresenceStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdatePresenceStatusPathParams.prototype, "userId", void 0);
    return UpdatePresenceStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusPathParams = UpdatePresenceStatusPathParams;
var UpdatePresenceStatusApplicationJsonStatusEnum;
(function (UpdatePresenceStatusApplicationJsonStatusEnum) {
    UpdatePresenceStatusApplicationJsonStatusEnum["DoNoDisturb"] = "Do_No_Disturb";
    UpdatePresenceStatusApplicationJsonStatusEnum["Away"] = "Away";
    UpdatePresenceStatusApplicationJsonStatusEnum["Available"] = "Available";
})(UpdatePresenceStatusApplicationJsonStatusEnum = exports.UpdatePresenceStatusApplicationJsonStatusEnum || (exports.UpdatePresenceStatusApplicationJsonStatusEnum = {}));
var UpdatePresenceStatusApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusApplicationJson, _super);
    function UpdatePresenceStatusApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], UpdatePresenceStatusApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdatePresenceStatusApplicationJson.prototype, "status", void 0);
    return UpdatePresenceStatusApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusApplicationJson = UpdatePresenceStatusApplicationJson;
var UpdatePresenceStatusMultipartFormDataStatusEnum;
(function (UpdatePresenceStatusMultipartFormDataStatusEnum) {
    UpdatePresenceStatusMultipartFormDataStatusEnum["DoNoDisturb"] = "Do_No_Disturb";
    UpdatePresenceStatusMultipartFormDataStatusEnum["Away"] = "Away";
    UpdatePresenceStatusMultipartFormDataStatusEnum["Available"] = "Available";
})(UpdatePresenceStatusMultipartFormDataStatusEnum = exports.UpdatePresenceStatusMultipartFormDataStatusEnum || (exports.UpdatePresenceStatusMultipartFormDataStatusEnum = {}));
var UpdatePresenceStatusMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusMultipartFormData, _super);
    function UpdatePresenceStatusMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=duration" }),
        __metadata("design:type", Number)
    ], UpdatePresenceStatusMultipartFormData.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], UpdatePresenceStatusMultipartFormData.prototype, "status", void 0);
    return UpdatePresenceStatusMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusMultipartFormData = UpdatePresenceStatusMultipartFormData;
var UpdatePresenceStatusRequests = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusRequests, _super);
    function UpdatePresenceStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePresenceStatusApplicationJson)
    ], UpdatePresenceStatusRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdatePresenceStatusMultipartFormData)
    ], UpdatePresenceStatusRequests.prototype, "object1", void 0);
    return UpdatePresenceStatusRequests;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusRequests = UpdatePresenceStatusRequests;
var UpdatePresenceStatusRequest = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusRequest, _super);
    function UpdatePresenceStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePresenceStatusPathParams)
    ], UpdatePresenceStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePresenceStatusRequests)
    ], UpdatePresenceStatusRequest.prototype, "request", void 0);
    return UpdatePresenceStatusRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusRequest = UpdatePresenceStatusRequest;
var UpdatePresenceStatusResponse = /** @class */ (function (_super) {
    __extends(UpdatePresenceStatusResponse, _super);
    function UpdatePresenceStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdatePresenceStatusResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePresenceStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePresenceStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePresenceStatusResponse.prototype, "updatePresenceStatus204ApplicationJSONAny", void 0);
    return UpdatePresenceStatusResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePresenceStatusResponse = UpdatePresenceStatusResponse;
