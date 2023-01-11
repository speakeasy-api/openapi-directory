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
exports.ManageE911signageResponse = exports.ManageE911signageRequest = exports.ManageE911signage202ApplicationJson = exports.ManageE911signageRequests = void 0;
var utils_1 = require("../../../internal/utils");
var ManageE911signageRequests = /** @class */ (function (_super) {
    __extends(ManageE911signageRequests, _super);
    function ManageE911signageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ManageE911signageRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], ManageE911signageRequests.prototype, "object1", void 0);
    return ManageE911signageRequests;
}(utils_1.SpeakeasyBase));
exports.ManageE911signageRequests = ManageE911signageRequests;
var ManageE911signage202ApplicationJson = /** @class */ (function (_super) {
    __extends(ManageE911signage202ApplicationJson, _super);
    function ManageE911signage202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_id" }),
        __metadata("design:type", String)
    ], ManageE911signage202ApplicationJson.prototype, "eventId", void 0);
    return ManageE911signage202ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ManageE911signage202ApplicationJson = ManageE911signage202ApplicationJson;
var ManageE911signageRequest = /** @class */ (function (_super) {
    __extends(ManageE911signageRequest, _super);
    function ManageE911signageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ManageE911signageRequests)
    ], ManageE911signageRequest.prototype, "request", void 0);
    return ManageE911signageRequest;
}(utils_1.SpeakeasyBase));
exports.ManageE911signageRequest = ManageE911signageRequest;
var ManageE911signageResponse = /** @class */ (function (_super) {
    __extends(ManageE911signageResponse, _super);
    function ManageE911signageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ManageE911signageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ManageE911signageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ManageE911signageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ManageE911signage202ApplicationJson)
    ], ManageE911signageResponse.prototype, "manageE911signage202ApplicationJSONObject", void 0);
    return ManageE911signageResponse;
}(utils_1.SpeakeasyBase));
exports.ManageE911signageResponse = ManageE911signageResponse;
