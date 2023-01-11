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
exports.AccountBillingUpdateResponse = exports.AccountBillingUpdateRequest = exports.AccountBillingUpdateRequests = exports.AccountBillingUpdateMultipartFormData = exports.AccountBillingUpdateApplicationJson = exports.AccountBillingUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountBillingUpdatePathParams = /** @class */ (function (_super) {
    __extends(AccountBillingUpdatePathParams, _super);
    function AccountBillingUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountBillingUpdatePathParams.prototype, "accountId", void 0);
    return AccountBillingUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdatePathParams = AccountBillingUpdatePathParams;
// AccountBillingUpdateApplicationJson
/**
 * Billing Contact object.
**/
var AccountBillingUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountBillingUpdateApplicationJson, _super);
    function AccountBillingUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apt" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "apt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateApplicationJson.prototype, "zip", void 0);
    return AccountBillingUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdateApplicationJson = AccountBillingUpdateApplicationJson;
// AccountBillingUpdateMultipartFormData
/**
 * Billing Contact object.
**/
var AccountBillingUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountBillingUpdateMultipartFormData, _super);
    function AccountBillingUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=address" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=apt" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "apt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=city" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=country" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_number" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=state" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=zip" }),
        __metadata("design:type", String)
    ], AccountBillingUpdateMultipartFormData.prototype, "zip", void 0);
    return AccountBillingUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdateMultipartFormData = AccountBillingUpdateMultipartFormData;
var AccountBillingUpdateRequests = /** @class */ (function (_super) {
    __extends(AccountBillingUpdateRequests, _super);
    function AccountBillingUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountBillingUpdateApplicationJson)
    ], AccountBillingUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountBillingUpdateMultipartFormData)
    ], AccountBillingUpdateRequests.prototype, "object1", void 0);
    return AccountBillingUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdateRequests = AccountBillingUpdateRequests;
var AccountBillingUpdateRequest = /** @class */ (function (_super) {
    __extends(AccountBillingUpdateRequest, _super);
    function AccountBillingUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingUpdatePathParams)
    ], AccountBillingUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingUpdateRequests)
    ], AccountBillingUpdateRequest.prototype, "request", void 0);
    return AccountBillingUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdateRequest = AccountBillingUpdateRequest;
var AccountBillingUpdateResponse = /** @class */ (function (_super) {
    __extends(AccountBillingUpdateResponse, _super);
    function AccountBillingUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountBillingUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountBillingUpdateResponse.prototype, "statusCode", void 0);
    return AccountBillingUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountBillingUpdateResponse = AccountBillingUpdateResponse;
