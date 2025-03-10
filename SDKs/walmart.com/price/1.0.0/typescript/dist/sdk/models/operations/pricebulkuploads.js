"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PriceBulkUploadsResponse = exports.PriceBulkUploads200ApplicationJSON = exports.PriceBulkUploads200ApplicationXML = exports.PriceBulkUploadsRequest = exports.PriceBulkUploadsFeedTypeEnum = exports.PriceBulkUploadsRequestBody = exports.PriceBulkUploadsRequestBodyFile = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PriceBulkUploadsRequestBodyFile = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequestBodyFile, _super);
    function PriceBulkUploadsRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PriceBulkUploadsRequestBodyFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequestBodyFile.prototype, "file", void 0);
    return PriceBulkUploadsRequestBodyFile;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploadsRequestBodyFile = PriceBulkUploadsRequestBodyFile;
/**
 * The request body consists of a Feed file attached to the request based on the feedType selected
 */
var PriceBulkUploadsRequestBody = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequestBody, _super);
    function PriceBulkUploadsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", PriceBulkUploadsRequestBodyFile)
    ], PriceBulkUploadsRequestBody.prototype, "file", void 0);
    return PriceBulkUploadsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploadsRequestBody = PriceBulkUploadsRequestBody;
/**
 * The feed Type
 */
var PriceBulkUploadsFeedTypeEnum;
(function (PriceBulkUploadsFeedTypeEnum) {
    PriceBulkUploadsFeedTypeEnum["Price"] = "price";
    PriceBulkUploadsFeedTypeEnum["CptSellerEligibility"] = "CPT_SELLER_ELIGIBILITY";
})(PriceBulkUploadsFeedTypeEnum = exports.PriceBulkUploadsFeedTypeEnum || (exports.PriceBulkUploadsFeedTypeEnum = {}));
var PriceBulkUploadsRequest = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequest, _super);
    function PriceBulkUploadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PriceBulkUploadsRequestBody)
    ], PriceBulkUploadsRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE",
        }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequest.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID",
        }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequest.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN",
        }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequest.prototype, "wmSecAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=WM_SVC.NAME",
        }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequest.prototype, "wmSvcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=feedType",
        }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequest.prototype, "feedType", void 0);
    return PriceBulkUploadsRequest;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploadsRequest = PriceBulkUploadsRequest;
/**
 * Successful Operation
 */
var PriceBulkUploads200ApplicationXML = /** @class */ (function (_super) {
    __extends(PriceBulkUploads200ApplicationXML, _super);
    function PriceBulkUploads200ApplicationXML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PriceBulkUploads200ApplicationXML.prototype, "additionalAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PriceBulkUploads200ApplicationXML.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PriceBulkUploads200ApplicationXML.prototype, "feedId", void 0);
    return PriceBulkUploads200ApplicationXML;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploads200ApplicationXML = PriceBulkUploads200ApplicationXML;
/**
 * Successful Operation
 */
var PriceBulkUploads200ApplicationJSON = /** @class */ (function (_super) {
    __extends(PriceBulkUploads200ApplicationJSON, _super);
    function PriceBulkUploads200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "additionalAttributes" }),
        __metadata("design:type", Object)
    ], PriceBulkUploads200ApplicationJSON.prototype, "additionalAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errors" }),
        __metadata("design:type", Object)
    ], PriceBulkUploads200ApplicationJSON.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "feedId" }),
        __metadata("design:type", String)
    ], PriceBulkUploads200ApplicationJSON.prototype, "feedId", void 0);
    return PriceBulkUploads200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploads200ApplicationJSON = PriceBulkUploads200ApplicationJSON;
var PriceBulkUploadsResponse = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsResponse, _super);
    function PriceBulkUploadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PriceBulkUploadsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PriceBulkUploadsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PriceBulkUploadsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PriceBulkUploadsResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PriceBulkUploads200ApplicationJSON)
    ], PriceBulkUploadsResponse.prototype, "priceBulkUploads200ApplicationJSONObject", void 0);
    return PriceBulkUploadsResponse;
}(utils_1.SpeakeasyBase));
exports.PriceBulkUploadsResponse = PriceBulkUploadsResponse;
