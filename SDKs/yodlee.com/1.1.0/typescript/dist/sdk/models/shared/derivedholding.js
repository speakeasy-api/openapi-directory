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
exports.DerivedHolding = exports.DerivedHoldingOptionTypeEnum = exports.DerivedHoldingHoldingTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var assetclassification_1 = require("./assetclassification");
var DerivedHoldingHoldingTypeEnum;
(function (DerivedHoldingHoldingTypeEnum) {
    DerivedHoldingHoldingTypeEnum["Stock"] = "stock";
    DerivedHoldingHoldingTypeEnum["MutualFund"] = "mutualFund";
    DerivedHoldingHoldingTypeEnum["Bond"] = "bond";
    DerivedHoldingHoldingTypeEnum["Cd"] = "CD";
    DerivedHoldingHoldingTypeEnum["Option"] = "option";
    DerivedHoldingHoldingTypeEnum["MoneyMarketFund"] = "moneyMarketFund";
    DerivedHoldingHoldingTypeEnum["Other"] = "other";
    DerivedHoldingHoldingTypeEnum["Remic"] = "remic";
    DerivedHoldingHoldingTypeEnum["Future"] = "future";
    DerivedHoldingHoldingTypeEnum["Commodity"] = "commodity";
    DerivedHoldingHoldingTypeEnum["Currency"] = "currency";
    DerivedHoldingHoldingTypeEnum["UnitInvestmentTrust"] = "unitInvestmentTrust";
    DerivedHoldingHoldingTypeEnum["EmployeeStockOption"] = "employeeStockOption";
    DerivedHoldingHoldingTypeEnum["InsuranceAnnuity"] = "insuranceAnnuity";
    DerivedHoldingHoldingTypeEnum["Unknown"] = "unknown";
    DerivedHoldingHoldingTypeEnum["PreferredStock"] = "preferredStock";
    DerivedHoldingHoldingTypeEnum["Etf"] = "ETF";
    DerivedHoldingHoldingTypeEnum["Warrants"] = "warrants";
    DerivedHoldingHoldingTypeEnum["Etn"] = "ETN";
})(DerivedHoldingHoldingTypeEnum = exports.DerivedHoldingHoldingTypeEnum || (exports.DerivedHoldingHoldingTypeEnum = {}));
var DerivedHoldingOptionTypeEnum;
(function (DerivedHoldingOptionTypeEnum) {
    DerivedHoldingOptionTypeEnum["Put"] = "put";
    DerivedHoldingOptionTypeEnum["Call"] = "call";
    DerivedHoldingOptionTypeEnum["Unknown"] = "unknown";
    DerivedHoldingOptionTypeEnum["Other"] = "other";
})(DerivedHoldingOptionTypeEnum = exports.DerivedHoldingOptionTypeEnum || (exports.DerivedHoldingOptionTypeEnum = {}));
var DerivedHolding = /** @class */ (function (_super) {
    __extends(DerivedHolding, _super);
    function DerivedHolding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accruedIncome" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "accruedIncome", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accruedInterest" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "accruedInterest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetClassification" }),
        __metadata("design:type", assetclassification_1.AssetClassification)
    ], DerivedHolding.prototype, "assetClassification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractQuantity" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "contractQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costBasis" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "costBasis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=couponRate" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "couponRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cusipNumber" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "cusipNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enrichedDescription" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "enrichedDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exercisedQuantity" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "exercisedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grantDate" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "grantDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdingType" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "holdingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRate" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "interestRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isShort" }),
        __metadata("design:type", Boolean)
    ], DerivedHolding.prototype, "isShort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isin" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "isin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchStatus" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "matchStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityDate" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "maturityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optionType" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "optionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityStyle" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "securityStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityType" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "securityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sedol" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "sedol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spread" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "spread", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strikePrice" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "strikePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=term" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "term", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unvestedQuantity" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "unvestedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unvestedValue" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "unvestedValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedQuantity" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "vestedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedSharesExercisable" }),
        __metadata("design:type", Number)
    ], DerivedHolding.prototype, "vestedSharesExercisable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedValue" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHolding.prototype, "vestedValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestingDate" }),
        __metadata("design:type", String)
    ], DerivedHolding.prototype, "vestingDate", void 0);
    return DerivedHolding;
}(utils_1.SpeakeasyBase));
exports.DerivedHolding = DerivedHolding;
