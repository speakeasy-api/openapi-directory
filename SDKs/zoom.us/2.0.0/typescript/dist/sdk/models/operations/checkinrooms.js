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
exports.CheckInRoomsResponse = exports.CheckInRoomsRequest = exports.CheckInRoomsRequests = exports.CheckInRoomsMultipartFormData = exports.CheckInRoomsMultipartFormDataParams = exports.CheckInRoomsApplicationJson = exports.CheckInRoomsApplicationJsonParams = exports.CheckInRoomsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CheckInRoomsPathParams = /** @class */ (function (_super) {
    __extends(CheckInRoomsPathParams, _super);
    function CheckInRoomsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CheckInRoomsPathParams.prototype, "id", void 0);
    return CheckInRoomsPathParams;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsPathParams = CheckInRoomsPathParams;
var CheckInRoomsApplicationJsonParams = /** @class */ (function (_super) {
    __extends(CheckInRoomsApplicationJsonParams, _super);
    function CheckInRoomsApplicationJsonParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calendar_id" }),
        __metadata("design:type", String)
    ], CheckInRoomsApplicationJsonParams.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=change_key" }),
        __metadata("design:type", String)
    ], CheckInRoomsApplicationJsonParams.prototype, "changeKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_id" }),
        __metadata("design:type", String)
    ], CheckInRoomsApplicationJsonParams.prototype, "eventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_email" }),
        __metadata("design:type", String)
    ], CheckInRoomsApplicationJsonParams.prototype, "resourceEmail", void 0);
    return CheckInRoomsApplicationJsonParams;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsApplicationJsonParams = CheckInRoomsApplicationJsonParams;
var CheckInRoomsApplicationJson = /** @class */ (function (_super) {
    __extends(CheckInRoomsApplicationJson, _super);
    function CheckInRoomsApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], CheckInRoomsApplicationJson.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=params" }),
        __metadata("design:type", CheckInRoomsApplicationJsonParams)
    ], CheckInRoomsApplicationJson.prototype, "params", void 0);
    return CheckInRoomsApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsApplicationJson = CheckInRoomsApplicationJson;
var CheckInRoomsMultipartFormDataParams = /** @class */ (function (_super) {
    __extends(CheckInRoomsMultipartFormDataParams, _super);
    function CheckInRoomsMultipartFormDataParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calendar_id" }),
        __metadata("design:type", String)
    ], CheckInRoomsMultipartFormDataParams.prototype, "calendarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=change_key" }),
        __metadata("design:type", String)
    ], CheckInRoomsMultipartFormDataParams.prototype, "changeKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_id" }),
        __metadata("design:type", String)
    ], CheckInRoomsMultipartFormDataParams.prototype, "eventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_email" }),
        __metadata("design:type", String)
    ], CheckInRoomsMultipartFormDataParams.prototype, "resourceEmail", void 0);
    return CheckInRoomsMultipartFormDataParams;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsMultipartFormDataParams = CheckInRoomsMultipartFormDataParams;
var CheckInRoomsMultipartFormData = /** @class */ (function (_super) {
    __extends(CheckInRoomsMultipartFormData, _super);
    function CheckInRoomsMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=method" }),
        __metadata("design:type", String)
    ], CheckInRoomsMultipartFormData.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=params;json=true" }),
        __metadata("design:type", CheckInRoomsMultipartFormDataParams)
    ], CheckInRoomsMultipartFormData.prototype, "params", void 0);
    return CheckInRoomsMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsMultipartFormData = CheckInRoomsMultipartFormData;
var CheckInRoomsRequests = /** @class */ (function (_super) {
    __extends(CheckInRoomsRequests, _super);
    function CheckInRoomsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CheckInRoomsApplicationJson)
    ], CheckInRoomsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CheckInRoomsMultipartFormData)
    ], CheckInRoomsRequests.prototype, "object1", void 0);
    return CheckInRoomsRequests;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsRequests = CheckInRoomsRequests;
var CheckInRoomsRequest = /** @class */ (function (_super) {
    __extends(CheckInRoomsRequest, _super);
    function CheckInRoomsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckInRoomsPathParams)
    ], CheckInRoomsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckInRoomsRequests)
    ], CheckInRoomsRequest.prototype, "request", void 0);
    return CheckInRoomsRequest;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsRequest = CheckInRoomsRequest;
var CheckInRoomsResponse = /** @class */ (function (_super) {
    __extends(CheckInRoomsResponse, _super);
    function CheckInRoomsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CheckInRoomsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CheckInRoomsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CheckInRoomsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CheckInRoomsResponse.prototype, "checkInRooms202ApplicationJSONAny", void 0);
    return CheckInRoomsResponse;
}(utils_1.SpeakeasyBase));
exports.CheckInRoomsResponse = CheckInRoomsResponse;
