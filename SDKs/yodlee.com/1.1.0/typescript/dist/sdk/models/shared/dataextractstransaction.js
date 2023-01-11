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
exports.DataExtractsTransaction = exports.DataExtractsTransactionSubTypeEnum = exports.DataExtractsTransactionStatusEnum = exports.DataExtractsTransactionSourceTypeEnum = exports.DataExtractsTransactionCategoryTypeEnum = exports.DataExtractsTransactionCategorySourceEnum = exports.DataExtractsTransactionBaseTypeEnum = exports.DataExtractsTransactionContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var description_1 = require("./description");
var merchant_1 = require("./merchant");
var DataExtractsTransactionContainerEnum;
(function (DataExtractsTransactionContainerEnum) {
    DataExtractsTransactionContainerEnum["Bank"] = "bank";
    DataExtractsTransactionContainerEnum["CreditCard"] = "creditCard";
    DataExtractsTransactionContainerEnum["Investment"] = "investment";
    DataExtractsTransactionContainerEnum["Insurance"] = "insurance";
    DataExtractsTransactionContainerEnum["Loan"] = "loan";
    DataExtractsTransactionContainerEnum["Reward"] = "reward";
    DataExtractsTransactionContainerEnum["RealEstate"] = "realEstate";
    DataExtractsTransactionContainerEnum["OtherAssets"] = "otherAssets";
    DataExtractsTransactionContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(DataExtractsTransactionContainerEnum = exports.DataExtractsTransactionContainerEnum || (exports.DataExtractsTransactionContainerEnum = {}));
var DataExtractsTransactionBaseTypeEnum;
(function (DataExtractsTransactionBaseTypeEnum) {
    DataExtractsTransactionBaseTypeEnum["Credit"] = "CREDIT";
    DataExtractsTransactionBaseTypeEnum["Debit"] = "DEBIT";
})(DataExtractsTransactionBaseTypeEnum = exports.DataExtractsTransactionBaseTypeEnum || (exports.DataExtractsTransactionBaseTypeEnum = {}));
var DataExtractsTransactionCategorySourceEnum;
(function (DataExtractsTransactionCategorySourceEnum) {
    DataExtractsTransactionCategorySourceEnum["System"] = "SYSTEM";
    DataExtractsTransactionCategorySourceEnum["User"] = "USER";
})(DataExtractsTransactionCategorySourceEnum = exports.DataExtractsTransactionCategorySourceEnum || (exports.DataExtractsTransactionCategorySourceEnum = {}));
var DataExtractsTransactionCategoryTypeEnum;
(function (DataExtractsTransactionCategoryTypeEnum) {
    DataExtractsTransactionCategoryTypeEnum["Transfer"] = "TRANSFER";
    DataExtractsTransactionCategoryTypeEnum["DeferredCompensation"] = "DEFERRED_COMPENSATION";
    DataExtractsTransactionCategoryTypeEnum["Uncategorize"] = "UNCATEGORIZE";
    DataExtractsTransactionCategoryTypeEnum["Income"] = "INCOME";
    DataExtractsTransactionCategoryTypeEnum["Expense"] = "EXPENSE";
})(DataExtractsTransactionCategoryTypeEnum = exports.DataExtractsTransactionCategoryTypeEnum || (exports.DataExtractsTransactionCategoryTypeEnum = {}));
var DataExtractsTransactionSourceTypeEnum;
(function (DataExtractsTransactionSourceTypeEnum) {
    DataExtractsTransactionSourceTypeEnum["Aggregated"] = "AGGREGATED";
    DataExtractsTransactionSourceTypeEnum["Manual"] = "MANUAL";
})(DataExtractsTransactionSourceTypeEnum = exports.DataExtractsTransactionSourceTypeEnum || (exports.DataExtractsTransactionSourceTypeEnum = {}));
var DataExtractsTransactionStatusEnum;
(function (DataExtractsTransactionStatusEnum) {
    DataExtractsTransactionStatusEnum["Posted"] = "POSTED";
    DataExtractsTransactionStatusEnum["Pending"] = "PENDING";
    DataExtractsTransactionStatusEnum["Scheduled"] = "SCHEDULED";
    DataExtractsTransactionStatusEnum["Failed"] = "FAILED";
    DataExtractsTransactionStatusEnum["Cleared"] = "CLEARED";
})(DataExtractsTransactionStatusEnum = exports.DataExtractsTransactionStatusEnum || (exports.DataExtractsTransactionStatusEnum = {}));
var DataExtractsTransactionSubTypeEnum;
(function (DataExtractsTransactionSubTypeEnum) {
    DataExtractsTransactionSubTypeEnum["AuthHold"] = "AUTH_HOLD";
    DataExtractsTransactionSubTypeEnum["AuthRequest"] = "AUTH_REQUEST";
    DataExtractsTransactionSubTypeEnum["OverdraftCharge"] = "OVERDRAFT_CHARGE";
    DataExtractsTransactionSubTypeEnum["CreditAdjustment"] = "CREDIT_ADJUSTMENT";
    DataExtractsTransactionSubTypeEnum["PinDebit"] = "PIN_DEBIT";
    DataExtractsTransactionSubTypeEnum["BankDirectDeposit"] = "BANK_DIRECT_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["DividendDeposit"] = "DIVIDEND_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["InterestSavings"] = "INTEREST_SAVINGS";
    DataExtractsTransactionSubTypeEnum["InterestAdjustment"] = "INTEREST_ADJUSTMENT";
    DataExtractsTransactionSubTypeEnum["OnlinePurchase"] = "ONLINE_PURCHASE";
    DataExtractsTransactionSubTypeEnum["PurchasedWithCheck"] = "PURCHASED_WITH_CHECK";
    DataExtractsTransactionSubTypeEnum["RecurringBilling"] = "RECURRING_BILLING";
    DataExtractsTransactionSubTypeEnum["TaxPayment"] = "TAX_PAYMENT";
    DataExtractsTransactionSubTypeEnum["PaymentByCheck"] = "PAYMENT_BY_CHECK";
    DataExtractsTransactionSubTypeEnum["PaymentPlan"] = "PAYMENT_PLAN";
    DataExtractsTransactionSubTypeEnum["FeeRefund"] = "FEE_REFUND";
    DataExtractsTransactionSubTypeEnum["WireTransferCharge"] = "WIRE_TRANSFER_CHARGE";
    DataExtractsTransactionSubTypeEnum["AccountToAccountTransfer"] = "ACCOUNT_TO_ACCOUNT_TRANSFER";
    DataExtractsTransactionSubTypeEnum["BankToBankTransaction"] = "BANK_TO_BANK_TRANSACTION";
    DataExtractsTransactionSubTypeEnum["BankToNonBankAccountTransfer"] = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER";
    DataExtractsTransactionSubTypeEnum["CashWithdrawalAtFi"] = "CASH_WITHDRAWAL_AT_FI";
    DataExtractsTransactionSubTypeEnum["AtmCashWithdrawal"] = "ATM_CASH_WITHDRAWAL";
    DataExtractsTransactionSubTypeEnum["AuthProcessing"] = "AUTH_PROCESSING";
    DataExtractsTransactionSubTypeEnum["AuthRelease"] = "AUTH_RELEASE";
    DataExtractsTransactionSubTypeEnum["PreAuth"] = "PRE_AUTH";
    DataExtractsTransactionSubTypeEnum["AuthComplete"] = "AUTH_COMPLETE";
    DataExtractsTransactionSubTypeEnum["AuthVoid"] = "AUTH_VOID";
    DataExtractsTransactionSubTypeEnum["BalanceEnquiry"] = "BALANCE_ENQUIRY";
    DataExtractsTransactionSubTypeEnum["AccountVerification"] = "ACCOUNT_VERIFICATION";
    DataExtractsTransactionSubTypeEnum["PreAuthCompletion"] = "PRE_AUTH_COMPLETION";
    DataExtractsTransactionSubTypeEnum["ServiceCharge"] = "SERVICE_CHARGE";
    DataExtractsTransactionSubTypeEnum["ServiceChargeFeeRefund"] = "SERVICE_CHARGE_FEE_REFUND";
    DataExtractsTransactionSubTypeEnum["ReturnedCheckCharge"] = "RETURNED_CHECK_CHARGE";
    DataExtractsTransactionSubTypeEnum["ReturnedCheckReimbursement"] = "RETURNED_CHECK_REIMBURSEMENT";
    DataExtractsTransactionSubTypeEnum["CashAdvance"] = "CASH_ADVANCE";
    DataExtractsTransactionSubTypeEnum["BillPayCharge"] = "BILL_PAY_CHARGE";
    DataExtractsTransactionSubTypeEnum["CheckImageServiceCharge"] = "CHECK_IMAGE_SERVICE_CHARGE";
    DataExtractsTransactionSubTypeEnum["OverdraftProtectionCharge"] = "OVERDRAFT_PROTECTION_CHARGE";
    DataExtractsTransactionSubTypeEnum["StopPaymentCharge"] = "STOP_PAYMENT_CHARGE";
    DataExtractsTransactionSubTypeEnum["ChecksOrderingCharge"] = "CHECKS_ORDERING_CHARGE";
    DataExtractsTransactionSubTypeEnum["MonthlyMaintenanceCharge"] = "MONTHLY_MAINTENANCE_CHARGE";
    DataExtractsTransactionSubTypeEnum["DebitCardFee"] = "DEBIT_CARD_FEE";
    DataExtractsTransactionSubTypeEnum["ConvenienceFee"] = "CONVENIENCE_FEE";
    DataExtractsTransactionSubTypeEnum["PersonalLoanCredit"] = "PERSONAL_LOAN_CREDIT";
    DataExtractsTransactionSubTypeEnum["CreditCardCredit"] = "CREDIT_CARD_CREDIT";
    DataExtractsTransactionSubTypeEnum["AutoLoan"] = "AUTO_LOAN";
    DataExtractsTransactionSubTypeEnum["HomeLoanMortgage"] = "HOME_LOAN_MORTGAGE";
    DataExtractsTransactionSubTypeEnum["ShortTermCredit"] = "SHORT_TERM_CREDIT";
    DataExtractsTransactionSubTypeEnum["SignatureDebit"] = "SIGNATURE_DEBIT";
    DataExtractsTransactionSubTypeEnum["ContactLessDebit"] = "CONTACT_LESS_DEBIT";
    DataExtractsTransactionSubTypeEnum["DeferredDeposit"] = "DEFERRED_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["DeferredBillPay"] = "DEFERRED_BILL_PAY";
    DataExtractsTransactionSubTypeEnum["InstallmentPayment"] = "INSTALLMENT_PAYMENT";
    DataExtractsTransactionSubTypeEnum["RecurringSubscriptionPayment"] = "RECURRING_SUBSCRIPTION_PAYMENT";
    DataExtractsTransactionSubTypeEnum["HoldCheckPayment"] = "HOLD_CHECK_PAYMENT";
    DataExtractsTransactionSubTypeEnum["CapitalGainsDistibution"] = "CAPITAL_GAINS_DISTIBUTION";
    DataExtractsTransactionSubTypeEnum["CgLongTermDeposit"] = "CG_LONG_TERM_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["OpenSaleDeposit"] = "OPEN_SALE_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["InterestCheck"] = "INTEREST__CHECK";
    DataExtractsTransactionSubTypeEnum["PurchaseVoid"] = "PURCHASE_VOID";
    DataExtractsTransactionSubTypeEnum["PurchaseWithCreditCard"] = "PURCHASE_WITH_CREDIT_CARD";
    DataExtractsTransactionSubTypeEnum["PurchaseWithDebitCard"] = "PURCHASE_WITH_DEBIT_CARD";
    DataExtractsTransactionSubTypeEnum["ChargeARepeatCustomer"] = "CHARGE_A_REPEAT_CUSTOMER";
    DataExtractsTransactionSubTypeEnum["DownPaymentOrAnnuityPaymentOrDirectPayment"] = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT";
    DataExtractsTransactionSubTypeEnum["FeePayment"] = "FEE_PAYMENT";
    DataExtractsTransactionSubTypeEnum["FinanceChargeRefund"] = "FINANCE_CHARGE_REFUND";
    DataExtractsTransactionSubTypeEnum["TransactionVoid"] = "TRANSACTION_VOID";
    DataExtractsTransactionSubTypeEnum["FeeVoid"] = "FEE_VOID";
    DataExtractsTransactionSubTypeEnum["DebitCardWithdrawalAtStore"] = "DEBIT_CARD_WITHDRAWAL_AT_STORE";
    DataExtractsTransactionSubTypeEnum["ElectronicPayment"] = "ELECTRONIC_PAYMENT";
    DataExtractsTransactionSubTypeEnum["AchDebit"] = "ACH_DEBIT";
    DataExtractsTransactionSubTypeEnum["AtmTellerDeposit"] = "ATM_TELLER_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["PosDebit"] = "POS_DEBIT";
    DataExtractsTransactionSubTypeEnum["BankAdjustment"] = "BANK_ADJUSTMENT";
    DataExtractsTransactionSubTypeEnum["ChargesFees"] = "CHARGES_FEES";
    DataExtractsTransactionSubTypeEnum["Interest"] = "INTEREST";
    DataExtractsTransactionSubTypeEnum["DepositsCredits"] = "DEPOSITS_CREDITS";
    DataExtractsTransactionSubTypeEnum["Payment"] = "PAYMENT";
    DataExtractsTransactionSubTypeEnum["Purchase"] = "PURCHASE";
    DataExtractsTransactionSubTypeEnum["Refund"] = "REFUND";
    DataExtractsTransactionSubTypeEnum["Transfer"] = "TRANSFER";
    DataExtractsTransactionSubTypeEnum["Withdrawal"] = "WITHDRAWAL";
    DataExtractsTransactionSubTypeEnum["OtherDeposits"] = "OTHER_DEPOSITS";
    DataExtractsTransactionSubTypeEnum["OtherWithdrawals"] = "OTHER_WITHDRAWALS";
    DataExtractsTransactionSubTypeEnum["Adjustment"] = "ADJUSTMENT";
    DataExtractsTransactionSubTypeEnum["FinanceCharge"] = "FINANCE_CHARGE";
    DataExtractsTransactionSubTypeEnum["OtherChargesFees"] = "OTHER_CHARGES_FEES";
    DataExtractsTransactionSubTypeEnum["AnnualFee"] = "ANNUAL_FEE";
    DataExtractsTransactionSubTypeEnum["Deposit"] = "DEPOSIT";
    DataExtractsTransactionSubTypeEnum["DirectDepositSalary"] = "DIRECT_DEPOSIT_SALARY";
    DataExtractsTransactionSubTypeEnum["InvestmentIncomeCash"] = "INVESTMENT_INCOME_CASH";
    DataExtractsTransactionSubTypeEnum["Ssa"] = "SSA";
    DataExtractsTransactionSubTypeEnum["Rewards"] = "REWARDS";
    DataExtractsTransactionSubTypeEnum["CheckDeposit"] = "CHECK_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["MobileRemoteDeposit"] = "MOBILE_REMOTE_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["TellerDeposit"] = "TELLER_DEPOSIT";
    DataExtractsTransactionSubTypeEnum["TaxRefund"] = "TAX_REFUND";
    DataExtractsTransactionSubTypeEnum["CreditCardPayment"] = "CREDIT_CARD_PAYMENT";
    DataExtractsTransactionSubTypeEnum["InsurancePayment"] = "INSURANCE_PAYMENT";
    DataExtractsTransactionSubTypeEnum["UtilitiesPayment"] = "UTILITIES_PAYMENT";
    DataExtractsTransactionSubTypeEnum["ChildSupport"] = "CHILD_SUPPORT";
    DataExtractsTransactionSubTypeEnum["Loan"] = "LOAN";
    DataExtractsTransactionSubTypeEnum["PersonalLoan"] = "PERSONAL_LOAN";
    DataExtractsTransactionSubTypeEnum["StudentLoan"] = "STUDENT_LOAN";
    DataExtractsTransactionSubTypeEnum["SalesTax"] = "SALES_TAX";
    DataExtractsTransactionSubTypeEnum["Reimbursement"] = "REIMBURSEMENT";
    DataExtractsTransactionSubTypeEnum["BalanceTransfer"] = "BALANCE_TRANSFER";
    DataExtractsTransactionSubTypeEnum["WireTransfer"] = "WIRE_TRANSFER";
    DataExtractsTransactionSubTypeEnum["OverdraftProtection"] = "OVERDRAFT_PROTECTION";
    DataExtractsTransactionSubTypeEnum["Debit"] = "DEBIT";
    DataExtractsTransactionSubTypeEnum["Credit"] = "CREDIT";
    DataExtractsTransactionSubTypeEnum["NsfFees"] = "NSF_FEES";
})(DataExtractsTransactionSubTypeEnum = exports.DataExtractsTransactionSubTypeEnum || (exports.DataExtractsTransactionSubTypeEnum = {}));
var DataExtractsTransaction = /** @class */ (function (_super) {
    __extends(DataExtractsTransaction, _super);
    function DataExtractsTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CONTAINER" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseType" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "baseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryId" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categorySource" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "categorySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryType" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checkNumber" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "checkNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commission" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "commission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cusipNumber" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "cusipNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", description_1.Description)
    ], DataExtractsTransaction.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detailCategoryId" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "detailCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highLevelCategoryId" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "highLevelCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdingDescription" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "holdingDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "interest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDeleted" }),
        __metadata("design:type", Boolean)
    ], DataExtractsTransaction.prototype, "isDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], DataExtractsTransaction.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isin" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "isin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "memo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", merchant_1.Merchant)
    ], DataExtractsTransaction.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentCategoryId" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "parentCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postDate" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "postDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principal" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "principal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], DataExtractsTransaction.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningBalance" }),
        __metadata("design:type", money_1.Money)
    ], DataExtractsTransaction.prototype, "runningBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sedol" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "sedol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settleDate" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "settleDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subType" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "subType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionDate" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "transactionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valoren" }),
        __metadata("design:type", String)
    ], DataExtractsTransaction.prototype, "valoren", void 0);
    return DataExtractsTransaction;
}(utils_1.SpeakeasyBase));
exports.DataExtractsTransaction = DataExtractsTransaction;
