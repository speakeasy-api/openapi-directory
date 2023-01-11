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
exports.ActionAmendInvoiceItem = void 0;
var utils_1 = require("../../../internal/utils");
var ActionAmendInvoiceItem = /** @class */ (function (_super) {
    __extends(ActionAmendInvoiceItem, _super);
    function ActionAmendInvoiceItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountingCode" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "accountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AppliedToInvoiceItemId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "appliedToInvoiceItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeAmount" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "chargeAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "chargeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeDescription" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "chargeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "chargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeName" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "chargeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeNumber" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeType" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "chargeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProcessingType" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "processingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductDescription" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "productDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "productName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductRatePlanChargeId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanChargeId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "ratePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevRecCode" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevRecStartDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "revRecStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevRecTriggerCondition" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SKU" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceEndDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "serviceEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceStartDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "serviceStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionId" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionNumber" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxCode" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxExemptAmount" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "taxExemptAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxMode" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "taxMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "uom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UnitPrice" }),
        __metadata("design:type", Number)
    ], ActionAmendInvoiceItem.prototype, "unitPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], ActionAmendInvoiceItem.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], ActionAmendInvoiceItem.prototype, "updatedDate", void 0);
    return ActionAmendInvoiceItem;
}(utils_1.SpeakeasyBase));
exports.ActionAmendInvoiceItem = ActionAmendInvoiceItem;
