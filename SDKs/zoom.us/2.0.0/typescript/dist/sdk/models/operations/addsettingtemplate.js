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
exports.AddSettingTemplateResponse = exports.AddSettingTemplateRequest = exports.AddSettingTemplate201ApplicationJson = exports.AddSettingTemplateRequests = exports.AddSettingTemplateMultipartFormData = exports.AddSettingTemplateMultipartFormDataTypeEnum = exports.AddSettingTemplateApplicationJson = exports.AddSettingTemplateApplicationJsonTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AddSettingTemplateApplicationJsonTypeEnum;
(function (AddSettingTemplateApplicationJsonTypeEnum) {
    AddSettingTemplateApplicationJsonTypeEnum["User"] = "user";
    AddSettingTemplateApplicationJsonTypeEnum["Group"] = "group";
    AddSettingTemplateApplicationJsonTypeEnum["AutoReceptionist"] = "autoReceptionist";
    AddSettingTemplateApplicationJsonTypeEnum["Commonarea"] = "commonarea";
    AddSettingTemplateApplicationJsonTypeEnum["Interop"] = "interop";
})(AddSettingTemplateApplicationJsonTypeEnum = exports.AddSettingTemplateApplicationJsonTypeEnum || (exports.AddSettingTemplateApplicationJsonTypeEnum = {}));
var AddSettingTemplateApplicationJson = /** @class */ (function (_super) {
    __extends(AddSettingTemplateApplicationJson, _super);
    function AddSettingTemplateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AddSettingTemplateApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddSettingTemplateApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], AddSettingTemplateApplicationJson.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddSettingTemplateApplicationJson.prototype, "type", void 0);
    return AddSettingTemplateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplateApplicationJson = AddSettingTemplateApplicationJson;
var AddSettingTemplateMultipartFormDataTypeEnum;
(function (AddSettingTemplateMultipartFormDataTypeEnum) {
    AddSettingTemplateMultipartFormDataTypeEnum["User"] = "user";
    AddSettingTemplateMultipartFormDataTypeEnum["Group"] = "group";
    AddSettingTemplateMultipartFormDataTypeEnum["AutoReceptionist"] = "autoReceptionist";
    AddSettingTemplateMultipartFormDataTypeEnum["Commonarea"] = "commonarea";
    AddSettingTemplateMultipartFormDataTypeEnum["Interop"] = "interop";
})(AddSettingTemplateMultipartFormDataTypeEnum = exports.AddSettingTemplateMultipartFormDataTypeEnum || (exports.AddSettingTemplateMultipartFormDataTypeEnum = {}));
var AddSettingTemplateMultipartFormData = /** @class */ (function (_super) {
    __extends(AddSettingTemplateMultipartFormData, _super);
    function AddSettingTemplateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], AddSettingTemplateMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], AddSettingTemplateMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], AddSettingTemplateMultipartFormData.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AddSettingTemplateMultipartFormData.prototype, "type", void 0);
    return AddSettingTemplateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplateMultipartFormData = AddSettingTemplateMultipartFormData;
var AddSettingTemplateRequests = /** @class */ (function (_super) {
    __extends(AddSettingTemplateRequests, _super);
    function AddSettingTemplateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddSettingTemplateApplicationJson)
    ], AddSettingTemplateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddSettingTemplateMultipartFormData)
    ], AddSettingTemplateRequests.prototype, "object1", void 0);
    return AddSettingTemplateRequests;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplateRequests = AddSettingTemplateRequests;
var AddSettingTemplate201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddSettingTemplate201ApplicationJson, _super);
    function AddSettingTemplate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AddSettingTemplate201ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddSettingTemplate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddSettingTemplate201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddSettingTemplate201ApplicationJson.prototype, "type", void 0);
    return AddSettingTemplate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplate201ApplicationJson = AddSettingTemplate201ApplicationJson;
var AddSettingTemplateRequest = /** @class */ (function (_super) {
    __extends(AddSettingTemplateRequest, _super);
    function AddSettingTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSettingTemplateRequests)
    ], AddSettingTemplateRequest.prototype, "request", void 0);
    return AddSettingTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplateRequest = AddSettingTemplateRequest;
var AddSettingTemplateResponse = /** @class */ (function (_super) {
    __extends(AddSettingTemplateResponse, _super);
    function AddSettingTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddSettingTemplateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddSettingTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddSettingTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSettingTemplate201ApplicationJson)
    ], AddSettingTemplateResponse.prototype, "addSettingTemplate201ApplicationJSONObject", void 0);
    return AddSettingTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.AddSettingTemplateResponse = AddSettingTemplateResponse;
