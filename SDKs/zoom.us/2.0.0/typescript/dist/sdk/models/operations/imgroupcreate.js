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
exports.ImGroupCreateResponse = exports.ImGroupCreateRequest = exports.ImGroupCreate201ApplicationJson = exports.ImGroupCreateRequests = exports.ImGroupCreateMultipartFormData = exports.ImGroupCreateMultipartFormDataTypeEnum = exports.ImGroupCreateApplicationJson = exports.ImGroupCreateApplicationJsonTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ImGroupCreateApplicationJsonTypeEnum;
(function (ImGroupCreateApplicationJsonTypeEnum) {
    ImGroupCreateApplicationJsonTypeEnum["Normal"] = "normal";
    ImGroupCreateApplicationJsonTypeEnum["Shared"] = "shared";
    ImGroupCreateApplicationJsonTypeEnum["Restricted"] = "restricted";
})(ImGroupCreateApplicationJsonTypeEnum = exports.ImGroupCreateApplicationJsonTypeEnum || (exports.ImGroupCreateApplicationJsonTypeEnum = {}));
var ImGroupCreateApplicationJson = /** @class */ (function (_super) {
    __extends(ImGroupCreateApplicationJson, _super);
    function ImGroupCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImGroupCreateApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateApplicationJson.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateApplicationJson.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateApplicationJson.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImGroupCreateApplicationJson.prototype, "type", void 0);
    return ImGroupCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreateApplicationJson = ImGroupCreateApplicationJson;
var ImGroupCreateMultipartFormDataTypeEnum;
(function (ImGroupCreateMultipartFormDataTypeEnum) {
    ImGroupCreateMultipartFormDataTypeEnum["Normal"] = "normal";
    ImGroupCreateMultipartFormDataTypeEnum["Shared"] = "shared";
    ImGroupCreateMultipartFormDataTypeEnum["Restricted"] = "restricted";
})(ImGroupCreateMultipartFormDataTypeEnum = exports.ImGroupCreateMultipartFormDataTypeEnum || (exports.ImGroupCreateMultipartFormDataTypeEnum = {}));
var ImGroupCreateMultipartFormData = /** @class */ (function (_super) {
    __extends(ImGroupCreateMultipartFormData, _super);
    function ImGroupCreateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], ImGroupCreateMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateMultipartFormData.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateMultipartFormData.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreateMultipartFormData.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], ImGroupCreateMultipartFormData.prototype, "type", void 0);
    return ImGroupCreateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreateMultipartFormData = ImGroupCreateMultipartFormData;
var ImGroupCreateRequests = /** @class */ (function (_super) {
    __extends(ImGroupCreateRequests, _super);
    function ImGroupCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImGroupCreateApplicationJson)
    ], ImGroupCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImGroupCreateMultipartFormData)
    ], ImGroupCreateRequests.prototype, "object1", void 0);
    return ImGroupCreateRequests;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreateRequests = ImGroupCreateRequests;
var ImGroupCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(ImGroupCreate201ApplicationJson, _super);
    function ImGroupCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroupCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImGroupCreate201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreate201ApplicationJson.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreate201ApplicationJson.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupCreate201ApplicationJson.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], ImGroupCreate201ApplicationJson.prototype, "totalMembers", void 0);
    return ImGroupCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreate201ApplicationJson = ImGroupCreate201ApplicationJson;
var ImGroupCreateRequest = /** @class */ (function (_super) {
    __extends(ImGroupCreateRequest, _super);
    function ImGroupCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupCreateRequests)
    ], ImGroupCreateRequest.prototype, "request", void 0);
    return ImGroupCreateRequest;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreateRequest = ImGroupCreateRequest;
var ImGroupCreateResponse = /** @class */ (function (_super) {
    __extends(ImGroupCreateResponse, _super);
    function ImGroupCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImGroupCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImGroupCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupCreate201ApplicationJson)
    ], ImGroupCreateResponse.prototype, "imGroupCreate201ApplicationJSONObject", void 0);
    return ImGroupCreateResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupCreateResponse = ImGroupCreateResponse;
