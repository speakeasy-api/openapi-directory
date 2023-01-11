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
exports.GetAccountBillingInvoiceResponse = exports.GetAccountBillingInvoiceRequest = exports.GetAccountBillingInvoice200ApplicationJson = exports.GetAccountBillingInvoice200ApplicationJsonInvoiceItems = exports.GetAccountBillingInvoicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAccountBillingInvoicePathParams = /** @class */ (function (_super) {
    __extends(GetAccountBillingInvoicePathParams, _super);
    function GetAccountBillingInvoicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoicePathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoicePathParams.prototype, "invoiceId", void 0);
    return GetAccountBillingInvoicePathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountBillingInvoicePathParams = GetAccountBillingInvoicePathParams;
var GetAccountBillingInvoice200ApplicationJsonInvoiceItems = /** @class */ (function (_super) {
    __extends(GetAccountBillingInvoice200ApplicationJsonInvoiceItems, _super);
    function GetAccountBillingInvoice200ApplicationJsonInvoiceItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_name" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "chargeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_number" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_type" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "chargeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJsonInvoiceItems.prototype, "totalAmount", void 0);
    return GetAccountBillingInvoice200ApplicationJsonInvoiceItems;
}(utils_1.SpeakeasyBase));
exports.GetAccountBillingInvoice200ApplicationJsonInvoiceItems = GetAccountBillingInvoice200ApplicationJsonInvoiceItems;
var GetAccountBillingInvoice200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountBillingInvoice200ApplicationJson, _super);
    function GetAccountBillingInvoice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_date" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "invoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_items", elemType: GetAccountBillingInvoice200ApplicationJsonInvoiceItems }),
        __metadata("design:type", Array)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "invoiceItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_number" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_date" }),
        __metadata("design:type", String)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "targetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoice200ApplicationJson.prototype, "totalAmount", void 0);
    return GetAccountBillingInvoice200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAccountBillingInvoice200ApplicationJson = GetAccountBillingInvoice200ApplicationJson;
var GetAccountBillingInvoiceRequest = /** @class */ (function (_super) {
    __extends(GetAccountBillingInvoiceRequest, _super);
    function GetAccountBillingInvoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountBillingInvoicePathParams)
    ], GetAccountBillingInvoiceRequest.prototype, "pathParams", void 0);
    return GetAccountBillingInvoiceRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountBillingInvoiceRequest = GetAccountBillingInvoiceRequest;
var GetAccountBillingInvoiceResponse = /** @class */ (function (_super) {
    __extends(GetAccountBillingInvoiceResponse, _super);
    function GetAccountBillingInvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAccountBillingInvoiceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountBillingInvoiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountBillingInvoiceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountBillingInvoice200ApplicationJson)
    ], GetAccountBillingInvoiceResponse.prototype, "getAccountBillingInvoice200ApplicationJSONObject", void 0);
    return GetAccountBillingInvoiceResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountBillingInvoiceResponse = GetAccountBillingInvoiceResponse;
