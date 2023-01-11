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
exports.AccountPlanAddonUpdateResponse = exports.AccountPlanAddonUpdateRequest = exports.AccountPlanAddonUpdateRequests = exports.AccountPlanAddonUpdateMultipartFormData = exports.AccountPlanAddonUpdateApplicationJson = exports.AccountPlanAddonUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPlanAddonUpdatePathParams = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdatePathParams, _super);
    function AccountPlanAddonUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPlanAddonUpdatePathParams.prototype, "accountId", void 0);
    return AccountPlanAddonUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdatePathParams = AccountPlanAddonUpdatePathParams;
// AccountPlanAddonUpdateApplicationJson
/**
 * Account plan object.
**/
var AccountPlanAddonUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdateApplicationJson, _super);
    function AccountPlanAddonUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanAddonUpdateApplicationJson.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanAddonUpdateApplicationJson.prototype, "type", void 0);
    return AccountPlanAddonUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdateApplicationJson = AccountPlanAddonUpdateApplicationJson;
// AccountPlanAddonUpdateMultipartFormData
/**
 * Account plan object.
**/
var AccountPlanAddonUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdateMultipartFormData, _super);
    function AccountPlanAddonUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=hosts" }),
        __metadata("design:type", Number)
    ], AccountPlanAddonUpdateMultipartFormData.prototype, "hosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AccountPlanAddonUpdateMultipartFormData.prototype, "type", void 0);
    return AccountPlanAddonUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdateMultipartFormData = AccountPlanAddonUpdateMultipartFormData;
var AccountPlanAddonUpdateRequests = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdateRequests, _super);
    function AccountPlanAddonUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountPlanAddonUpdateApplicationJson)
    ], AccountPlanAddonUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountPlanAddonUpdateMultipartFormData)
    ], AccountPlanAddonUpdateRequests.prototype, "object1", void 0);
    return AccountPlanAddonUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdateRequests = AccountPlanAddonUpdateRequests;
var AccountPlanAddonUpdateRequest = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdateRequest, _super);
    function AccountPlanAddonUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanAddonUpdatePathParams)
    ], AccountPlanAddonUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPlanAddonUpdateRequests)
    ], AccountPlanAddonUpdateRequest.prototype, "request", void 0);
    return AccountPlanAddonUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdateRequest = AccountPlanAddonUpdateRequest;
var AccountPlanAddonUpdateResponse = /** @class */ (function (_super) {
    __extends(AccountPlanAddonUpdateResponse, _super);
    function AccountPlanAddonUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountPlanAddonUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountPlanAddonUpdateResponse.prototype, "statusCode", void 0);
    return AccountPlanAddonUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountPlanAddonUpdateResponse = AccountPlanAddonUpdateResponse;
