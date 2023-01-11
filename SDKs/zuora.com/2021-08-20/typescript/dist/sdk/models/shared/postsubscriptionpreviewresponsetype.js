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
exports.PostSubscriptionPreviewResponseType = exports.PostSubscriptionPreviewResponseTypeCreditMemo = exports.PostSubscriptionPreviewResponseTypeChargeMetrics = void 0;
var utils_1 = require("../../../internal/utils");
var postsubscriptionpreviewcreditmemoitemstype_1 = require("./postsubscriptionpreviewcreditmemoitemstype");
var postsubscriptionpreviewinvoiceitemstype_1 = require("./postsubscriptionpreviewinvoiceitemstype");
// PostSubscriptionPreviewResponseTypeChargeMetrics
/**
 * Container for charge metrics.
 *
**/
var PostSubscriptionPreviewResponseTypeChargeMetrics = /** @class */ (function (_super) {
    __extends(PostSubscriptionPreviewResponseTypeChargeMetrics, _super);
    function PostSubscriptionPreviewResponseTypeChargeMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dmrr" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "dmrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dtcv" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "dtcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrr" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "mrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originRatePlanId" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "originRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalId" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "originalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanId" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "productRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcv" }),
        __metadata("design:type", String)
    ], PostSubscriptionPreviewResponseTypeChargeMetrics.prototype, "tcv", void 0);
    return PostSubscriptionPreviewResponseTypeChargeMetrics;
}(utils_1.SpeakeasyBase));
exports.PostSubscriptionPreviewResponseTypeChargeMetrics = PostSubscriptionPreviewResponseTypeChargeMetrics;
// PostSubscriptionPreviewResponseTypeCreditMemo
/**
 *
 * Container for credit memos.
 *
 * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
 *
**/
var PostSubscriptionPreviewResponseTypeCreditMemo = /** @class */ (function (_super) {
    __extends(PostSubscriptionPreviewResponseTypeCreditMemo, _super);
    function PostSubscriptionPreviewResponseTypeCreditMemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseTypeCreditMemo.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountWithoutTax" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseTypeCreditMemo.prototype, "amountWithoutTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoItems", elemType: postsubscriptionpreviewcreditmemoitemstype_1.PostSubscriptionPreviewCreditMemoItemsType }),
        __metadata("design:type", Array)
    ], PostSubscriptionPreviewResponseTypeCreditMemo.prototype, "creditMemoItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseTypeCreditMemo.prototype, "taxAmount", void 0);
    return PostSubscriptionPreviewResponseTypeCreditMemo;
}(utils_1.SpeakeasyBase));
exports.PostSubscriptionPreviewResponseTypeCreditMemo = PostSubscriptionPreviewResponseTypeCreditMemo;
var PostSubscriptionPreviewResponseType = /** @class */ (function (_super) {
    __extends(PostSubscriptionPreviewResponseType, _super);
    function PostSubscriptionPreviewResponseType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseType.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountWithoutTax" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseType.prototype, "amountWithoutTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeMetrics" }),
        __metadata("design:type", PostSubscriptionPreviewResponseTypeChargeMetrics)
    ], PostSubscriptionPreviewResponseType.prototype, "chargeMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractedMrr" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseType.prototype, "contractedMrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemo" }),
        __metadata("design:type", PostSubscriptionPreviewResponseTypeCreditMemo)
    ], PostSubscriptionPreviewResponseType.prototype, "creditMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice" }),
        __metadata("design:type", Object)
    ], PostSubscriptionPreviewResponseType.prototype, "invoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceItems", elemType: postsubscriptionpreviewinvoiceitemstype_1.PostSubscriptionPreviewInvoiceItemsType }),
        __metadata("design:type", Array)
    ], PostSubscriptionPreviewResponseType.prototype, "invoiceItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceTargetDate" }),
        __metadata("design:type", Date)
    ], PostSubscriptionPreviewResponseType.prototype, "invoiceTargetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostSubscriptionPreviewResponseType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetDate" }),
        __metadata("design:type", Date)
    ], PostSubscriptionPreviewResponseType.prototype, "targetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseType.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalContractedValue" }),
        __metadata("design:type", Number)
    ], PostSubscriptionPreviewResponseType.prototype, "totalContractedValue", void 0);
    return PostSubscriptionPreviewResponseType;
}(utils_1.SpeakeasyBase));
exports.PostSubscriptionPreviewResponseType = PostSubscriptionPreviewResponseType;
