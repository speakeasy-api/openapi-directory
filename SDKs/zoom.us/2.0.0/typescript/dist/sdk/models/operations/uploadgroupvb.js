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
exports.UploadGroupVbResponse = exports.UploadGroupVbRequest = exports.UploadGroupVb201ApplicationJson = exports.UploadGroupVbRequestBody = exports.UploadGroupVbQueryParams = exports.UploadGroupVbPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UploadGroupVbPathParams = /** @class */ (function (_super) {
    __extends(UploadGroupVbPathParams, _super);
    function UploadGroupVbPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], UploadGroupVbPathParams.prototype, "groupId", void 0);
    return UploadGroupVbPathParams;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVbPathParams = UploadGroupVbPathParams;
var UploadGroupVbQueryParams = /** @class */ (function (_super) {
    __extends(UploadGroupVbQueryParams, _super);
    function UploadGroupVbQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=file_ids" }),
        __metadata("design:type", String)
    ], UploadGroupVbQueryParams.prototype, "fileIds", void 0);
    return UploadGroupVbQueryParams;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVbQueryParams = UploadGroupVbQueryParams;
var UploadGroupVbRequestBody = /** @class */ (function (_super) {
    __extends(UploadGroupVbRequestBody, _super);
    function UploadGroupVbRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadGroupVbRequestBody.prototype, "file", void 0);
    return UploadGroupVbRequestBody;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVbRequestBody = UploadGroupVbRequestBody;
var UploadGroupVb201ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadGroupVb201ApplicationJson, _super);
    function UploadGroupVb201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UploadGroupVb201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UploadGroupVb201ApplicationJson.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadGroupVb201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UploadGroupVb201ApplicationJson.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UploadGroupVb201ApplicationJson.prototype, "type", void 0);
    return UploadGroupVb201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVb201ApplicationJson = UploadGroupVb201ApplicationJson;
var UploadGroupVbRequest = /** @class */ (function (_super) {
    __extends(UploadGroupVbRequest, _super);
    function UploadGroupVbRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadGroupVbPathParams)
    ], UploadGroupVbRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadGroupVbQueryParams)
    ], UploadGroupVbRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadGroupVbRequestBody)
    ], UploadGroupVbRequest.prototype, "request", void 0);
    return UploadGroupVbRequest;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVbRequest = UploadGroupVbRequest;
var UploadGroupVbResponse = /** @class */ (function (_super) {
    __extends(UploadGroupVbResponse, _super);
    function UploadGroupVbResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UploadGroupVbResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadGroupVbResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadGroupVbResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadGroupVb201ApplicationJson)
    ], UploadGroupVbResponse.prototype, "uploadGroupVB201ApplicationJSONObject", void 0);
    return UploadGroupVbResponse;
}(utils_1.SpeakeasyBase));
exports.UploadGroupVbResponse = UploadGroupVbResponse;
