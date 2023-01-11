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
exports.AccountsResponse = exports.AccountsRequest = exports.AccountsAccountList = exports.AccountsAccountListAccounts = exports.AccountsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountsQueryParams = /** @class */ (function (_super) {
    __extends(AccountsQueryParams, _super);
    function AccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], AccountsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], AccountsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], AccountsQueryParams.prototype, "pageSize", void 0);
    return AccountsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountsQueryParams = AccountsQueryParams;
var AccountsAccountListAccounts = /** @class */ (function (_super) {
    __extends(AccountsAccountListAccounts, _super);
    function AccountsAccountListAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_name" }),
        __metadata("design:type", String)
    ], AccountsAccountListAccounts.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], AccountsAccountListAccounts.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_type" }),
        __metadata("design:type", String)
    ], AccountsAccountListAccounts.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AccountsAccountListAccounts.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountsAccountListAccounts.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_email" }),
        __metadata("design:type", String)
    ], AccountsAccountListAccounts.prototype, "ownerEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seats" }),
        __metadata("design:type", Number)
    ], AccountsAccountListAccounts.prototype, "seats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription_end_time" }),
        __metadata("design:type", Date)
    ], AccountsAccountListAccounts.prototype, "subscriptionEndTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription_start_time" }),
        __metadata("design:type", Date)
    ], AccountsAccountListAccounts.prototype, "subscriptionStartTime", void 0);
    return AccountsAccountListAccounts;
}(utils_1.SpeakeasyBase));
exports.AccountsAccountListAccounts = AccountsAccountListAccounts;
// AccountsAccountList
/**
 * Account object in the account list.
**/
var AccountsAccountList = /** @class */ (function (_super) {
    __extends(AccountsAccountList, _super);
    function AccountsAccountList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accounts", elemType: AccountsAccountListAccounts }),
        __metadata("design:type", Array)
    ], AccountsAccountList.prototype, "accounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], AccountsAccountList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], AccountsAccountList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], AccountsAccountList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], AccountsAccountList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], AccountsAccountList.prototype, "totalRecords", void 0);
    return AccountsAccountList;
}(utils_1.SpeakeasyBase));
exports.AccountsAccountList = AccountsAccountList;
var AccountsRequest = /** @class */ (function (_super) {
    __extends(AccountsRequest, _super);
    function AccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountsQueryParams)
    ], AccountsRequest.prototype, "queryParams", void 0);
    return AccountsRequest;
}(utils_1.SpeakeasyBase));
exports.AccountsRequest = AccountsRequest;
var AccountsResponse = /** @class */ (function (_super) {
    __extends(AccountsResponse, _super);
    function AccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountsAccountList)
    ], AccountsResponse.prototype, "accountList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountsResponse.prototype, "statusCode", void 0);
    return AccountsResponse;
}(utils_1.SpeakeasyBase));
exports.AccountsResponse = AccountsResponse;
