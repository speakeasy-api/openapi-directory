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
exports.DataExtractsAccount = exports.DataExtractsAccountValuationTypeEnum = exports.DataExtractsAccountUserClassificationEnum = exports.DataExtractsAccountSourceAccountStatusEnum = exports.DataExtractsAccountRepaymentPlanTypeEnum = exports.DataExtractsAccountPolicyStatusEnum = exports.DataExtractsAccountOauthMigrationStatusEnum = exports.DataExtractsAccountLifeInsuranceTypeEnum = exports.DataExtractsAccountInterestRateTypeEnum = exports.DataExtractsAccountHomeInsuranceTypeEnum = exports.DataExtractsAccountFrequencyEnum = exports.DataExtractsAccountClassificationEnum = exports.DataExtractsAccountAggregationSourceEnum = exports.DataExtractsAccountAccountStatusEnum = exports.DataExtractsAccountContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var accountaddress_1 = require("./accountaddress");
var banktransfercode_1 = require("./banktransfercode");
var coverage_1 = require("./coverage");
var accountdataset_1 = require("./accountdataset");
var loanpayoffdetails_1 = require("./loanpayoffdetails");
var rewardbalance_1 = require("./rewardbalance");
var DataExtractsAccountContainerEnum;
(function (DataExtractsAccountContainerEnum) {
    DataExtractsAccountContainerEnum["Bank"] = "bank";
    DataExtractsAccountContainerEnum["CreditCard"] = "creditCard";
    DataExtractsAccountContainerEnum["Investment"] = "investment";
    DataExtractsAccountContainerEnum["Insurance"] = "insurance";
    DataExtractsAccountContainerEnum["Loan"] = "loan";
    DataExtractsAccountContainerEnum["Reward"] = "reward";
    DataExtractsAccountContainerEnum["RealEstate"] = "realEstate";
    DataExtractsAccountContainerEnum["OtherAssets"] = "otherAssets";
    DataExtractsAccountContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(DataExtractsAccountContainerEnum = exports.DataExtractsAccountContainerEnum || (exports.DataExtractsAccountContainerEnum = {}));
var DataExtractsAccountAccountStatusEnum;
(function (DataExtractsAccountAccountStatusEnum) {
    DataExtractsAccountAccountStatusEnum["Active"] = "ACTIVE";
    DataExtractsAccountAccountStatusEnum["Inactive"] = "INACTIVE";
    DataExtractsAccountAccountStatusEnum["ToBeClosed"] = "TO_BE_CLOSED";
    DataExtractsAccountAccountStatusEnum["Closed"] = "CLOSED";
    DataExtractsAccountAccountStatusEnum["Deleted"] = "DELETED";
})(DataExtractsAccountAccountStatusEnum = exports.DataExtractsAccountAccountStatusEnum || (exports.DataExtractsAccountAccountStatusEnum = {}));
var DataExtractsAccountAggregationSourceEnum;
(function (DataExtractsAccountAggregationSourceEnum) {
    DataExtractsAccountAggregationSourceEnum["System"] = "SYSTEM";
    DataExtractsAccountAggregationSourceEnum["User"] = "USER";
})(DataExtractsAccountAggregationSourceEnum = exports.DataExtractsAccountAggregationSourceEnum || (exports.DataExtractsAccountAggregationSourceEnum = {}));
var DataExtractsAccountClassificationEnum;
(function (DataExtractsAccountClassificationEnum) {
    DataExtractsAccountClassificationEnum["Other"] = "OTHER";
    DataExtractsAccountClassificationEnum["Personal"] = "PERSONAL";
    DataExtractsAccountClassificationEnum["Corporate"] = "CORPORATE";
    DataExtractsAccountClassificationEnum["SmallBusiness"] = "SMALL_BUSINESS";
    DataExtractsAccountClassificationEnum["Trust"] = "TRUST";
    DataExtractsAccountClassificationEnum["AddOnCard"] = "ADD_ON_CARD";
    DataExtractsAccountClassificationEnum["VirtualCard"] = "VIRTUAL_CARD";
})(DataExtractsAccountClassificationEnum = exports.DataExtractsAccountClassificationEnum || (exports.DataExtractsAccountClassificationEnum = {}));
var DataExtractsAccountFrequencyEnum;
(function (DataExtractsAccountFrequencyEnum) {
    DataExtractsAccountFrequencyEnum["Daily"] = "DAILY";
    DataExtractsAccountFrequencyEnum["OneTime"] = "ONE_TIME";
    DataExtractsAccountFrequencyEnum["Weekly"] = "WEEKLY";
    DataExtractsAccountFrequencyEnum["Every2Weeks"] = "EVERY_2_WEEKS";
    DataExtractsAccountFrequencyEnum["SemiMonthly"] = "SEMI_MONTHLY";
    DataExtractsAccountFrequencyEnum["Monthly"] = "MONTHLY";
    DataExtractsAccountFrequencyEnum["Quarterly"] = "QUARTERLY";
    DataExtractsAccountFrequencyEnum["SemiAnnually"] = "SEMI_ANNUALLY";
    DataExtractsAccountFrequencyEnum["Annually"] = "ANNUALLY";
    DataExtractsAccountFrequencyEnum["Every2Months"] = "EVERY_2_MONTHS";
    DataExtractsAccountFrequencyEnum["Ebill"] = "EBILL";
    DataExtractsAccountFrequencyEnum["FirstDayMonthly"] = "FIRST_DAY_MONTHLY";
    DataExtractsAccountFrequencyEnum["LastDayMonthly"] = "LAST_DAY_MONTHLY";
    DataExtractsAccountFrequencyEnum["Every4Weeks"] = "EVERY_4_WEEKS";
    DataExtractsAccountFrequencyEnum["Unknown"] = "UNKNOWN";
    DataExtractsAccountFrequencyEnum["Other"] = "OTHER";
})(DataExtractsAccountFrequencyEnum = exports.DataExtractsAccountFrequencyEnum || (exports.DataExtractsAccountFrequencyEnum = {}));
var DataExtractsAccountHomeInsuranceTypeEnum;
(function (DataExtractsAccountHomeInsuranceTypeEnum) {
    DataExtractsAccountHomeInsuranceTypeEnum["HomeOwner"] = "HOME_OWNER";
    DataExtractsAccountHomeInsuranceTypeEnum["Rental"] = "RENTAL";
    DataExtractsAccountHomeInsuranceTypeEnum["Renter"] = "RENTER";
    DataExtractsAccountHomeInsuranceTypeEnum["Unknown"] = "UNKNOWN";
    DataExtractsAccountHomeInsuranceTypeEnum["Other"] = "OTHER";
})(DataExtractsAccountHomeInsuranceTypeEnum = exports.DataExtractsAccountHomeInsuranceTypeEnum || (exports.DataExtractsAccountHomeInsuranceTypeEnum = {}));
var DataExtractsAccountInterestRateTypeEnum;
(function (DataExtractsAccountInterestRateTypeEnum) {
    DataExtractsAccountInterestRateTypeEnum["Fixed"] = "FIXED";
    DataExtractsAccountInterestRateTypeEnum["Variable"] = "VARIABLE";
    DataExtractsAccountInterestRateTypeEnum["Unknown"] = "UNKNOWN";
    DataExtractsAccountInterestRateTypeEnum["Other"] = "OTHER";
})(DataExtractsAccountInterestRateTypeEnum = exports.DataExtractsAccountInterestRateTypeEnum || (exports.DataExtractsAccountInterestRateTypeEnum = {}));
var DataExtractsAccountLifeInsuranceTypeEnum;
(function (DataExtractsAccountLifeInsuranceTypeEnum) {
    DataExtractsAccountLifeInsuranceTypeEnum["Other"] = "OTHER";
    DataExtractsAccountLifeInsuranceTypeEnum["TermLifeInsurance"] = "TERM_LIFE_INSURANCE";
    DataExtractsAccountLifeInsuranceTypeEnum["UniversalLifeInsurance"] = "UNIVERSAL_LIFE_INSURANCE";
    DataExtractsAccountLifeInsuranceTypeEnum["WholeLifeInsurance"] = "WHOLE_LIFE_INSURANCE";
    DataExtractsAccountLifeInsuranceTypeEnum["VariableLifeInsurance"] = "VARIABLE_LIFE_INSURANCE";
    DataExtractsAccountLifeInsuranceTypeEnum["Ulip"] = "ULIP";
    DataExtractsAccountLifeInsuranceTypeEnum["Endowment"] = "ENDOWMENT";
})(DataExtractsAccountLifeInsuranceTypeEnum = exports.DataExtractsAccountLifeInsuranceTypeEnum || (exports.DataExtractsAccountLifeInsuranceTypeEnum = {}));
var DataExtractsAccountOauthMigrationStatusEnum;
(function (DataExtractsAccountOauthMigrationStatusEnum) {
    DataExtractsAccountOauthMigrationStatusEnum["InProgress"] = "IN_PROGRESS";
    DataExtractsAccountOauthMigrationStatusEnum["ToBeMigrated"] = "TO_BE_MIGRATED";
    DataExtractsAccountOauthMigrationStatusEnum["Completed"] = "COMPLETED";
})(DataExtractsAccountOauthMigrationStatusEnum = exports.DataExtractsAccountOauthMigrationStatusEnum || (exports.DataExtractsAccountOauthMigrationStatusEnum = {}));
var DataExtractsAccountPolicyStatusEnum;
(function (DataExtractsAccountPolicyStatusEnum) {
    DataExtractsAccountPolicyStatusEnum["Active"] = "ACTIVE";
    DataExtractsAccountPolicyStatusEnum["Inactive"] = "INACTIVE";
    DataExtractsAccountPolicyStatusEnum["Other"] = "OTHER";
})(DataExtractsAccountPolicyStatusEnum = exports.DataExtractsAccountPolicyStatusEnum || (exports.DataExtractsAccountPolicyStatusEnum = {}));
var DataExtractsAccountRepaymentPlanTypeEnum;
(function (DataExtractsAccountRepaymentPlanTypeEnum) {
    DataExtractsAccountRepaymentPlanTypeEnum["Standard"] = "STANDARD";
    DataExtractsAccountRepaymentPlanTypeEnum["Graduated"] = "GRADUATED";
    DataExtractsAccountRepaymentPlanTypeEnum["Extended"] = "EXTENDED";
    DataExtractsAccountRepaymentPlanTypeEnum["IncomeBased"] = "INCOME_BASED";
    DataExtractsAccountRepaymentPlanTypeEnum["IncomeContingent"] = "INCOME_CONTINGENT";
    DataExtractsAccountRepaymentPlanTypeEnum["IncomeSensitive"] = "INCOME_SENSITIVE";
    DataExtractsAccountRepaymentPlanTypeEnum["PayAsYouEarn"] = "PAY_AS_YOU_EARN";
    DataExtractsAccountRepaymentPlanTypeEnum["RevisedPayAsYouEarn"] = "REVISED_PAY_AS_YOU_EARN";
})(DataExtractsAccountRepaymentPlanTypeEnum = exports.DataExtractsAccountRepaymentPlanTypeEnum || (exports.DataExtractsAccountRepaymentPlanTypeEnum = {}));
var DataExtractsAccountSourceAccountStatusEnum;
(function (DataExtractsAccountSourceAccountStatusEnum) {
    DataExtractsAccountSourceAccountStatusEnum["InRepayment"] = "IN_REPAYMENT";
    DataExtractsAccountSourceAccountStatusEnum["Defaulted"] = "DEFAULTED";
    DataExtractsAccountSourceAccountStatusEnum["InSchool"] = "IN_SCHOOL";
    DataExtractsAccountSourceAccountStatusEnum["InGracePeriod"] = "IN_GRACE_PERIOD";
    DataExtractsAccountSourceAccountStatusEnum["Delinquency"] = "DELINQUENCY";
    DataExtractsAccountSourceAccountStatusEnum["Deferment"] = "DEFERMENT";
    DataExtractsAccountSourceAccountStatusEnum["Forbearance"] = "FORBEARANCE";
})(DataExtractsAccountSourceAccountStatusEnum = exports.DataExtractsAccountSourceAccountStatusEnum || (exports.DataExtractsAccountSourceAccountStatusEnum = {}));
var DataExtractsAccountUserClassificationEnum;
(function (DataExtractsAccountUserClassificationEnum) {
    DataExtractsAccountUserClassificationEnum["Business"] = "BUSINESS";
    DataExtractsAccountUserClassificationEnum["Personal"] = "PERSONAL";
})(DataExtractsAccountUserClassificationEnum = exports.DataExtractsAccountUserClassificationEnum || (exports.DataExtractsAccountUserClassificationEnum = {}));
var DataExtractsAccountValuationTypeEnum;
(function (DataExtractsAccountValuationTypeEnum) {
    DataExtractsAccountValuationTypeEnum["System"] = "SYSTEM";
    DataExtractsAccountValuationTypeEnum["Manual"] = "MANUAL";
})(DataExtractsAccountValuationTypeEnum = exports.DataExtractsAccountValuationTypeEnum || (exports.DataExtractsAccountValuationTypeEnum = {}));
var DataExtractsAccount = /** @class */ (function (_super) {
    __extends(DataExtractsAccount, _super);
    function DataExtractsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=401kLoan" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "fourHundredAndOnekLoan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CONTAINER" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountStatus" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "accountStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", accountaddress_1.AccountAddress)
    ], DataExtractsAccount.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationSource" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "aggregationSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountDue" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "amountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annualPercentageYield" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "annualPercentageYield", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annuityBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "annuityBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apr" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "apr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedProviderAccountId" }),
        __metadata("design:type", Array)
    ], DataExtractsAccount.prototype, "associatedProviderAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "availableBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableCash" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "availableCash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableCredit" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "availableCredit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankTransferCode", elemType: banktransfercode_1.BankTransferCode }),
        __metadata("design:type", Array)
    ], DataExtractsAccount.prototype, "bankTransferCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cash" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "cash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashApr" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "cashApr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashValue" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "cashValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collateral" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "collateral", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverage", elemType: coverage_1.Coverage }),
        __metadata("design:type", Array)
    ], DataExtractsAccount.prototype, "coverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "currentBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentLevel" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "currentLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: accountdataset_1.AccountDataset }),
        __metadata("design:type", Array)
    ], DataExtractsAccount.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deathBenefit" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "deathBenefit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=derivedApr" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "derivedApr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayedName" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "displayedName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enrollmentDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "enrollmentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=escrowBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "escrowBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "estimatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=faceAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "faceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guarantor" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "guarantor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeInsuranceType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "homeInsuranceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeValue" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "homeValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeInNetWorth" }),
        __metadata("design:type", Boolean)
    ], DataExtractsAccount.prototype, "includeInNetWorth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestPaidLastYear" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "interestPaidLastYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestPaidYTD" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "interestPaidYTD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRate" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "interestRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRateType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "interestRateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAsset" }),
        __metadata("design:type", Boolean)
    ], DataExtractsAccount.prototype, "isAsset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDeleted" }),
        __metadata("design:type", Boolean)
    ], DataExtractsAccount.prototype, "isDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], DataExtractsAccount.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEmployeeContributionAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "lastEmployeeContributionAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEmployeeContributionDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "lastEmployeeContributionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPayment" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "lastPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "lastPaymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "lastPaymentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lender" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "lender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifeInsuranceType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "lifeInsuranceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayByDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "loanPayByDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayoffAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "loanPayoffAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayoffDetails" }),
        __metadata("design:type", loanpayoffdetails_1.LoanPayoffDetails)
    ], DataExtractsAccount.prototype, "loanPayoffDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marginBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "marginBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "maturityAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "maturityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "memo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumAmountDue" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "minimumAmountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moneyMarketBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "moneyMarketBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextLevel" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "nextLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthMigrationStatus" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "oauthMigrationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalLoanAmount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "originalLoanAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originationDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "originationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overDraftLimit" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "overDraftLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyEffectiveDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "policyEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyFromDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "policyFromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyStatus" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "policyStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyTerm" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "policyTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyToDate" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "policyToDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "premium", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premiumPaymentTerm" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "premiumPaymentTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryRewardUnit" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "primaryRewardUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principalBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "principalBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], DataExtractsAccount.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "providerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "providerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPayment" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "recurringPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "remainingBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repaymentPlanType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "repaymentPlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rewardBalance", elemType: rewardbalance_1.RewardBalance }),
        __metadata("design:type", Array)
    ], DataExtractsAccount.prototype, "rewardBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "runningBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shortBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "shortBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountStatus" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "sourceAccountStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=term" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "term", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCashLimit" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "totalCashLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCreditLimit" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "totalCreditLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCreditLine" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "totalCreditLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalUnvestedBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "totalUnvestedBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalVestedBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsAccount.prototype, "totalVestedBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userClassification" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "userClassification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valuationType" }),
        __metadata("design:type", String)
    ], DataExtractsAccount.prototype, "valuationType", void 0);
    return DataExtractsAccount;
}(utils_1.SpeakeasyBase));
exports.DataExtractsAccount = DataExtractsAccount;
