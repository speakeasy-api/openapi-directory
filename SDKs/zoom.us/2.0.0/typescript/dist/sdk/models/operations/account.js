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
exports.AccountResponse = exports.AccountRequest = exports.Account200ApplicationJson = exports.Account200ApplicationJsonOptions = exports.Account200ApplicationJsonOptionsPayModeEnum = exports.AccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountPathParams = /** @class */ (function (_super) {
    __extends(AccountPathParams, _super);
    function AccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountPathParams.prototype, "accountId", void 0);
    return AccountPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountPathParams = AccountPathParams;
var Account200ApplicationJsonOptionsPayModeEnum;
(function (Account200ApplicationJsonOptionsPayModeEnum) {
    Account200ApplicationJsonOptionsPayModeEnum["Master"] = "master";
    Account200ApplicationJsonOptionsPayModeEnum["Sub"] = "sub";
})(Account200ApplicationJsonOptionsPayModeEnum = exports.Account200ApplicationJsonOptionsPayModeEnum || (exports.Account200ApplicationJsonOptionsPayModeEnum = {}));
// Account200ApplicationJsonOptions
/**
 * Account options object.
**/
var Account200ApplicationJsonOptions = /** @class */ (function (_super) {
    __extends(Account200ApplicationJsonOptions, _super);
    function Account200ApplicationJsonOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_auto_renew" }),
        __metadata("design:type", Boolean)
    ], Account200ApplicationJsonOptions.prototype, "billingAutoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_connector_list" }),
        __metadata("design:type", Array)
    ], Account200ApplicationJsonOptions.prototype, "meetingConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pay_mode" }),
        __metadata("design:type", String)
    ], Account200ApplicationJsonOptions.prototype, "payMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_connector_list" }),
        __metadata("design:type", Array)
    ], Account200ApplicationJsonOptions.prototype, "roomConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_mc" }),
        __metadata("design:type", Boolean)
    ], Account200ApplicationJsonOptions.prototype, "shareMc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_rc" }),
        __metadata("design:type", Boolean)
    ], Account200ApplicationJsonOptions.prototype, "shareRc", void 0);
    return Account200ApplicationJsonOptions;
}(utils_1.SpeakeasyBase));
exports.Account200ApplicationJsonOptions = Account200ApplicationJsonOptions;
var Account200ApplicationJson = /** @class */ (function (_super) {
    __extends(Account200ApplicationJson, _super);
    function Account200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Account200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Account200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Account200ApplicationJsonOptions)
    ], Account200ApplicationJson.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_email" }),
        __metadata("design:type", String)
    ], Account200ApplicationJson.prototype, "ownerEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Account200ApplicationJson.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vanity_url" }),
        __metadata("design:type", String)
    ], Account200ApplicationJson.prototype, "vanityUrl", void 0);
    return Account200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Account200ApplicationJson = Account200ApplicationJson;
var AccountRequest = /** @class */ (function (_super) {
    __extends(AccountRequest, _super);
    function AccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountPathParams)
    ], AccountRequest.prototype, "pathParams", void 0);
    return AccountRequest;
}(utils_1.SpeakeasyBase));
exports.AccountRequest = AccountRequest;
var AccountResponse = /** @class */ (function (_super) {
    __extends(AccountResponse, _super);
    function AccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Account200ApplicationJson)
    ], AccountResponse.prototype, "account200ApplicationJSONObject", void 0);
    return AccountResponse;
}(utils_1.SpeakeasyBase));
exports.AccountResponse = AccountResponse;
