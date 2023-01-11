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
exports.AccountBillingInvoicesResponse = exports.AccountBillingInvoicesRequest = exports.AccountBillingInvoices200ApplicationJson = exports.AccountBillingInvoices200ApplicationJsonInvoices = exports.AccountBillingInvoicesQueryParams = exports.AccountBillingInvoicesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountBillingInvoicesPathParams = /** @class */ (function (_super) {
    __extends(AccountBillingInvoicesPathParams, _super);
    function AccountBillingInvoicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountBillingInvoicesPathParams.prototype, "accountId", void 0);
    return AccountBillingInvoicesPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoicesPathParams = AccountBillingInvoicesPathParams;
var AccountBillingInvoicesQueryParams = /** @class */ (function (_super) {
    __extends(AccountBillingInvoicesQueryParams, _super);
    function AccountBillingInvoicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], AccountBillingInvoicesQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], AccountBillingInvoicesQueryParams.prototype, "to", void 0);
    return AccountBillingInvoicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoicesQueryParams = AccountBillingInvoicesQueryParams;
var AccountBillingInvoices200ApplicationJsonInvoices = /** @class */ (function (_super) {
    __extends(AccountBillingInvoices200ApplicationJsonInvoices, _super);
    function AccountBillingInvoices200ApplicationJsonInvoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_date" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "invoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_number" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_date" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "targetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], AccountBillingInvoices200ApplicationJsonInvoices.prototype, "totalAmount", void 0);
    return AccountBillingInvoices200ApplicationJsonInvoices;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoices200ApplicationJsonInvoices = AccountBillingInvoices200ApplicationJsonInvoices;
var AccountBillingInvoices200ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountBillingInvoices200ApplicationJson, _super);
    function AccountBillingInvoices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], AccountBillingInvoices200ApplicationJson.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoices", elemType: AccountBillingInvoices200ApplicationJsonInvoices }),
        __metadata("design:type", Array)
    ], AccountBillingInvoices200ApplicationJson.prototype, "invoices", void 0);
    return AccountBillingInvoices200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoices200ApplicationJson = AccountBillingInvoices200ApplicationJson;
var AccountBillingInvoicesRequest = /** @class */ (function (_super) {
    __extends(AccountBillingInvoicesRequest, _super);
    function AccountBillingInvoicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingInvoicesPathParams)
    ], AccountBillingInvoicesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingInvoicesQueryParams)
    ], AccountBillingInvoicesRequest.prototype, "queryParams", void 0);
    return AccountBillingInvoicesRequest;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoicesRequest = AccountBillingInvoicesRequest;
var AccountBillingInvoicesResponse = /** @class */ (function (_super) {
    __extends(AccountBillingInvoicesResponse, _super);
    function AccountBillingInvoicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountBillingInvoicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountBillingInvoicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountBillingInvoicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountBillingInvoices200ApplicationJson)
    ], AccountBillingInvoicesResponse.prototype, "accountBillingInvoices200ApplicationJSONObject", void 0);
    return AccountBillingInvoicesResponse;
}(utils_1.SpeakeasyBase));
exports.AccountBillingInvoicesResponse = AccountBillingInvoicesResponse;
