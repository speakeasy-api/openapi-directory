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
exports.ImGroupUpdateResponse = exports.ImGroupUpdateRequest = exports.ImGroupUpdateRequests = exports.ImGroupUpdateMultipartFormData = exports.ImGroupUpdateMultipartFormDataTypeEnum = exports.ImGroupUpdateApplicationJson = exports.ImGroupUpdateApplicationJsonTypeEnum = exports.ImGroupUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ImGroupUpdatePathParams = /** @class */ (function (_super) {
    __extends(ImGroupUpdatePathParams, _super);
    function ImGroupUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ImGroupUpdatePathParams.prototype, "groupId", void 0);
    return ImGroupUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdatePathParams = ImGroupUpdatePathParams;
var ImGroupUpdateApplicationJsonTypeEnum;
(function (ImGroupUpdateApplicationJsonTypeEnum) {
    ImGroupUpdateApplicationJsonTypeEnum["Normal"] = "normal";
    ImGroupUpdateApplicationJsonTypeEnum["Shared"] = "shared";
    ImGroupUpdateApplicationJsonTypeEnum["Restricted"] = "restricted";
})(ImGroupUpdateApplicationJsonTypeEnum = exports.ImGroupUpdateApplicationJsonTypeEnum || (exports.ImGroupUpdateApplicationJsonTypeEnum = {}));
var ImGroupUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(ImGroupUpdateApplicationJson, _super);
    function ImGroupUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImGroupUpdateApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateApplicationJson.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateApplicationJson.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateApplicationJson.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImGroupUpdateApplicationJson.prototype, "type", void 0);
    return ImGroupUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdateApplicationJson = ImGroupUpdateApplicationJson;
var ImGroupUpdateMultipartFormDataTypeEnum;
(function (ImGroupUpdateMultipartFormDataTypeEnum) {
    ImGroupUpdateMultipartFormDataTypeEnum["Normal"] = "normal";
    ImGroupUpdateMultipartFormDataTypeEnum["Shared"] = "shared";
    ImGroupUpdateMultipartFormDataTypeEnum["Restricted"] = "restricted";
})(ImGroupUpdateMultipartFormDataTypeEnum = exports.ImGroupUpdateMultipartFormDataTypeEnum || (exports.ImGroupUpdateMultipartFormDataTypeEnum = {}));
var ImGroupUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(ImGroupUpdateMultipartFormData, _super);
    function ImGroupUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], ImGroupUpdateMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateMultipartFormData.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateMultipartFormData.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupUpdateMultipartFormData.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], ImGroupUpdateMultipartFormData.prototype, "type", void 0);
    return ImGroupUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdateMultipartFormData = ImGroupUpdateMultipartFormData;
var ImGroupUpdateRequests = /** @class */ (function (_super) {
    __extends(ImGroupUpdateRequests, _super);
    function ImGroupUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImGroupUpdateApplicationJson)
    ], ImGroupUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImGroupUpdateMultipartFormData)
    ], ImGroupUpdateRequests.prototype, "object1", void 0);
    return ImGroupUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdateRequests = ImGroupUpdateRequests;
var ImGroupUpdateRequest = /** @class */ (function (_super) {
    __extends(ImGroupUpdateRequest, _super);
    function ImGroupUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupUpdatePathParams)
    ], ImGroupUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupUpdateRequests)
    ], ImGroupUpdateRequest.prototype, "request", void 0);
    return ImGroupUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdateRequest = ImGroupUpdateRequest;
var ImGroupUpdateResponse = /** @class */ (function (_super) {
    __extends(ImGroupUpdateResponse, _super);
    function ImGroupUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupUpdateResponse.prototype, "statusCode", void 0);
    return ImGroupUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupUpdateResponse = ImGroupUpdateResponse;
