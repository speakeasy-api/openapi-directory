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
exports.GetInvoiceTaxItemType = exports.GetInvoiceTaxItemTypeTaxRateTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetInvoiceTaxItemTypeTaxRateTypeEnum;
(function (GetInvoiceTaxItemTypeTaxRateTypeEnum) {
    GetInvoiceTaxItemTypeTaxRateTypeEnum["Percentage"] = "Percentage";
    GetInvoiceTaxItemTypeTaxRateTypeEnum["FlatFee"] = "FlatFee";
})(GetInvoiceTaxItemTypeTaxRateTypeEnum = exports.GetInvoiceTaxItemTypeTaxRateTypeEnum || (exports.GetInvoiceTaxItemTypeTaxRateTypeEnum = {}));
var GetInvoiceTaxItemType = /** @class */ (function (_super) {
    __extends(GetInvoiceTaxItemType, _super);
    function GetInvoiceTaxItemType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableToCreditAmount" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "availableToCreditAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditAmount" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "creditAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptAmount" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "exemptAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jurisdiction" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "jurisdiction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationCode" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "locationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentAmount" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "paymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCodeDescription" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "taxCodeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxDate" }),
        __metadata("design:type", Date)
    ], GetInvoiceTaxItemType.prototype, "taxDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxRate" }),
        __metadata("design:type", Number)
    ], GetInvoiceTaxItemType.prototype, "taxRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxRateDescription" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "taxRateDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxRateType" }),
        __metadata("design:type", String)
    ], GetInvoiceTaxItemType.prototype, "taxRateType", void 0);
    return GetInvoiceTaxItemType;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceTaxItemType = GetInvoiceTaxItemType;
