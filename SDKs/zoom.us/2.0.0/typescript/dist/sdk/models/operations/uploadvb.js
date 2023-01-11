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
exports.UploadVbResponse = exports.UploadVbRequest = exports.UploadVb201ApplicationJson = exports.UploadVbRequestBody = exports.UploadVbPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UploadVbPathParams = /** @class */ (function (_super) {
    __extends(UploadVbPathParams, _super);
    function UploadVbPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], UploadVbPathParams.prototype, "accountId", void 0);
    return UploadVbPathParams;
}(utils_1.SpeakeasyBase));
exports.UploadVbPathParams = UploadVbPathParams;
var UploadVbRequestBody = /** @class */ (function (_super) {
    __extends(UploadVbRequestBody, _super);
    function UploadVbRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadVbRequestBody.prototype, "file", void 0);
    return UploadVbRequestBody;
}(utils_1.SpeakeasyBase));
exports.UploadVbRequestBody = UploadVbRequestBody;
var UploadVb201ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadVb201ApplicationJson, _super);
    function UploadVb201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UploadVb201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UploadVb201ApplicationJson.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVb201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UploadVb201ApplicationJson.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UploadVb201ApplicationJson.prototype, "type", void 0);
    return UploadVb201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadVb201ApplicationJson = UploadVb201ApplicationJson;
var UploadVbRequest = /** @class */ (function (_super) {
    __extends(UploadVbRequest, _super);
    function UploadVbRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadVbPathParams)
    ], UploadVbRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadVbRequestBody)
    ], UploadVbRequest.prototype, "request", void 0);
    return UploadVbRequest;
}(utils_1.SpeakeasyBase));
exports.UploadVbRequest = UploadVbRequest;
var UploadVbResponse = /** @class */ (function (_super) {
    __extends(UploadVbResponse, _super);
    function UploadVbResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UploadVbResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadVbResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadVbResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadVb201ApplicationJson)
    ], UploadVbResponse.prototype, "uploadVB201ApplicationJSONObject", void 0);
    return UploadVbResponse;
}(utils_1.SpeakeasyBase));
exports.UploadVbResponse = UploadVbResponse;
