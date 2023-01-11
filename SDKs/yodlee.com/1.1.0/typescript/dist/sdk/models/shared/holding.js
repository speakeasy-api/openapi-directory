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
exports.Holding = exports.HoldingOptionTypeEnum = exports.HoldingHoldingTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var assetclassification_1 = require("./assetclassification");
var HoldingHoldingTypeEnum;
(function (HoldingHoldingTypeEnum) {
    HoldingHoldingTypeEnum["Stock"] = "stock";
    HoldingHoldingTypeEnum["MutualFund"] = "mutualFund";
    HoldingHoldingTypeEnum["Bond"] = "bond";
    HoldingHoldingTypeEnum["Cd"] = "CD";
    HoldingHoldingTypeEnum["Option"] = "option";
    HoldingHoldingTypeEnum["MoneyMarketFund"] = "moneyMarketFund";
    HoldingHoldingTypeEnum["Other"] = "other";
    HoldingHoldingTypeEnum["Remic"] = "remic";
    HoldingHoldingTypeEnum["Future"] = "future";
    HoldingHoldingTypeEnum["Commodity"] = "commodity";
    HoldingHoldingTypeEnum["Currency"] = "currency";
    HoldingHoldingTypeEnum["UnitInvestmentTrust"] = "unitInvestmentTrust";
    HoldingHoldingTypeEnum["EmployeeStockOption"] = "employeeStockOption";
    HoldingHoldingTypeEnum["InsuranceAnnuity"] = "insuranceAnnuity";
    HoldingHoldingTypeEnum["Unknown"] = "unknown";
    HoldingHoldingTypeEnum["PreferredStock"] = "preferredStock";
    HoldingHoldingTypeEnum["Etf"] = "ETF";
    HoldingHoldingTypeEnum["Warrants"] = "warrants";
    HoldingHoldingTypeEnum["Etn"] = "ETN";
})(HoldingHoldingTypeEnum = exports.HoldingHoldingTypeEnum || (exports.HoldingHoldingTypeEnum = {}));
var HoldingOptionTypeEnum;
(function (HoldingOptionTypeEnum) {
    HoldingOptionTypeEnum["Put"] = "put";
    HoldingOptionTypeEnum["Call"] = "call";
    HoldingOptionTypeEnum["Unknown"] = "unknown";
    HoldingOptionTypeEnum["Other"] = "other";
})(HoldingOptionTypeEnum = exports.HoldingOptionTypeEnum || (exports.HoldingOptionTypeEnum = {}));
var Holding = /** @class */ (function (_super) {
    __extends(Holding, _super);
    function Holding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accruedIncome" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "accruedIncome", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accruedInterest" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "accruedInterest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetClassification", elemType: assetclassification_1.AssetClassification }),
        __metadata("design:type", Array)
    ], Holding.prototype, "assetClassification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractQuantity" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "contractQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costBasis" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "costBasis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=couponRate" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "couponRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], Holding.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cusipNumber" }),
        __metadata("design:type", String)
    ], Holding.prototype, "cusipNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Holding.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enrichedDescription" }),
        __metadata("design:type", String)
    ], Holding.prototype, "enrichedDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exercisedQuantity" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "exercisedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], Holding.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grantDate" }),
        __metadata("design:type", String)
    ], Holding.prototype, "grantDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdingType" }),
        __metadata("design:type", String)
    ], Holding.prototype, "holdingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRate" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "interestRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isShort" }),
        __metadata("design:type", Boolean)
    ], Holding.prototype, "isShort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isin" }),
        __metadata("design:type", String)
    ], Holding.prototype, "isin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], Holding.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchStatus" }),
        __metadata("design:type", String)
    ], Holding.prototype, "matchStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityDate" }),
        __metadata("design:type", String)
    ], Holding.prototype, "maturityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optionType" }),
        __metadata("design:type", String)
    ], Holding.prototype, "optionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityStyle" }),
        __metadata("design:type", String)
    ], Holding.prototype, "securityStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityType" }),
        __metadata("design:type", String)
    ], Holding.prototype, "securityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sedol" }),
        __metadata("design:type", String)
    ], Holding.prototype, "sedol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spread" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "spread", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strikePrice" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "strikePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], Holding.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=term" }),
        __metadata("design:type", String)
    ], Holding.prototype, "term", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unvestedQuantity" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "unvestedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unvestedValue" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "unvestedValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedQuantity" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "vestedQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedSharesExercisable" }),
        __metadata("design:type", Number)
    ], Holding.prototype, "vestedSharesExercisable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestedValue" }),
        __metadata("design:type", money_1.Money)
    ], Holding.prototype, "vestedValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vestingDate" }),
        __metadata("design:type", String)
    ], Holding.prototype, "vestingDate", void 0);
    return Holding;
}(utils_1.SpeakeasyBase));
exports.Holding = Holding;
