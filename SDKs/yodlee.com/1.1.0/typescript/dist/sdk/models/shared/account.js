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
exports.Account = exports.AccountValuationTypeEnum = exports.AccountUserClassificationEnum = exports.AccountSourceAccountStatusEnum = exports.AccountRepaymentPlanTypeEnum = exports.AccountPolicyStatusEnum = exports.AccountOauthMigrationStatusEnum = exports.AccountLifeInsuranceTypeEnum = exports.AccountInterestRateTypeEnum = exports.AccountHomeInsuranceTypeEnum = exports.AccountFrequencyEnum = exports.AccountClassificationEnum = exports.AccountAggregationSourceEnum = exports.AccountAccountStatusEnum = exports.AccountContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var accountaddress_1 = require("./accountaddress");
var autorefresh_1 = require("./autorefresh");
var banktransfercode_1 = require("./banktransfercode");
var coverage_1 = require("./coverage");
var accountdataset_1 = require("./accountdataset");
var fullaccountnumberlist_1 = require("./fullaccountnumberlist");
var accountholder_1 = require("./accountholder");
var loanpayoffdetails_1 = require("./loanpayoffdetails");
var paymentprofile_1 = require("./paymentprofile");
var accountprofile_1 = require("./accountprofile");
var rewardbalance_1 = require("./rewardbalance");
var AccountContainerEnum;
(function (AccountContainerEnum) {
    AccountContainerEnum["Bank"] = "bank";
    AccountContainerEnum["CreditCard"] = "creditCard";
    AccountContainerEnum["Investment"] = "investment";
    AccountContainerEnum["Insurance"] = "insurance";
    AccountContainerEnum["Loan"] = "loan";
    AccountContainerEnum["Reward"] = "reward";
    AccountContainerEnum["RealEstate"] = "realEstate";
    AccountContainerEnum["OtherAssets"] = "otherAssets";
    AccountContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(AccountContainerEnum = exports.AccountContainerEnum || (exports.AccountContainerEnum = {}));
var AccountAccountStatusEnum;
(function (AccountAccountStatusEnum) {
    AccountAccountStatusEnum["Active"] = "ACTIVE";
    AccountAccountStatusEnum["Inactive"] = "INACTIVE";
    AccountAccountStatusEnum["ToBeClosed"] = "TO_BE_CLOSED";
    AccountAccountStatusEnum["Closed"] = "CLOSED";
    AccountAccountStatusEnum["Deleted"] = "DELETED";
})(AccountAccountStatusEnum = exports.AccountAccountStatusEnum || (exports.AccountAccountStatusEnum = {}));
var AccountAggregationSourceEnum;
(function (AccountAggregationSourceEnum) {
    AccountAggregationSourceEnum["System"] = "SYSTEM";
    AccountAggregationSourceEnum["User"] = "USER";
})(AccountAggregationSourceEnum = exports.AccountAggregationSourceEnum || (exports.AccountAggregationSourceEnum = {}));
var AccountClassificationEnum;
(function (AccountClassificationEnum) {
    AccountClassificationEnum["Other"] = "OTHER";
    AccountClassificationEnum["Personal"] = "PERSONAL";
    AccountClassificationEnum["Corporate"] = "CORPORATE";
    AccountClassificationEnum["SmallBusiness"] = "SMALL_BUSINESS";
    AccountClassificationEnum["Trust"] = "TRUST";
    AccountClassificationEnum["AddOnCard"] = "ADD_ON_CARD";
    AccountClassificationEnum["VirtualCard"] = "VIRTUAL_CARD";
})(AccountClassificationEnum = exports.AccountClassificationEnum || (exports.AccountClassificationEnum = {}));
var AccountFrequencyEnum;
(function (AccountFrequencyEnum) {
    AccountFrequencyEnum["Daily"] = "DAILY";
    AccountFrequencyEnum["OneTime"] = "ONE_TIME";
    AccountFrequencyEnum["Weekly"] = "WEEKLY";
    AccountFrequencyEnum["Every2Weeks"] = "EVERY_2_WEEKS";
    AccountFrequencyEnum["SemiMonthly"] = "SEMI_MONTHLY";
    AccountFrequencyEnum["Monthly"] = "MONTHLY";
    AccountFrequencyEnum["Quarterly"] = "QUARTERLY";
    AccountFrequencyEnum["SemiAnnually"] = "SEMI_ANNUALLY";
    AccountFrequencyEnum["Annually"] = "ANNUALLY";
    AccountFrequencyEnum["Every2Months"] = "EVERY_2_MONTHS";
    AccountFrequencyEnum["Ebill"] = "EBILL";
    AccountFrequencyEnum["FirstDayMonthly"] = "FIRST_DAY_MONTHLY";
    AccountFrequencyEnum["LastDayMonthly"] = "LAST_DAY_MONTHLY";
    AccountFrequencyEnum["Every4Weeks"] = "EVERY_4_WEEKS";
    AccountFrequencyEnum["Unknown"] = "UNKNOWN";
    AccountFrequencyEnum["Other"] = "OTHER";
})(AccountFrequencyEnum = exports.AccountFrequencyEnum || (exports.AccountFrequencyEnum = {}));
var AccountHomeInsuranceTypeEnum;
(function (AccountHomeInsuranceTypeEnum) {
    AccountHomeInsuranceTypeEnum["HomeOwner"] = "HOME_OWNER";
    AccountHomeInsuranceTypeEnum["Rental"] = "RENTAL";
    AccountHomeInsuranceTypeEnum["Renter"] = "RENTER";
    AccountHomeInsuranceTypeEnum["Unknown"] = "UNKNOWN";
    AccountHomeInsuranceTypeEnum["Other"] = "OTHER";
})(AccountHomeInsuranceTypeEnum = exports.AccountHomeInsuranceTypeEnum || (exports.AccountHomeInsuranceTypeEnum = {}));
var AccountInterestRateTypeEnum;
(function (AccountInterestRateTypeEnum) {
    AccountInterestRateTypeEnum["Fixed"] = "FIXED";
    AccountInterestRateTypeEnum["Variable"] = "VARIABLE";
    AccountInterestRateTypeEnum["Unknown"] = "UNKNOWN";
    AccountInterestRateTypeEnum["Other"] = "OTHER";
})(AccountInterestRateTypeEnum = exports.AccountInterestRateTypeEnum || (exports.AccountInterestRateTypeEnum = {}));
var AccountLifeInsuranceTypeEnum;
(function (AccountLifeInsuranceTypeEnum) {
    AccountLifeInsuranceTypeEnum["Other"] = "OTHER";
    AccountLifeInsuranceTypeEnum["TermLifeInsurance"] = "TERM_LIFE_INSURANCE";
    AccountLifeInsuranceTypeEnum["UniversalLifeInsurance"] = "UNIVERSAL_LIFE_INSURANCE";
    AccountLifeInsuranceTypeEnum["WholeLifeInsurance"] = "WHOLE_LIFE_INSURANCE";
    AccountLifeInsuranceTypeEnum["VariableLifeInsurance"] = "VARIABLE_LIFE_INSURANCE";
    AccountLifeInsuranceTypeEnum["Ulip"] = "ULIP";
    AccountLifeInsuranceTypeEnum["Endowment"] = "ENDOWMENT";
})(AccountLifeInsuranceTypeEnum = exports.AccountLifeInsuranceTypeEnum || (exports.AccountLifeInsuranceTypeEnum = {}));
var AccountOauthMigrationStatusEnum;
(function (AccountOauthMigrationStatusEnum) {
    AccountOauthMigrationStatusEnum["InProgress"] = "IN_PROGRESS";
    AccountOauthMigrationStatusEnum["ToBeMigrated"] = "TO_BE_MIGRATED";
    AccountOauthMigrationStatusEnum["Completed"] = "COMPLETED";
})(AccountOauthMigrationStatusEnum = exports.AccountOauthMigrationStatusEnum || (exports.AccountOauthMigrationStatusEnum = {}));
var AccountPolicyStatusEnum;
(function (AccountPolicyStatusEnum) {
    AccountPolicyStatusEnum["Active"] = "ACTIVE";
    AccountPolicyStatusEnum["Inactive"] = "INACTIVE";
    AccountPolicyStatusEnum["Other"] = "OTHER";
})(AccountPolicyStatusEnum = exports.AccountPolicyStatusEnum || (exports.AccountPolicyStatusEnum = {}));
var AccountRepaymentPlanTypeEnum;
(function (AccountRepaymentPlanTypeEnum) {
    AccountRepaymentPlanTypeEnum["Standard"] = "STANDARD";
    AccountRepaymentPlanTypeEnum["Graduated"] = "GRADUATED";
    AccountRepaymentPlanTypeEnum["Extended"] = "EXTENDED";
    AccountRepaymentPlanTypeEnum["IncomeBased"] = "INCOME_BASED";
    AccountRepaymentPlanTypeEnum["IncomeContingent"] = "INCOME_CONTINGENT";
    AccountRepaymentPlanTypeEnum["IncomeSensitive"] = "INCOME_SENSITIVE";
    AccountRepaymentPlanTypeEnum["PayAsYouEarn"] = "PAY_AS_YOU_EARN";
    AccountRepaymentPlanTypeEnum["RevisedPayAsYouEarn"] = "REVISED_PAY_AS_YOU_EARN";
})(AccountRepaymentPlanTypeEnum = exports.AccountRepaymentPlanTypeEnum || (exports.AccountRepaymentPlanTypeEnum = {}));
var AccountSourceAccountStatusEnum;
(function (AccountSourceAccountStatusEnum) {
    AccountSourceAccountStatusEnum["InRepayment"] = "IN_REPAYMENT";
    AccountSourceAccountStatusEnum["Defaulted"] = "DEFAULTED";
    AccountSourceAccountStatusEnum["InSchool"] = "IN_SCHOOL";
    AccountSourceAccountStatusEnum["InGracePeriod"] = "IN_GRACE_PERIOD";
    AccountSourceAccountStatusEnum["Delinquency"] = "DELINQUENCY";
    AccountSourceAccountStatusEnum["Deferment"] = "DEFERMENT";
    AccountSourceAccountStatusEnum["Forbearance"] = "FORBEARANCE";
})(AccountSourceAccountStatusEnum = exports.AccountSourceAccountStatusEnum || (exports.AccountSourceAccountStatusEnum = {}));
var AccountUserClassificationEnum;
(function (AccountUserClassificationEnum) {
    AccountUserClassificationEnum["Business"] = "BUSINESS";
    AccountUserClassificationEnum["Personal"] = "PERSONAL";
})(AccountUserClassificationEnum = exports.AccountUserClassificationEnum || (exports.AccountUserClassificationEnum = {}));
var AccountValuationTypeEnum;
(function (AccountValuationTypeEnum) {
    AccountValuationTypeEnum["System"] = "SYSTEM";
    AccountValuationTypeEnum["Manual"] = "MANUAL";
})(AccountValuationTypeEnum = exports.AccountValuationTypeEnum || (exports.AccountValuationTypeEnum = {}));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=401kLoan" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "fourHundredAndOnekLoan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CONTAINER" }),
        __metadata("design:type", String)
    ], Account.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountStatus" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", accountaddress_1.AccountAddress)
    ], Account.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationSource" }),
        __metadata("design:type", String)
    ], Account.prototype, "aggregationSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountDue" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "amountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annualPercentageYield" }),
        __metadata("design:type", Number)
    ], Account.prototype, "annualPercentageYield", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annuityBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "annuityBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apr" }),
        __metadata("design:type", Number)
    ], Account.prototype, "apr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedProviderAccountId" }),
        __metadata("design:type", Array)
    ], Account.prototype, "associatedProviderAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRefresh" }),
        __metadata("design:type", autorefresh_1.AutoRefresh)
    ], Account.prototype, "autoRefresh", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "availableBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableCash" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "availableCash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableCredit" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "availableCredit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankTransferCode", elemType: banktransfercode_1.BankTransferCode }),
        __metadata("design:type", Array)
    ], Account.prototype, "bankTransferCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cash" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "cash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashApr" }),
        __metadata("design:type", Number)
    ], Account.prototype, "cashApr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashValue" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "cashValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], Account.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collateral" }),
        __metadata("design:type", String)
    ], Account.prototype, "collateral", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverage", elemType: coverage_1.Coverage }),
        __metadata("design:type", Array)
    ], Account.prototype, "coverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "currentBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentLevel" }),
        __metadata("design:type", String)
    ], Account.prototype, "currentLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: accountdataset_1.AccountDataset }),
        __metadata("design:type", Array)
    ], Account.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deathBenefit" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "deathBenefit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=derivedApr" }),
        __metadata("design:type", Number)
    ], Account.prototype, "derivedApr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayedName" }),
        __metadata("design:type", String)
    ], Account.prototype, "displayedName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enrollmentDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "enrollmentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=escrowBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "escrowBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "estimatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=faceAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "faceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], Account.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullAccountNumber" }),
        __metadata("design:type", String)
    ], Account.prototype, "fullAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullAccountNumberList" }),
        __metadata("design:type", fullaccountnumberlist_1.FullAccountNumberList)
    ], Account.prototype, "fullAccountNumberList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guarantor" }),
        __metadata("design:type", String)
    ], Account.prototype, "guarantor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holder", elemType: accountholder_1.AccountHolder }),
        __metadata("design:type", Array)
    ], Account.prototype, "holder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeInsuranceType" }),
        __metadata("design:type", String)
    ], Account.prototype, "homeInsuranceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeValue" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "homeValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Account.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeInNetWorth" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "includeInNetWorth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestPaidLastYear" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "interestPaidLastYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestPaidYTD" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "interestPaidYTD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRate" }),
        __metadata("design:type", Number)
    ], Account.prototype, "interestRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRateType" }),
        __metadata("design:type", String)
    ], Account.prototype, "interestRateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAsset" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isAsset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEmployeeContributionAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "lastEmployeeContributionAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastEmployeeContributionDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "lastEmployeeContributionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPayment" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "lastPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "lastPaymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "lastPaymentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], Account.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lender" }),
        __metadata("design:type", String)
    ], Account.prototype, "lender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifeInsuranceType" }),
        __metadata("design:type", String)
    ], Account.prototype, "lifeInsuranceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayByDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "loanPayByDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayoffAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "loanPayoffAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanPayoffDetails" }),
        __metadata("design:type", loanpayoffdetails_1.LoanPayoffDetails)
    ], Account.prototype, "loanPayoffDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marginBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "marginBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "maturityAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "maturityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], Account.prototype, "memo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumAmountDue" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "minimumAmountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moneyMarketBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "moneyMarketBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextLevel" }),
        __metadata("design:type", String)
    ], Account.prototype, "nextLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], Account.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthMigrationStatus" }),
        __metadata("design:type", String)
    ], Account.prototype, "oauthMigrationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalLoanAmount" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "originalLoanAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originationDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "originationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overDraftLimit" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "overDraftLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentProfile" }),
        __metadata("design:type", paymentprofile_1.PaymentProfile)
    ], Account.prototype, "paymentProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyEffectiveDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "policyEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyFromDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "policyFromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyStatus" }),
        __metadata("design:type", String)
    ], Account.prototype, "policyStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyTerm" }),
        __metadata("design:type", String)
    ], Account.prototype, "policyTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyToDate" }),
        __metadata("design:type", String)
    ], Account.prototype, "policyToDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premium" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "premium", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=premiumPaymentTerm" }),
        __metadata("design:type", String)
    ], Account.prototype, "premiumPaymentTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryRewardUnit" }),
        __metadata("design:type", String)
    ], Account.prototype, "primaryRewardUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principalBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "principalBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", accountprofile_1.AccountProfile)
    ], Account.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], Account.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], Account.prototype, "providerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], Account.prototype, "providerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPayment" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "recurringPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "remainingBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repaymentPlanType" }),
        __metadata("design:type", String)
    ], Account.prototype, "repaymentPlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rewardBalance", elemType: rewardbalance_1.RewardBalance }),
        __metadata("design:type", Array)
    ], Account.prototype, "rewardBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "runningBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shortBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "shortBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAccountStatus" }),
        __metadata("design:type", String)
    ], Account.prototype, "sourceAccountStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], Account.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=term" }),
        __metadata("design:type", String)
    ], Account.prototype, "term", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCashLimit" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "totalCashLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCreditLimit" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "totalCreditLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCreditLine" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "totalCreditLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalUnvestedBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "totalUnvestedBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalVestedBalance" }),
        __metadata("design:type", money_1.Money)
    ], Account.prototype, "totalVestedBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userClassification" }),
        __metadata("design:type", String)
    ], Account.prototype, "userClassification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valuationType" }),
        __metadata("design:type", String)
    ], Account.prototype, "valuationType", void 0);
    return Account;
}(utils_1.SpeakeasyBase));
exports.Account = Account;
