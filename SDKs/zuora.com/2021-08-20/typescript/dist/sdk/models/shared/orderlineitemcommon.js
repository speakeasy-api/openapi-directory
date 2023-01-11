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
exports.OrderLineItemCommon = exports.OrderLineItemCommonTaxModeEnum = exports.OrderLineItemCommonItemTypeEnum = exports.OrderLineItemCommonItemStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var OrderLineItemCommonItemStateEnum;
(function (OrderLineItemCommonItemStateEnum) {
    OrderLineItemCommonItemStateEnum["Executing"] = "Executing";
    OrderLineItemCommonItemStateEnum["SentToBilling"] = "SentToBilling";
    OrderLineItemCommonItemStateEnum["Complete"] = "Complete";
    OrderLineItemCommonItemStateEnum["Cancelled"] = "Cancelled";
})(OrderLineItemCommonItemStateEnum = exports.OrderLineItemCommonItemStateEnum || (exports.OrderLineItemCommonItemStateEnum = {}));
var OrderLineItemCommonItemTypeEnum;
(function (OrderLineItemCommonItemTypeEnum) {
    OrderLineItemCommonItemTypeEnum["Product"] = "Product";
    OrderLineItemCommonItemTypeEnum["Fee"] = "Fee";
    OrderLineItemCommonItemTypeEnum["Services"] = "Services";
})(OrderLineItemCommonItemTypeEnum = exports.OrderLineItemCommonItemTypeEnum || (exports.OrderLineItemCommonItemTypeEnum = {}));
var OrderLineItemCommonTaxModeEnum;
(function (OrderLineItemCommonTaxModeEnum) {
    OrderLineItemCommonTaxModeEnum["TaxInclusive"] = "TaxInclusive";
    OrderLineItemCommonTaxModeEnum["TaxExclusive"] = "TaxExclusive";
})(OrderLineItemCommonTaxModeEnum = exports.OrderLineItemCommonTaxModeEnum || (exports.OrderLineItemCommonTaxModeEnum = {}));
var OrderLineItemCommon = /** @class */ (function (_super) {
    __extends(OrderLineItemCommon, _super);
    function OrderLineItemCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "uom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountingCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "accountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountPerUnit" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommon.prototype, "amountPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billTargetDate" }),
        __metadata("design:type", Date)
    ], OrderLineItemCommon.prototype, "billTargetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderLineItemCommon.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deferredRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "deferredRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemName" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "itemName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemNumber" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "itemNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemState" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "itemState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemType" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "itemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listPricePerUnit" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommon.prototype, "listPricePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "productCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseOrderNumber" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "purchaseOrderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], OrderLineItemCommon.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recognizedRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "recognizedRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRule" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "revenueRecognitionRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxMode" }),
        __metadata("design:type", String)
    ], OrderLineItemCommon.prototype, "taxMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionDate" }),
        __metadata("design:type", Date)
    ], OrderLineItemCommon.prototype, "transactionDate", void 0);
    return OrderLineItemCommon;
}(utils_1.SpeakeasyBase));
exports.OrderLineItemCommon = OrderLineItemCommon;
