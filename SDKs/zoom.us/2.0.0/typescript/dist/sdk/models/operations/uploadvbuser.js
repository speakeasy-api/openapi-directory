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
exports.UploadVBuserResponse = exports.UploadVBuserRequest = exports.UploadVBuser201ApplicationJson = exports.UploadVBuserRequestBody = exports.UploadVBuserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UploadVBuserPathParams = /** @class */ (function (_super) {
    __extends(UploadVBuserPathParams, _super);
    function UploadVBuserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UploadVBuserPathParams.prototype, "userId", void 0);
    return UploadVBuserPathParams;
}(utils_1.SpeakeasyBase));
exports.UploadVBuserPathParams = UploadVBuserPathParams;
var UploadVBuserRequestBody = /** @class */ (function (_super) {
    __extends(UploadVBuserRequestBody, _super);
    function UploadVBuserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadVBuserRequestBody.prototype, "file", void 0);
    return UploadVBuserRequestBody;
}(utils_1.SpeakeasyBase));
exports.UploadVBuserRequestBody = UploadVBuserRequestBody;
var UploadVBuser201ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadVBuser201ApplicationJson, _super);
    function UploadVBuser201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UploadVBuser201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UploadVBuser201ApplicationJson.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVBuser201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UploadVBuser201ApplicationJson.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UploadVBuser201ApplicationJson.prototype, "type", void 0);
    return UploadVBuser201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadVBuser201ApplicationJson = UploadVBuser201ApplicationJson;
var UploadVBuserRequest = /** @class */ (function (_super) {
    __extends(UploadVBuserRequest, _super);
    function UploadVBuserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadVBuserPathParams)
    ], UploadVBuserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadVBuserRequestBody)
    ], UploadVBuserRequest.prototype, "request", void 0);
    return UploadVBuserRequest;
}(utils_1.SpeakeasyBase));
exports.UploadVBuserRequest = UploadVBuserRequest;
var UploadVBuserResponse = /** @class */ (function (_super) {
    __extends(UploadVBuserResponse, _super);
    function UploadVBuserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UploadVBuserResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadVBuserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadVBuserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadVBuser201ApplicationJson)
    ], UploadVBuserResponse.prototype, "uploadVBuser201ApplicationJSONObject", void 0);
    return UploadVBuserResponse;
}(utils_1.SpeakeasyBase));
exports.UploadVBuserResponse = UploadVBuserResponse;
