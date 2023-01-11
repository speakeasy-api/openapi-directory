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
exports.DerivedTransactionsSummary = exports.DerivedTransactionsSummaryCategoryTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var derivedcategorysummary_1 = require("./derivedcategorysummary");
var money_1 = require("./money");
var derivedtransactionslinks_1 = require("./derivedtransactionslinks");
var DerivedTransactionsSummaryCategoryTypeEnum;
(function (DerivedTransactionsSummaryCategoryTypeEnum) {
    DerivedTransactionsSummaryCategoryTypeEnum["Transfer"] = "TRANSFER";
    DerivedTransactionsSummaryCategoryTypeEnum["DeferredCompensation"] = "DEFERRED_COMPENSATION";
    DerivedTransactionsSummaryCategoryTypeEnum["Uncategorize"] = "UNCATEGORIZE";
    DerivedTransactionsSummaryCategoryTypeEnum["Income"] = "INCOME";
    DerivedTransactionsSummaryCategoryTypeEnum["Expense"] = "EXPENSE";
})(DerivedTransactionsSummaryCategoryTypeEnum = exports.DerivedTransactionsSummaryCategoryTypeEnum || (exports.DerivedTransactionsSummaryCategoryTypeEnum = {}));
var DerivedTransactionsSummary = /** @class */ (function (_super) {
    __extends(DerivedTransactionsSummary, _super);
    function DerivedTransactionsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categorySummary", elemType: derivedcategorysummary_1.DerivedCategorySummary }),
        __metadata("design:type", Array)
    ], DerivedTransactionsSummary.prototype, "categorySummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryType" }),
        __metadata("design:type", String)
    ], DerivedTransactionsSummary.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditTotal" }),
        __metadata("design:type", money_1.Money)
    ], DerivedTransactionsSummary.prototype, "creditTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debitTotal" }),
        __metadata("design:type", money_1.Money)
    ], DerivedTransactionsSummary.prototype, "debitTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", derivedtransactionslinks_1.DerivedTransactionsLinks)
    ], DerivedTransactionsSummary.prototype, "links", void 0);
    return DerivedTransactionsSummary;
}(utils_1.SpeakeasyBase));
exports.DerivedTransactionsSummary = DerivedTransactionsSummary;
