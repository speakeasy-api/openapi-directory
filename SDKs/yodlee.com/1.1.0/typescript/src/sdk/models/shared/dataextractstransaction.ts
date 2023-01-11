import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { Description } from "./description";
import { Merchant } from "./merchant";


export enum DataExtractsTransactionContainerEnum {
    Bank = "bank",
    CreditCard = "creditCard",
    Investment = "investment",
    Insurance = "insurance",
    Loan = "loan",
    Reward = "reward",
    RealEstate = "realEstate",
    OtherAssets = "otherAssets",
    OtherLiabilities = "otherLiabilities"
}

export enum DataExtractsTransactionBaseTypeEnum {
    Credit = "CREDIT",
    Debit = "DEBIT"
}

export enum DataExtractsTransactionCategorySourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum DataExtractsTransactionCategoryTypeEnum {
    Transfer = "TRANSFER",
    DeferredCompensation = "DEFERRED_COMPENSATION",
    Uncategorize = "UNCATEGORIZE",
    Income = "INCOME",
    Expense = "EXPENSE"
}

export enum DataExtractsTransactionSourceTypeEnum {
    Aggregated = "AGGREGATED",
    Manual = "MANUAL"
}

export enum DataExtractsTransactionStatusEnum {
    Posted = "POSTED",
    Pending = "PENDING",
    Scheduled = "SCHEDULED",
    Failed = "FAILED",
    Cleared = "CLEARED"
}

export enum DataExtractsTransactionSubTypeEnum {
    AuthHold = "AUTH_HOLD",
    AuthRequest = "AUTH_REQUEST",
    OverdraftCharge = "OVERDRAFT_CHARGE",
    CreditAdjustment = "CREDIT_ADJUSTMENT",
    PinDebit = "PIN_DEBIT",
    BankDirectDeposit = "BANK_DIRECT_DEPOSIT",
    DividendDeposit = "DIVIDEND_DEPOSIT",
    InterestSavings = "INTEREST_SAVINGS",
    InterestAdjustment = "INTEREST_ADJUSTMENT",
    OnlinePurchase = "ONLINE_PURCHASE",
    PurchasedWithCheck = "PURCHASED_WITH_CHECK",
    RecurringBilling = "RECURRING_BILLING",
    TaxPayment = "TAX_PAYMENT",
    PaymentByCheck = "PAYMENT_BY_CHECK",
    PaymentPlan = "PAYMENT_PLAN",
    FeeRefund = "FEE_REFUND",
    WireTransferCharge = "WIRE_TRANSFER_CHARGE",
    AccountToAccountTransfer = "ACCOUNT_TO_ACCOUNT_TRANSFER",
    BankToBankTransaction = "BANK_TO_BANK_TRANSACTION",
    BankToNonBankAccountTransfer = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER",
    CashWithdrawalAtFi = "CASH_WITHDRAWAL_AT_FI",
    AtmCashWithdrawal = "ATM_CASH_WITHDRAWAL",
    AuthProcessing = "AUTH_PROCESSING",
    AuthRelease = "AUTH_RELEASE",
    PreAuth = "PRE_AUTH",
    AuthComplete = "AUTH_COMPLETE",
    AuthVoid = "AUTH_VOID",
    BalanceEnquiry = "BALANCE_ENQUIRY",
    AccountVerification = "ACCOUNT_VERIFICATION",
    PreAuthCompletion = "PRE_AUTH_COMPLETION",
    ServiceCharge = "SERVICE_CHARGE",
    ServiceChargeFeeRefund = "SERVICE_CHARGE_FEE_REFUND",
    ReturnedCheckCharge = "RETURNED_CHECK_CHARGE",
    ReturnedCheckReimbursement = "RETURNED_CHECK_REIMBURSEMENT",
    CashAdvance = "CASH_ADVANCE",
    BillPayCharge = "BILL_PAY_CHARGE",
    CheckImageServiceCharge = "CHECK_IMAGE_SERVICE_CHARGE",
    OverdraftProtectionCharge = "OVERDRAFT_PROTECTION_CHARGE",
    StopPaymentCharge = "STOP_PAYMENT_CHARGE",
    ChecksOrderingCharge = "CHECKS_ORDERING_CHARGE",
    MonthlyMaintenanceCharge = "MONTHLY_MAINTENANCE_CHARGE",
    DebitCardFee = "DEBIT_CARD_FEE",
    ConvenienceFee = "CONVENIENCE_FEE",
    PersonalLoanCredit = "PERSONAL_LOAN_CREDIT",
    CreditCardCredit = "CREDIT_CARD_CREDIT",
    AutoLoan = "AUTO_LOAN",
    HomeLoanMortgage = "HOME_LOAN_MORTGAGE",
    ShortTermCredit = "SHORT_TERM_CREDIT",
    SignatureDebit = "SIGNATURE_DEBIT",
    ContactLessDebit = "CONTACT_LESS_DEBIT",
    DeferredDeposit = "DEFERRED_DEPOSIT",
    DeferredBillPay = "DEFERRED_BILL_PAY",
    InstallmentPayment = "INSTALLMENT_PAYMENT",
    RecurringSubscriptionPayment = "RECURRING_SUBSCRIPTION_PAYMENT",
    HoldCheckPayment = "HOLD_CHECK_PAYMENT",
    CapitalGainsDistibution = "CAPITAL_GAINS_DISTIBUTION",
    CgLongTermDeposit = "CG_LONG_TERM_DEPOSIT",
    OpenSaleDeposit = "OPEN_SALE_DEPOSIT",
    InterestCheck = "INTEREST__CHECK",
    PurchaseVoid = "PURCHASE_VOID",
    PurchaseWithCreditCard = "PURCHASE_WITH_CREDIT_CARD",
    PurchaseWithDebitCard = "PURCHASE_WITH_DEBIT_CARD",
    ChargeARepeatCustomer = "CHARGE_A_REPEAT_CUSTOMER",
    DownPaymentOrAnnuityPaymentOrDirectPayment = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT",
    FeePayment = "FEE_PAYMENT",
    FinanceChargeRefund = "FINANCE_CHARGE_REFUND",
    TransactionVoid = "TRANSACTION_VOID",
    FeeVoid = "FEE_VOID",
    DebitCardWithdrawalAtStore = "DEBIT_CARD_WITHDRAWAL_AT_STORE",
    ElectronicPayment = "ELECTRONIC_PAYMENT",
    AchDebit = "ACH_DEBIT",
    AtmTellerDeposit = "ATM_TELLER_DEPOSIT",
    PosDebit = "POS_DEBIT",
    BankAdjustment = "BANK_ADJUSTMENT",
    ChargesFees = "CHARGES_FEES",
    Interest = "INTEREST",
    DepositsCredits = "DEPOSITS_CREDITS",
    Payment = "PAYMENT",
    Purchase = "PURCHASE",
    Refund = "REFUND",
    Transfer = "TRANSFER",
    Withdrawal = "WITHDRAWAL",
    OtherDeposits = "OTHER_DEPOSITS",
    OtherWithdrawals = "OTHER_WITHDRAWALS",
    Adjustment = "ADJUSTMENT",
    FinanceCharge = "FINANCE_CHARGE",
    OtherChargesFees = "OTHER_CHARGES_FEES",
    AnnualFee = "ANNUAL_FEE",
    Deposit = "DEPOSIT",
    DirectDepositSalary = "DIRECT_DEPOSIT_SALARY",
    InvestmentIncomeCash = "INVESTMENT_INCOME_CASH",
    Ssa = "SSA",
    Rewards = "REWARDS",
    CheckDeposit = "CHECK_DEPOSIT",
    MobileRemoteDeposit = "MOBILE_REMOTE_DEPOSIT",
    TellerDeposit = "TELLER_DEPOSIT",
    TaxRefund = "TAX_REFUND",
    CreditCardPayment = "CREDIT_CARD_PAYMENT",
    InsurancePayment = "INSURANCE_PAYMENT",
    UtilitiesPayment = "UTILITIES_PAYMENT",
    ChildSupport = "CHILD_SUPPORT",
    Loan = "LOAN",
    PersonalLoan = "PERSONAL_LOAN",
    StudentLoan = "STUDENT_LOAN",
    SalesTax = "SALES_TAX",
    Reimbursement = "REIMBURSEMENT",
    BalanceTransfer = "BALANCE_TRANSFER",
    WireTransfer = "WIRE_TRANSFER",
    OverdraftProtection = "OVERDRAFT_PROTECTION",
    Debit = "DEBIT",
    Credit = "CREDIT",
    NsfFees = "NSF_FEES"
}


export class DataExtractsTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CONTAINER" })
  container?: DataExtractsTransactionContainerEnum;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Money;

  @SpeakeasyMetadata({ data: "json, name=baseType" })
  baseType?: DataExtractsTransactionBaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=categorySource" })
  categorySource?: DataExtractsTransactionCategorySourceEnum;

  @SpeakeasyMetadata({ data: "json, name=categoryType" })
  categoryType?: DataExtractsTransactionCategoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=checkNumber" })
  checkNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=commission" })
  commission?: Money;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=cusipNumber" })
  cusipNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: Description;

  @SpeakeasyMetadata({ data: "json, name=detailCategoryId" })
  detailCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=highLevelCategoryId" })
  highLevelCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=holdingDescription" })
  holdingDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interest" })
  interest?: Money;

  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isManual" })
  isManual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isin" })
  isin?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: Merchant;

  @SpeakeasyMetadata({ data: "json, name=parentCategoryId" })
  parentCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=postDate" })
  postDate?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: Money;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=runningBalance" })
  runningBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=sedol" })
  sedol?: string;

  @SpeakeasyMetadata({ data: "json, name=settleDate" })
  settleDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: DataExtractsTransactionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DataExtractsTransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: DataExtractsTransactionSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=valoren" })
  valoren?: string;
}
