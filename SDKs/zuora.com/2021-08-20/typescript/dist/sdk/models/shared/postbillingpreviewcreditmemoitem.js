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
exports.PostBillingPreviewCreditMemoItem = void 0;
var utils_1 = require("../../../internal/utils");
var PostBillingPreviewCreditMemoItem = /** @class */ (function (_super) {
    __extends(PostBillingPreviewCreditMemoItem, _super);
    function PostBillingPreviewCreditMemoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostBillingPreviewCreditMemoItem.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountWithoutTax" }),
        __metadata("design:type", Number)
    ], PostBillingPreviewCreditMemoItem.prototype, "amountWithoutTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedToItemId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "appliedToItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewCreditMemoItem.prototype, "chargeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeType" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "chargeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingType" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "processingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratePlanChargeId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "ratePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceEndDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewCreditMemoItem.prototype, "serviceEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceStartDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewCreditMemoItem.prototype, "serviceStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skuName" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "skuName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitOfMeasure" }),
        __metadata("design:type", String)
    ], PostBillingPreviewCreditMemoItem.prototype, "unitOfMeasure", void 0);
    return PostBillingPreviewCreditMemoItem;
}(utils_1.SpeakeasyBase));
exports.PostBillingPreviewCreditMemoItem = PostBillingPreviewCreditMemoItem;
