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
exports.OrderLineItemCommonPostOrder = exports.OrderLineItemCommonPostOrderTaxModeEnum = exports.OrderLineItemCommonPostOrderItemTypeEnum = exports.OrderLineItemCommonPostOrderItemStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ordercontact_1 = require("./ordercontact");
var OrderLineItemCommonPostOrderItemStateEnum;
(function (OrderLineItemCommonPostOrderItemStateEnum) {
    OrderLineItemCommonPostOrderItemStateEnum["Executing"] = "Executing";
    OrderLineItemCommonPostOrderItemStateEnum["SentToBilling"] = "SentToBilling";
    OrderLineItemCommonPostOrderItemStateEnum["Complete"] = "Complete";
    OrderLineItemCommonPostOrderItemStateEnum["Cancelled"] = "Cancelled";
})(OrderLineItemCommonPostOrderItemStateEnum = exports.OrderLineItemCommonPostOrderItemStateEnum || (exports.OrderLineItemCommonPostOrderItemStateEnum = {}));
var OrderLineItemCommonPostOrderItemTypeEnum;
(function (OrderLineItemCommonPostOrderItemTypeEnum) {
    OrderLineItemCommonPostOrderItemTypeEnum["Product"] = "Product";
    OrderLineItemCommonPostOrderItemTypeEnum["Fee"] = "Fee";
    OrderLineItemCommonPostOrderItemTypeEnum["Services"] = "Services";
})(OrderLineItemCommonPostOrderItemTypeEnum = exports.OrderLineItemCommonPostOrderItemTypeEnum || (exports.OrderLineItemCommonPostOrderItemTypeEnum = {}));
var OrderLineItemCommonPostOrderTaxModeEnum;
(function (OrderLineItemCommonPostOrderTaxModeEnum) {
    OrderLineItemCommonPostOrderTaxModeEnum["TaxInclusive"] = "TaxInclusive";
    OrderLineItemCommonPostOrderTaxModeEnum["TaxExclusive"] = "TaxExclusive";
})(OrderLineItemCommonPostOrderTaxModeEnum = exports.OrderLineItemCommonPostOrderTaxModeEnum || (exports.OrderLineItemCommonPostOrderTaxModeEnum = {}));
var OrderLineItemCommonPostOrder = /** @class */ (function (_super) {
    __extends(OrderLineItemCommonPostOrder, _super);
    function OrderLineItemCommonPostOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "uom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountPerUnit" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommonPostOrder.prototype, "amountPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billTargetDate" }),
        __metadata("design:type", Date)
    ], OrderLineItemCommonPostOrder.prototype, "billTargetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderLineItemCommonPostOrder.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deferredRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "deferredRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemName" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "itemName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemState" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "itemState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemType" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "itemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listPricePerUnit" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommonPostOrder.prototype, "listPricePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "productCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", Date)
    ], OrderLineItemCommonPostOrder.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseOrderNumber" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "purchaseOrderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommonPostOrder.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recognizedRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "recognizedRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRule" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "revenueRecognitionRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldTo" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "soldTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldToData" }),
        __metadata("design:type", ordercontact_1.OrderContact)
    ], OrderLineItemCommonPostOrder.prototype, "soldToData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxMode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommonPostOrder.prototype, "taxMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionDate" }),
        __metadata("design:type", Date)
    ], OrderLineItemCommonPostOrder.prototype, "transactionDate", void 0);
    return OrderLineItemCommonPostOrder;
}(utils_1.SpeakeasyBase));
exports.OrderLineItemCommonPostOrder = OrderLineItemCommonPostOrder;
