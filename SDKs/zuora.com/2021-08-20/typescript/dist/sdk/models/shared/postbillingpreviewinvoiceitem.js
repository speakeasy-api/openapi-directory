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
exports.PostBillingPreviewInvoiceItem = void 0;
var utils_1 = require("../../../internal/utils");
var PostBillingPreviewInvoiceItem = /** @class */ (function (_super) {
    __extends(PostBillingPreviewInvoiceItem, _super);
    function PostBillingPreviewInvoiceItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedToItemId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "appliedToItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeAmount" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeDescription" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeName" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeType" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "chargeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingType" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "processingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productName" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "productName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceEndDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewInvoiceItem.prototype, "serviceEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceStartDate" }),
        __metadata("design:type", Date)
    ], PostBillingPreviewInvoiceItem.prototype, "serviceStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionName" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "subscriptionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAmount" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitOfMeasure" }),
        __metadata("design:type", String)
    ], PostBillingPreviewInvoiceItem.prototype, "unitOfMeasure", void 0);
    return PostBillingPreviewInvoiceItem;
}(utils_1.SpeakeasyBase));
exports.PostBillingPreviewInvoiceItem = PostBillingPreviewInvoiceItem;
