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
exports.Transaction = exports.TransactionSubTypeEnum = exports.TransactionStatusEnum = exports.TransactionSourceTypeEnum = exports.TransactionCategoryTypeEnum = exports.TransactionCategorySourceEnum = exports.TransactionBaseTypeEnum = exports.TransactionContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var description_1 = require("./description");
var merchant_1 = require("./merchant");
var TransactionContainerEnum;
(function (TransactionContainerEnum) {
    TransactionContainerEnum["Bank"] = "bank";
    TransactionContainerEnum["CreditCard"] = "creditCard";
    TransactionContainerEnum["Investment"] = "investment";
    TransactionContainerEnum["Insurance"] = "insurance";
    TransactionContainerEnum["Loan"] = "loan";
    TransactionContainerEnum["Reward"] = "reward";
    TransactionContainerEnum["RealEstate"] = "realEstate";
    TransactionContainerEnum["OtherAssets"] = "otherAssets";
    TransactionContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(TransactionContainerEnum = exports.TransactionContainerEnum || (exports.TransactionContainerEnum = {}));
var TransactionBaseTypeEnum;
(function (TransactionBaseTypeEnum) {
    TransactionBaseTypeEnum["Credit"] = "CREDIT";
    TransactionBaseTypeEnum["Debit"] = "DEBIT";
})(TransactionBaseTypeEnum = exports.TransactionBaseTypeEnum || (exports.TransactionBaseTypeEnum = {}));
var TransactionCategorySourceEnum;
(function (TransactionCategorySourceEnum) {
    TransactionCategorySourceEnum["System"] = "SYSTEM";
    TransactionCategorySourceEnum["User"] = "USER";
})(TransactionCategorySourceEnum = exports.TransactionCategorySourceEnum || (exports.TransactionCategorySourceEnum = {}));
var TransactionCategoryTypeEnum;
(function (TransactionCategoryTypeEnum) {
    TransactionCategoryTypeEnum["Transfer"] = "TRANSFER";
    TransactionCategoryTypeEnum["DeferredCompensation"] = "DEFERRED_COMPENSATION";
    TransactionCategoryTypeEnum["Uncategorize"] = "UNCATEGORIZE";
    TransactionCategoryTypeEnum["Income"] = "INCOME";
    TransactionCategoryTypeEnum["Expense"] = "EXPENSE";
})(TransactionCategoryTypeEnum = exports.TransactionCategoryTypeEnum || (exports.TransactionCategoryTypeEnum = {}));
var TransactionSourceTypeEnum;
(function (TransactionSourceTypeEnum) {
    TransactionSourceTypeEnum["Aggregated"] = "AGGREGATED";
    TransactionSourceTypeEnum["Manual"] = "MANUAL";
})(TransactionSourceTypeEnum = exports.TransactionSourceTypeEnum || (exports.TransactionSourceTypeEnum = {}));
var TransactionStatusEnum;
(function (TransactionStatusEnum) {
    TransactionStatusEnum["Posted"] = "POSTED";
    TransactionStatusEnum["Pending"] = "PENDING";
    TransactionStatusEnum["Scheduled"] = "SCHEDULED";
    TransactionStatusEnum["Failed"] = "FAILED";
    TransactionStatusEnum["Cleared"] = "CLEARED";
})(TransactionStatusEnum = exports.TransactionStatusEnum || (exports.TransactionStatusEnum = {}));
var TransactionSubTypeEnum;
(function (TransactionSubTypeEnum) {
    TransactionSubTypeEnum["AuthHold"] = "AUTH_HOLD";
    TransactionSubTypeEnum["AuthRequest"] = "AUTH_REQUEST";
    TransactionSubTypeEnum["OverdraftCharge"] = "OVERDRAFT_CHARGE";
    TransactionSubTypeEnum["CreditAdjustment"] = "CREDIT_ADJUSTMENT";
    TransactionSubTypeEnum["PinDebit"] = "PIN_DEBIT";
    TransactionSubTypeEnum["BankDirectDeposit"] = "BANK_DIRECT_DEPOSIT";
    TransactionSubTypeEnum["DividendDeposit"] = "DIVIDEND_DEPOSIT";
    TransactionSubTypeEnum["InterestSavings"] = "INTEREST_SAVINGS";
    TransactionSubTypeEnum["InterestAdjustment"] = "INTEREST_ADJUSTMENT";
    TransactionSubTypeEnum["OnlinePurchase"] = "ONLINE_PURCHASE";
    TransactionSubTypeEnum["PurchasedWithCheck"] = "PURCHASED_WITH_CHECK";
    TransactionSubTypeEnum["RecurringBilling"] = "RECURRING_BILLING";
    TransactionSubTypeEnum["TaxPayment"] = "TAX_PAYMENT";
    TransactionSubTypeEnum["PaymentByCheck"] = "PAYMENT_BY_CHECK";
    TransactionSubTypeEnum["PaymentPlan"] = "PAYMENT_PLAN";
    TransactionSubTypeEnum["FeeRefund"] = "FEE_REFUND";
    TransactionSubTypeEnum["WireTransferCharge"] = "WIRE_TRANSFER_CHARGE";
    TransactionSubTypeEnum["AccountToAccountTransfer"] = "ACCOUNT_TO_ACCOUNT_TRANSFER";
    TransactionSubTypeEnum["BankToBankTransaction"] = "BANK_TO_BANK_TRANSACTION";
    TransactionSubTypeEnum["BankToNonBankAccountTransfer"] = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER";
    TransactionSubTypeEnum["CashWithdrawalAtFi"] = "CASH_WITHDRAWAL_AT_FI";
    TransactionSubTypeEnum["AtmCashWithdrawal"] = "ATM_CASH_WITHDRAWAL";
    TransactionSubTypeEnum["AuthProcessing"] = "AUTH_PROCESSING";
    TransactionSubTypeEnum["AuthRelease"] = "AUTH_RELEASE";
    TransactionSubTypeEnum["PreAuth"] = "PRE_AUTH";
    TransactionSubTypeEnum["AuthComplete"] = "AUTH_COMPLETE";
    TransactionSubTypeEnum["AuthVoid"] = "AUTH_VOID";
    TransactionSubTypeEnum["BalanceEnquiry"] = "BALANCE_ENQUIRY";
    TransactionSubTypeEnum["AccountVerification"] = "ACCOUNT_VERIFICATION";
    TransactionSubTypeEnum["PreAuthCompletion"] = "PRE_AUTH_COMPLETION";
    TransactionSubTypeEnum["ServiceCharge"] = "SERVICE_CHARGE";
    TransactionSubTypeEnum["ServiceChargeFeeRefund"] = "SERVICE_CHARGE_FEE_REFUND";
    TransactionSubTypeEnum["ReturnedCheckCharge"] = "RETURNED_CHECK_CHARGE";
    TransactionSubTypeEnum["ReturnedCheckReimbursement"] = "RETURNED_CHECK_REIMBURSEMENT";
    TransactionSubTypeEnum["CashAdvance"] = "CASH_ADVANCE";
    TransactionSubTypeEnum["BillPayCharge"] = "BILL_PAY_CHARGE";
    TransactionSubTypeEnum["CheckImageServiceCharge"] = "CHECK_IMAGE_SERVICE_CHARGE";
    TransactionSubTypeEnum["OverdraftProtectionCharge"] = "OVERDRAFT_PROTECTION_CHARGE";
    TransactionSubTypeEnum["StopPaymentCharge"] = "STOP_PAYMENT_CHARGE";
    TransactionSubTypeEnum["ChecksOrderingCharge"] = "CHECKS_ORDERING_CHARGE";
    TransactionSubTypeEnum["MonthlyMaintenanceCharge"] = "MONTHLY_MAINTENANCE_CHARGE";
    TransactionSubTypeEnum["DebitCardFee"] = "DEBIT_CARD_FEE";
    TransactionSubTypeEnum["ConvenienceFee"] = "CONVENIENCE_FEE";
    TransactionSubTypeEnum["PersonalLoanCredit"] = "PERSONAL_LOAN_CREDIT";
    TransactionSubTypeEnum["CreditCardCredit"] = "CREDIT_CARD_CREDIT";
    TransactionSubTypeEnum["AutoLoan"] = "AUTO_LOAN";
    TransactionSubTypeEnum["HomeLoanMortgage"] = "HOME_LOAN_MORTGAGE";
    TransactionSubTypeEnum["ShortTermCredit"] = "SHORT_TERM_CREDIT";
    TransactionSubTypeEnum["SignatureDebit"] = "SIGNATURE_DEBIT";
    TransactionSubTypeEnum["ContactLessDebit"] = "CONTACT_LESS_DEBIT";
    TransactionSubTypeEnum["DeferredDeposit"] = "DEFERRED_DEPOSIT";
    TransactionSubTypeEnum["DeferredBillPay"] = "DEFERRED_BILL_PAY";
    TransactionSubTypeEnum["InstallmentPayment"] = "INSTALLMENT_PAYMENT";
    TransactionSubTypeEnum["RecurringSubscriptionPayment"] = "RECURRING_SUBSCRIPTION_PAYMENT";
    TransactionSubTypeEnum["HoldCheckPayment"] = "HOLD_CHECK_PAYMENT";
    TransactionSubTypeEnum["CapitalGainsDistibution"] = "CAPITAL_GAINS_DISTIBUTION";
    TransactionSubTypeEnum["CgLongTermDeposit"] = "CG_LONG_TERM_DEPOSIT";
    TransactionSubTypeEnum["OpenSaleDeposit"] = "OPEN_SALE_DEPOSIT";
    TransactionSubTypeEnum["InterestCheck"] = "INTEREST__CHECK";
    TransactionSubTypeEnum["PurchaseVoid"] = "PURCHASE_VOID";
    TransactionSubTypeEnum["PurchaseWithCreditCard"] = "PURCHASE_WITH_CREDIT_CARD";
    TransactionSubTypeEnum["PurchaseWithDebitCard"] = "PURCHASE_WITH_DEBIT_CARD";
    TransactionSubTypeEnum["ChargeARepeatCustomer"] = "CHARGE_A_REPEAT_CUSTOMER";
    TransactionSubTypeEnum["DownPaymentOrAnnuityPaymentOrDirectPayment"] = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT";
    TransactionSubTypeEnum["FeePayment"] = "FEE_PAYMENT";
    TransactionSubTypeEnum["FinanceChargeRefund"] = "FINANCE_CHARGE_REFUND";
    TransactionSubTypeEnum["TransactionVoid"] = "TRANSACTION_VOID";
    TransactionSubTypeEnum["FeeVoid"] = "FEE_VOID";
    TransactionSubTypeEnum["DebitCardWithdrawalAtStore"] = "DEBIT_CARD_WITHDRAWAL_AT_STORE";
    TransactionSubTypeEnum["ElectronicPayment"] = "ELECTRONIC_PAYMENT";
    TransactionSubTypeEnum["AchDebit"] = "ACH_DEBIT";
    TransactionSubTypeEnum["AtmTellerDeposit"] = "ATM_TELLER_DEPOSIT";
    TransactionSubTypeEnum["PosDebit"] = "POS_DEBIT";
    TransactionSubTypeEnum["BankAdjustment"] = "BANK_ADJUSTMENT";
    TransactionSubTypeEnum["ChargesFees"] = "CHARGES_FEES";
    TransactionSubTypeEnum["Interest"] = "INTEREST";
    TransactionSubTypeEnum["DepositsCredits"] = "DEPOSITS_CREDITS";
    TransactionSubTypeEnum["Payment"] = "PAYMENT";
    TransactionSubTypeEnum["Purchase"] = "PURCHASE";
    TransactionSubTypeEnum["Refund"] = "REFUND";
    TransactionSubTypeEnum["Transfer"] = "TRANSFER";
    TransactionSubTypeEnum["Withdrawal"] = "WITHDRAWAL";
    TransactionSubTypeEnum["OtherDeposits"] = "OTHER_DEPOSITS";
    TransactionSubTypeEnum["OtherWithdrawals"] = "OTHER_WITHDRAWALS";
    TransactionSubTypeEnum["Adjustment"] = "ADJUSTMENT";
    TransactionSubTypeEnum["FinanceCharge"] = "FINANCE_CHARGE";
    TransactionSubTypeEnum["OtherChargesFees"] = "OTHER_CHARGES_FEES";
    TransactionSubTypeEnum["AnnualFee"] = "ANNUAL_FEE";
    TransactionSubTypeEnum["Deposit"] = "DEPOSIT";
    TransactionSubTypeEnum["DirectDepositSalary"] = "DIRECT_DEPOSIT_SALARY";
    TransactionSubTypeEnum["InvestmentIncomeCash"] = "INVESTMENT_INCOME_CASH";
    TransactionSubTypeEnum["Ssa"] = "SSA";
    TransactionSubTypeEnum["Rewards"] = "REWARDS";
    TransactionSubTypeEnum["CheckDeposit"] = "CHECK_DEPOSIT";
    TransactionSubTypeEnum["MobileRemoteDeposit"] = "MOBILE_REMOTE_DEPOSIT";
    TransactionSubTypeEnum["TellerDeposit"] = "TELLER_DEPOSIT";
    TransactionSubTypeEnum["TaxRefund"] = "TAX_REFUND";
    TransactionSubTypeEnum["CreditCardPayment"] = "CREDIT_CARD_PAYMENT";
    TransactionSubTypeEnum["InsurancePayment"] = "INSURANCE_PAYMENT";
    TransactionSubTypeEnum["UtilitiesPayment"] = "UTILITIES_PAYMENT";
    TransactionSubTypeEnum["ChildSupport"] = "CHILD_SUPPORT";
    TransactionSubTypeEnum["Loan"] = "LOAN";
    TransactionSubTypeEnum["PersonalLoan"] = "PERSONAL_LOAN";
    TransactionSubTypeEnum["StudentLoan"] = "STUDENT_LOAN";
    TransactionSubTypeEnum["SalesTax"] = "SALES_TAX";
    TransactionSubTypeEnum["Reimbursement"] = "REIMBURSEMENT";
    TransactionSubTypeEnum["BalanceTransfer"] = "BALANCE_TRANSFER";
    TransactionSubTypeEnum["WireTransfer"] = "WIRE_TRANSFER";
    TransactionSubTypeEnum["OverdraftProtection"] = "OVERDRAFT_PROTECTION";
    TransactionSubTypeEnum["Debit"] = "DEBIT";
    TransactionSubTypeEnum["Credit"] = "CREDIT";
    TransactionSubTypeEnum["NsfFees"] = "NSF_FEES";
})(TransactionSubTypeEnum = exports.TransactionSubTypeEnum || (exports.TransactionSubTypeEnum = {}));
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CONTAINER" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "baseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryId" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categorySource" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "categorySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checkNumber" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "checkNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commission" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "commission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cusipNumber" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "cusipNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", description_1.Description)
    ], Transaction.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detailCategoryId" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "detailCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highLevelCategoryId" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "highLevelCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdingDescription" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "holdingDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "interest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], Transaction.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isin" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "isin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "memo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", merchant_1.Merchant)
    ], Transaction.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentCategoryId" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "parentCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postDate" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "postDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principal" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "principal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], Transaction.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningBalance" }),
        __metadata("design:type", money_1.Money)
    ], Transaction.prototype, "runningBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sedol" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "sedol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settleDate" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "settleDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "subType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionDate" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valoren" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "valoren", void 0);
    return Transaction;
}(utils_1.SpeakeasyBase));
exports.Transaction = Transaction;
