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
exports.AccountPlanBaseUpdateResponse = exports.AccountPlanBaseUpdateRequest = exports.AccountPlanBaseUpdateRequests = exports.AccountPlanBaseUpdateMultipartFormData = exports.AccountPlanBaseUpdateApplicationJson = exports.AccountPlanBaseUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPlanBaseUpdatePathParams = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdatePathParams, _super);
    function AccountPlanBaseUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlanBaseUpdatePathParams.prototype, "accountId", void 0);
    return AccountPlanBaseUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdatePathParams = AccountPlanBaseUpdatePathParams;
// AccountPlanBaseUpdateApplicationJson
/**
 * Account base plan object.
**/
var AccountPlanBaseUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdateApplicationJson, _super);
    function AccountPlanBaseUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanBaseUpdateApplicationJson.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanBaseUpdateApplicationJson.prototype, "type", void 0);
    return AccountPlanBaseUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdateApplicationJson = AccountPlanBaseUpdateApplicationJson;
// AccountPlanBaseUpdateMultipartFormData
/**
 * Account base plan object.
**/
var AccountPlanBaseUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdateMultipartFormData, _super);
    function AccountPlanBaseUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanBaseUpdateMultipartFormData.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanBaseUpdateMultipartFormData.prototype, "type", void 0);
    return AccountPlanBaseUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdateMultipartFormData = AccountPlanBaseUpdateMultipartFormData;
var AccountPlanBaseUpdateRequests = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdateRequests, _super);
    function AccountPlanBaseUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountPlanBaseUpdateApplicationJson)
    ], AccountPlanBaseUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountPlanBaseUpdateMultipartFormData)
    ], AccountPlanBaseUpdateRequests.prototype, "object1", void 0);
    return AccountPlanBaseUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdateRequests = AccountPlanBaseUpdateRequests;
var AccountPlanBaseUpdateRequest = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdateRequest, _super);
    function AccountPlanBaseUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanBaseUpdatePathParams)
    ], AccountPlanBaseUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanBaseUpdateRequests)
    ], AccountPlanBaseUpdateRequest.prototype, "request", void 0);
    return AccountPlanBaseUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdateRequest = AccountPlanBaseUpdateRequest;
var AccountPlanBaseUpdateResponse = /** @class */ (function (_super) {
    __extends(AccountPlanBaseUpdateResponse, _super);
    function AccountPlanBaseUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlanBaseUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlanBaseUpdateResponse.prototype, "statusCode", void 0);
    return AccountPlanBaseUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlanBaseUpdateResponse = AccountPlanBaseUpdateResponse;
