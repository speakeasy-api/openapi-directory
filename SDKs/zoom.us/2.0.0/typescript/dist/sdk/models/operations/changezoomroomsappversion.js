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
exports.ChangeZoomRoomsAppVersionResponse = exports.ChangeZoomRoomsAppVersionRequest = exports.ChangeZoomRoomsAppVersionRequests = exports.ChangeZoomRoomsAppVersionMultipartFormData = exports.ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = exports.ChangeZoomRoomsAppVersionApplicationJson = exports.ChangeZoomRoomsAppVersionApplicationJsonActionEnum = exports.ChangeZoomRoomsAppVersionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ChangeZoomRoomsAppVersionPathParams = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionPathParams, _super);
    function ChangeZoomRoomsAppVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], ChangeZoomRoomsAppVersionPathParams.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], ChangeZoomRoomsAppVersionPathParams.prototype, "roomId", void 0);
    return ChangeZoomRoomsAppVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionPathParams = ChangeZoomRoomsAppVersionPathParams;
var ChangeZoomRoomsAppVersionApplicationJsonActionEnum;
(function (ChangeZoomRoomsAppVersionApplicationJsonActionEnum) {
    ChangeZoomRoomsAppVersionApplicationJsonActionEnum["Upgrade"] = "upgrade";
    ChangeZoomRoomsAppVersionApplicationJsonActionEnum["Downgrade"] = "downgrade";
    ChangeZoomRoomsAppVersionApplicationJsonActionEnum["Cancel"] = "cancel";
})(ChangeZoomRoomsAppVersionApplicationJsonActionEnum = exports.ChangeZoomRoomsAppVersionApplicationJsonActionEnum || (exports.ChangeZoomRoomsAppVersionApplicationJsonActionEnum = {}));
var ChangeZoomRoomsAppVersionApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionApplicationJson, _super);
    function ChangeZoomRoomsAppVersionApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangeZoomRoomsAppVersionApplicationJson.prototype, "action", void 0);
    return ChangeZoomRoomsAppVersionApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionApplicationJson = ChangeZoomRoomsAppVersionApplicationJson;
var ChangeZoomRoomsAppVersionMultipartFormDataActionEnum;
(function (ChangeZoomRoomsAppVersionMultipartFormDataActionEnum) {
    ChangeZoomRoomsAppVersionMultipartFormDataActionEnum["Upgrade"] = "upgrade";
    ChangeZoomRoomsAppVersionMultipartFormDataActionEnum["Downgrade"] = "downgrade";
    ChangeZoomRoomsAppVersionMultipartFormDataActionEnum["Cancel"] = "cancel";
})(ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = exports.ChangeZoomRoomsAppVersionMultipartFormDataActionEnum || (exports.ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = {}));
var ChangeZoomRoomsAppVersionMultipartFormData = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionMultipartFormData, _super);
    function ChangeZoomRoomsAppVersionMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], ChangeZoomRoomsAppVersionMultipartFormData.prototype, "action", void 0);
    return ChangeZoomRoomsAppVersionMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionMultipartFormData = ChangeZoomRoomsAppVersionMultipartFormData;
var ChangeZoomRoomsAppVersionRequests = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionRequests, _super);
    function ChangeZoomRoomsAppVersionRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeZoomRoomsAppVersionApplicationJson)
    ], ChangeZoomRoomsAppVersionRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ChangeZoomRoomsAppVersionMultipartFormData)
    ], ChangeZoomRoomsAppVersionRequests.prototype, "object1", void 0);
    return ChangeZoomRoomsAppVersionRequests;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionRequests = ChangeZoomRoomsAppVersionRequests;
var ChangeZoomRoomsAppVersionRequest = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionRequest, _super);
    function ChangeZoomRoomsAppVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeZoomRoomsAppVersionPathParams)
    ], ChangeZoomRoomsAppVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeZoomRoomsAppVersionRequests)
    ], ChangeZoomRoomsAppVersionRequest.prototype, "request", void 0);
    return ChangeZoomRoomsAppVersionRequest;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionRequest = ChangeZoomRoomsAppVersionRequest;
var ChangeZoomRoomsAppVersionResponse = /** @class */ (function (_super) {
    __extends(ChangeZoomRoomsAppVersionResponse, _super);
    function ChangeZoomRoomsAppVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ChangeZoomRoomsAppVersionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChangeZoomRoomsAppVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChangeZoomRoomsAppVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChangeZoomRoomsAppVersionResponse.prototype, "changeZoomRoomsAppVersion204ApplicationJSONAny", void 0);
    return ChangeZoomRoomsAppVersionResponse;
}(utils_1.SpeakeasyBase));
exports.ChangeZoomRoomsAppVersionResponse = ChangeZoomRoomsAppVersionResponse;
