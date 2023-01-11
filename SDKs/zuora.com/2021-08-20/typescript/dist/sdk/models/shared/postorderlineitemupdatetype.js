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
exports.PostOrderLineItemUpdateType = exports.PostOrderLineItemUpdateTypeTaxModeEnum = exports.PostOrderLineItemUpdateTypeItemTypeEnum = exports.PostOrderLineItemUpdateTypeItemStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostOrderLineItemUpdateTypeItemStateEnum;
(function (PostOrderLineItemUpdateTypeItemStateEnum) {
    PostOrderLineItemUpdateTypeItemStateEnum["Executing"] = "Executing";
    PostOrderLineItemUpdateTypeItemStateEnum["SentToBilling"] = "SentToBilling";
    PostOrderLineItemUpdateTypeItemStateEnum["Complete"] = "Complete";
    PostOrderLineItemUpdateTypeItemStateEnum["Cancelled"] = "Cancelled";
})(PostOrderLineItemUpdateTypeItemStateEnum = exports.PostOrderLineItemUpdateTypeItemStateEnum || (exports.PostOrderLineItemUpdateTypeItemStateEnum = {}));
var PostOrderLineItemUpdateTypeItemTypeEnum;
(function (PostOrderLineItemUpdateTypeItemTypeEnum) {
    PostOrderLineItemUpdateTypeItemTypeEnum["Product"] = "Product";
    PostOrderLineItemUpdateTypeItemTypeEnum["Fee"] = "Fee";
    PostOrderLineItemUpdateTypeItemTypeEnum["Services"] = "Services";
})(PostOrderLineItemUpdateTypeItemTypeEnum = exports.PostOrderLineItemUpdateTypeItemTypeEnum || (exports.PostOrderLineItemUpdateTypeItemTypeEnum = {}));
var PostOrderLineItemUpdateTypeTaxModeEnum;
(function (PostOrderLineItemUpdateTypeTaxModeEnum) {
    PostOrderLineItemUpdateTypeTaxModeEnum["TaxInclusive"] = "TaxInclusive";
    PostOrderLineItemUpdateTypeTaxModeEnum["TaxExclusive"] = "TaxExclusive";
})(PostOrderLineItemUpdateTypeTaxModeEnum = exports.PostOrderLineItemUpdateTypeTaxModeEnum || (exports.PostOrderLineItemUpdateTypeTaxModeEnum = {}));
var PostOrderLineItemUpdateType = /** @class */ (function (_super) {
    __extends(PostOrderLineItemUpdateType, _super);
    function PostOrderLineItemUpdateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "uom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountingCode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "accountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountPerUnit" }),
        __metadata("design:type", Number)
    ], PostOrderLineItemUpdateType.prototype, "amountPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billTargetDate" }),
        __metadata("design:type", Date)
    ], PostOrderLineItemUpdateType.prototype, "billTargetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PostOrderLineItemUpdateType.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deferredRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "deferredRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemName" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "itemName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemNumber" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "itemNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemState" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "itemState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemType" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "itemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listPricePerUnit" }),
        __metadata("design:type", Number)
    ], PostOrderLineItemUpdateType.prototype, "listPricePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productCode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "productCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseOrderNumber" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "purchaseOrderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], PostOrderLineItemUpdateType.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recognizedRevenueAccountingCode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "recognizedRevenueAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRule" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "revenueRecognitionRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxMode" }),
        __metadata("design:type", String)
    ], PostOrderLineItemUpdateType.prototype, "taxMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionDate" }),
        __metadata("design:type", Date)
    ], PostOrderLineItemUpdateType.prototype, "transactionDate", void 0);
    return PostOrderLineItemUpdateType;
}(utils_1.SpeakeasyBase));
exports.PostOrderLineItemUpdateType = PostOrderLineItemUpdateType;
