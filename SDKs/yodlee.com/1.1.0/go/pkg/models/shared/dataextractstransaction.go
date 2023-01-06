package shared

type DataExtractsTransactionContainerEnum string

const (
	DataExtractsTransactionCONTAINEREnumBank             DataExtractsTransactionContainerEnum = "bank"
	DataExtractsTransactionCONTAINEREnumCreditCard       DataExtractsTransactionContainerEnum = "creditCard"
	DataExtractsTransactionCONTAINEREnumInvestment       DataExtractsTransactionContainerEnum = "investment"
	DataExtractsTransactionCONTAINEREnumInsurance        DataExtractsTransactionContainerEnum = "insurance"
	DataExtractsTransactionCONTAINEREnumLoan             DataExtractsTransactionContainerEnum = "loan"
	DataExtractsTransactionCONTAINEREnumReward           DataExtractsTransactionContainerEnum = "reward"
	DataExtractsTransactionCONTAINEREnumRealEstate       DataExtractsTransactionContainerEnum = "realEstate"
	DataExtractsTransactionCONTAINEREnumOtherAssets      DataExtractsTransactionContainerEnum = "otherAssets"
	DataExtractsTransactionCONTAINEREnumOtherLiabilities DataExtractsTransactionContainerEnum = "otherLiabilities"
)

type DataExtractsTransactionBaseTypeEnum string

const (
	DataExtractsTransactionBaseTypeEnumCredit DataExtractsTransactionBaseTypeEnum = "CREDIT"
	DataExtractsTransactionBaseTypeEnumDebit  DataExtractsTransactionBaseTypeEnum = "DEBIT"
)

type DataExtractsTransactionCategorySourceEnum string

const (
	DataExtractsTransactionCategorySourceEnumSystem DataExtractsTransactionCategorySourceEnum = "SYSTEM"
	DataExtractsTransactionCategorySourceEnumUser   DataExtractsTransactionCategorySourceEnum = "USER"
)

type DataExtractsTransactionCategoryTypeEnum string

const (
	DataExtractsTransactionCategoryTypeEnumTransfer             DataExtractsTransactionCategoryTypeEnum = "TRANSFER"
	DataExtractsTransactionCategoryTypeEnumDeferredCompensation DataExtractsTransactionCategoryTypeEnum = "DEFERRED_COMPENSATION"
	DataExtractsTransactionCategoryTypeEnumUncategorize         DataExtractsTransactionCategoryTypeEnum = "UNCATEGORIZE"
	DataExtractsTransactionCategoryTypeEnumIncome               DataExtractsTransactionCategoryTypeEnum = "INCOME"
	DataExtractsTransactionCategoryTypeEnumExpense              DataExtractsTransactionCategoryTypeEnum = "EXPENSE"
)

type DataExtractsTransactionSourceTypeEnum string

const (
	DataExtractsTransactionSourceTypeEnumAggregated DataExtractsTransactionSourceTypeEnum = "AGGREGATED"
	DataExtractsTransactionSourceTypeEnumManual     DataExtractsTransactionSourceTypeEnum = "MANUAL"
)

type DataExtractsTransactionStatusEnum string

const (
	DataExtractsTransactionStatusEnumPosted    DataExtractsTransactionStatusEnum = "POSTED"
	DataExtractsTransactionStatusEnumPending   DataExtractsTransactionStatusEnum = "PENDING"
	DataExtractsTransactionStatusEnumScheduled DataExtractsTransactionStatusEnum = "SCHEDULED"
	DataExtractsTransactionStatusEnumFailed    DataExtractsTransactionStatusEnum = "FAILED"
	DataExtractsTransactionStatusEnumCleared   DataExtractsTransactionStatusEnum = "CLEARED"
)

type DataExtractsTransactionSubTypeEnum string

const (
	DataExtractsTransactionSubTypeEnumAuthHold                                   DataExtractsTransactionSubTypeEnum = "AUTH_HOLD"
	DataExtractsTransactionSubTypeEnumAuthRequest                                DataExtractsTransactionSubTypeEnum = "AUTH_REQUEST"
	DataExtractsTransactionSubTypeEnumOverdraftCharge                            DataExtractsTransactionSubTypeEnum = "OVERDRAFT_CHARGE"
	DataExtractsTransactionSubTypeEnumCreditAdjustment                           DataExtractsTransactionSubTypeEnum = "CREDIT_ADJUSTMENT"
	DataExtractsTransactionSubTypeEnumPinDebit                                   DataExtractsTransactionSubTypeEnum = "PIN_DEBIT"
	DataExtractsTransactionSubTypeEnumBankDirectDeposit                          DataExtractsTransactionSubTypeEnum = "BANK_DIRECT_DEPOSIT"
	DataExtractsTransactionSubTypeEnumDividendDeposit                            DataExtractsTransactionSubTypeEnum = "DIVIDEND_DEPOSIT"
	DataExtractsTransactionSubTypeEnumInterestSavings                            DataExtractsTransactionSubTypeEnum = "INTEREST_SAVINGS"
	DataExtractsTransactionSubTypeEnumInterestAdjustment                         DataExtractsTransactionSubTypeEnum = "INTEREST_ADJUSTMENT"
	DataExtractsTransactionSubTypeEnumOnlinePurchase                             DataExtractsTransactionSubTypeEnum = "ONLINE_PURCHASE"
	DataExtractsTransactionSubTypeEnumPurchasedWithCheck                         DataExtractsTransactionSubTypeEnum = "PURCHASED_WITH_CHECK"
	DataExtractsTransactionSubTypeEnumRecurringBilling                           DataExtractsTransactionSubTypeEnum = "RECURRING_BILLING"
	DataExtractsTransactionSubTypeEnumTaxPayment                                 DataExtractsTransactionSubTypeEnum = "TAX_PAYMENT"
	DataExtractsTransactionSubTypeEnumPaymentByCheck                             DataExtractsTransactionSubTypeEnum = "PAYMENT_BY_CHECK"
	DataExtractsTransactionSubTypeEnumPaymentPlan                                DataExtractsTransactionSubTypeEnum = "PAYMENT_PLAN"
	DataExtractsTransactionSubTypeEnumFeeRefund                                  DataExtractsTransactionSubTypeEnum = "FEE_REFUND"
	DataExtractsTransactionSubTypeEnumWireTransferCharge                         DataExtractsTransactionSubTypeEnum = "WIRE_TRANSFER_CHARGE"
	DataExtractsTransactionSubTypeEnumAccountToAccountTransfer                   DataExtractsTransactionSubTypeEnum = "ACCOUNT_TO_ACCOUNT_TRANSFER"
	DataExtractsTransactionSubTypeEnumBankToBankTransaction                      DataExtractsTransactionSubTypeEnum = "BANK_TO_BANK_TRANSACTION"
	DataExtractsTransactionSubTypeEnumBankToNonBankAccountTransfer               DataExtractsTransactionSubTypeEnum = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER"
	DataExtractsTransactionSubTypeEnumCashWithdrawalAtFi                         DataExtractsTransactionSubTypeEnum = "CASH_WITHDRAWAL_AT_FI"
	DataExtractsTransactionSubTypeEnumAtmCashWithdrawal                          DataExtractsTransactionSubTypeEnum = "ATM_CASH_WITHDRAWAL"
	DataExtractsTransactionSubTypeEnumAuthProcessing                             DataExtractsTransactionSubTypeEnum = "AUTH_PROCESSING"
	DataExtractsTransactionSubTypeEnumAuthRelease                                DataExtractsTransactionSubTypeEnum = "AUTH_RELEASE"
	DataExtractsTransactionSubTypeEnumPreAuth                                    DataExtractsTransactionSubTypeEnum = "PRE_AUTH"
	DataExtractsTransactionSubTypeEnumAuthComplete                               DataExtractsTransactionSubTypeEnum = "AUTH_COMPLETE"
	DataExtractsTransactionSubTypeEnumAuthVoid                                   DataExtractsTransactionSubTypeEnum = "AUTH_VOID"
	DataExtractsTransactionSubTypeEnumBalanceEnquiry                             DataExtractsTransactionSubTypeEnum = "BALANCE_ENQUIRY"
	DataExtractsTransactionSubTypeEnumAccountVerification                        DataExtractsTransactionSubTypeEnum = "ACCOUNT_VERIFICATION"
	DataExtractsTransactionSubTypeEnumPreAuthCompletion                          DataExtractsTransactionSubTypeEnum = "PRE_AUTH_COMPLETION"
	DataExtractsTransactionSubTypeEnumServiceCharge                              DataExtractsTransactionSubTypeEnum = "SERVICE_CHARGE"
	DataExtractsTransactionSubTypeEnumServiceChargeFeeRefund                     DataExtractsTransactionSubTypeEnum = "SERVICE_CHARGE_FEE_REFUND"
	DataExtractsTransactionSubTypeEnumReturnedCheckCharge                        DataExtractsTransactionSubTypeEnum = "RETURNED_CHECK_CHARGE"
	DataExtractsTransactionSubTypeEnumReturnedCheckReimbursement                 DataExtractsTransactionSubTypeEnum = "RETURNED_CHECK_REIMBURSEMENT"
	DataExtractsTransactionSubTypeEnumCashAdvance                                DataExtractsTransactionSubTypeEnum = "CASH_ADVANCE"
	DataExtractsTransactionSubTypeEnumBillPayCharge                              DataExtractsTransactionSubTypeEnum = "BILL_PAY_CHARGE"
	DataExtractsTransactionSubTypeEnumCheckImageServiceCharge                    DataExtractsTransactionSubTypeEnum = "CHECK_IMAGE_SERVICE_CHARGE"
	DataExtractsTransactionSubTypeEnumOverdraftProtectionCharge                  DataExtractsTransactionSubTypeEnum = "OVERDRAFT_PROTECTION_CHARGE"
	DataExtractsTransactionSubTypeEnumStopPaymentCharge                          DataExtractsTransactionSubTypeEnum = "STOP_PAYMENT_CHARGE"
	DataExtractsTransactionSubTypeEnumChecksOrderingCharge                       DataExtractsTransactionSubTypeEnum = "CHECKS_ORDERING_CHARGE"
	DataExtractsTransactionSubTypeEnumMonthlyMaintenanceCharge                   DataExtractsTransactionSubTypeEnum = "MONTHLY_MAINTENANCE_CHARGE"
	DataExtractsTransactionSubTypeEnumDebitCardFee                               DataExtractsTransactionSubTypeEnum = "DEBIT_CARD_FEE"
	DataExtractsTransactionSubTypeEnumConvenienceFee                             DataExtractsTransactionSubTypeEnum = "CONVENIENCE_FEE"
	DataExtractsTransactionSubTypeEnumPersonalLoanCredit                         DataExtractsTransactionSubTypeEnum = "PERSONAL_LOAN_CREDIT"
	DataExtractsTransactionSubTypeEnumCreditCardCredit                           DataExtractsTransactionSubTypeEnum = "CREDIT_CARD_CREDIT"
	DataExtractsTransactionSubTypeEnumAutoLoan                                   DataExtractsTransactionSubTypeEnum = "AUTO_LOAN"
	DataExtractsTransactionSubTypeEnumHomeLoanMortgage                           DataExtractsTransactionSubTypeEnum = "HOME_LOAN_MORTGAGE"
	DataExtractsTransactionSubTypeEnumShortTermCredit                            DataExtractsTransactionSubTypeEnum = "SHORT_TERM_CREDIT"
	DataExtractsTransactionSubTypeEnumSignatureDebit                             DataExtractsTransactionSubTypeEnum = "SIGNATURE_DEBIT"
	DataExtractsTransactionSubTypeEnumContactLessDebit                           DataExtractsTransactionSubTypeEnum = "CONTACT_LESS_DEBIT"
	DataExtractsTransactionSubTypeEnumDeferredDeposit                            DataExtractsTransactionSubTypeEnum = "DEFERRED_DEPOSIT"
	DataExtractsTransactionSubTypeEnumDeferredBillPay                            DataExtractsTransactionSubTypeEnum = "DEFERRED_BILL_PAY"
	DataExtractsTransactionSubTypeEnumInstallmentPayment                         DataExtractsTransactionSubTypeEnum = "INSTALLMENT_PAYMENT"
	DataExtractsTransactionSubTypeEnumRecurringSubscriptionPayment               DataExtractsTransactionSubTypeEnum = "RECURRING_SUBSCRIPTION_PAYMENT"
	DataExtractsTransactionSubTypeEnumHoldCheckPayment                           DataExtractsTransactionSubTypeEnum = "HOLD_CHECK_PAYMENT"
	DataExtractsTransactionSubTypeEnumCapitalGainsDistibution                    DataExtractsTransactionSubTypeEnum = "CAPITAL_GAINS_DISTIBUTION"
	DataExtractsTransactionSubTypeEnumCgLongTermDeposit                          DataExtractsTransactionSubTypeEnum = "CG_LONG_TERM_DEPOSIT"
	DataExtractsTransactionSubTypeEnumOpenSaleDeposit                            DataExtractsTransactionSubTypeEnum = "OPEN_SALE_DEPOSIT"
	DataExtractsTransactionSubTypeEnumInterestCheck                              DataExtractsTransactionSubTypeEnum = "INTEREST__CHECK"
	DataExtractsTransactionSubTypeEnumPurchaseVoid                               DataExtractsTransactionSubTypeEnum = "PURCHASE_VOID"
	DataExtractsTransactionSubTypeEnumPurchaseWithCreditCard                     DataExtractsTransactionSubTypeEnum = "PURCHASE_WITH_CREDIT_CARD"
	DataExtractsTransactionSubTypeEnumPurchaseWithDebitCard                      DataExtractsTransactionSubTypeEnum = "PURCHASE_WITH_DEBIT_CARD"
	DataExtractsTransactionSubTypeEnumChargeARepeatCustomer                      DataExtractsTransactionSubTypeEnum = "CHARGE_A_REPEAT_CUSTOMER"
	DataExtractsTransactionSubTypeEnumDownPaymentOrAnnuityPaymentOrDirectPayment DataExtractsTransactionSubTypeEnum = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT"
	DataExtractsTransactionSubTypeEnumFeePayment                                 DataExtractsTransactionSubTypeEnum = "FEE_PAYMENT"
	DataExtractsTransactionSubTypeEnumFinanceChargeRefund                        DataExtractsTransactionSubTypeEnum = "FINANCE_CHARGE_REFUND"
	DataExtractsTransactionSubTypeEnumTransactionVoid                            DataExtractsTransactionSubTypeEnum = "TRANSACTION_VOID"
	DataExtractsTransactionSubTypeEnumFeeVoid                                    DataExtractsTransactionSubTypeEnum = "FEE_VOID"
	DataExtractsTransactionSubTypeEnumDebitCardWithdrawalAtStore                 DataExtractsTransactionSubTypeEnum = "DEBIT_CARD_WITHDRAWAL_AT_STORE"
	DataExtractsTransactionSubTypeEnumElectronicPayment                          DataExtractsTransactionSubTypeEnum = "ELECTRONIC_PAYMENT"
	DataExtractsTransactionSubTypeEnumAchDebit                                   DataExtractsTransactionSubTypeEnum = "ACH_DEBIT"
	DataExtractsTransactionSubTypeEnumAtmTellerDeposit                           DataExtractsTransactionSubTypeEnum = "ATM_TELLER_DEPOSIT"
	DataExtractsTransactionSubTypeEnumPosDebit                                   DataExtractsTransactionSubTypeEnum = "POS_DEBIT"
	DataExtractsTransactionSubTypeEnumBankAdjustment                             DataExtractsTransactionSubTypeEnum = "BANK_ADJUSTMENT"
	DataExtractsTransactionSubTypeEnumChargesFees                                DataExtractsTransactionSubTypeEnum = "CHARGES_FEES"
	DataExtractsTransactionSubTypeEnumInterest                                   DataExtractsTransactionSubTypeEnum = "INTEREST"
	DataExtractsTransactionSubTypeEnumDepositsCredits                            DataExtractsTransactionSubTypeEnum = "DEPOSITS_CREDITS"
	DataExtractsTransactionSubTypeEnumPayment                                    DataExtractsTransactionSubTypeEnum = "PAYMENT"
	DataExtractsTransactionSubTypeEnumPurchase                                   DataExtractsTransactionSubTypeEnum = "PURCHASE"
	DataExtractsTransactionSubTypeEnumRefund                                     DataExtractsTransactionSubTypeEnum = "REFUND"
	DataExtractsTransactionSubTypeEnumTransfer                                   DataExtractsTransactionSubTypeEnum = "TRANSFER"
	DataExtractsTransactionSubTypeEnumWithdrawal                                 DataExtractsTransactionSubTypeEnum = "WITHDRAWAL"
	DataExtractsTransactionSubTypeEnumOtherDeposits                              DataExtractsTransactionSubTypeEnum = "OTHER_DEPOSITS"
	DataExtractsTransactionSubTypeEnumOtherWithdrawals                           DataExtractsTransactionSubTypeEnum = "OTHER_WITHDRAWALS"
	DataExtractsTransactionSubTypeEnumAdjustment                                 DataExtractsTransactionSubTypeEnum = "ADJUSTMENT"
	DataExtractsTransactionSubTypeEnumFinanceCharge                              DataExtractsTransactionSubTypeEnum = "FINANCE_CHARGE"
	DataExtractsTransactionSubTypeEnumOtherChargesFees                           DataExtractsTransactionSubTypeEnum = "OTHER_CHARGES_FEES"
	DataExtractsTransactionSubTypeEnumAnnualFee                                  DataExtractsTransactionSubTypeEnum = "ANNUAL_FEE"
	DataExtractsTransactionSubTypeEnumDeposit                                    DataExtractsTransactionSubTypeEnum = "DEPOSIT"
	DataExtractsTransactionSubTypeEnumDirectDepositSalary                        DataExtractsTransactionSubTypeEnum = "DIRECT_DEPOSIT_SALARY"
	DataExtractsTransactionSubTypeEnumInvestmentIncomeCash                       DataExtractsTransactionSubTypeEnum = "INVESTMENT_INCOME_CASH"
	DataExtractsTransactionSubTypeEnumSsa                                        DataExtractsTransactionSubTypeEnum = "SSA"
	DataExtractsTransactionSubTypeEnumRewards                                    DataExtractsTransactionSubTypeEnum = "REWARDS"
	DataExtractsTransactionSubTypeEnumCheckDeposit                               DataExtractsTransactionSubTypeEnum = "CHECK_DEPOSIT"
	DataExtractsTransactionSubTypeEnumMobileRemoteDeposit                        DataExtractsTransactionSubTypeEnum = "MOBILE_REMOTE_DEPOSIT"
	DataExtractsTransactionSubTypeEnumTellerDeposit                              DataExtractsTransactionSubTypeEnum = "TELLER_DEPOSIT"
	DataExtractsTransactionSubTypeEnumTaxRefund                                  DataExtractsTransactionSubTypeEnum = "TAX_REFUND"
	DataExtractsTransactionSubTypeEnumCreditCardPayment                          DataExtractsTransactionSubTypeEnum = "CREDIT_CARD_PAYMENT"
	DataExtractsTransactionSubTypeEnumInsurancePayment                           DataExtractsTransactionSubTypeEnum = "INSURANCE_PAYMENT"
	DataExtractsTransactionSubTypeEnumUtilitiesPayment                           DataExtractsTransactionSubTypeEnum = "UTILITIES_PAYMENT"
	DataExtractsTransactionSubTypeEnumChildSupport                               DataExtractsTransactionSubTypeEnum = "CHILD_SUPPORT"
	DataExtractsTransactionSubTypeEnumLoan                                       DataExtractsTransactionSubTypeEnum = "LOAN"
	DataExtractsTransactionSubTypeEnumPersonalLoan                               DataExtractsTransactionSubTypeEnum = "PERSONAL_LOAN"
	DataExtractsTransactionSubTypeEnumStudentLoan                                DataExtractsTransactionSubTypeEnum = "STUDENT_LOAN"
	DataExtractsTransactionSubTypeEnumSalesTax                                   DataExtractsTransactionSubTypeEnum = "SALES_TAX"
	DataExtractsTransactionSubTypeEnumReimbursement                              DataExtractsTransactionSubTypeEnum = "REIMBURSEMENT"
	DataExtractsTransactionSubTypeEnumBalanceTransfer                            DataExtractsTransactionSubTypeEnum = "BALANCE_TRANSFER"
	DataExtractsTransactionSubTypeEnumWireTransfer                               DataExtractsTransactionSubTypeEnum = "WIRE_TRANSFER"
	DataExtractsTransactionSubTypeEnumOverdraftProtection                        DataExtractsTransactionSubTypeEnum = "OVERDRAFT_PROTECTION"
	DataExtractsTransactionSubTypeEnumDebit                                      DataExtractsTransactionSubTypeEnum = "DEBIT"
	DataExtractsTransactionSubTypeEnumCredit                                     DataExtractsTransactionSubTypeEnum = "CREDIT"
	DataExtractsTransactionSubTypeEnumNsfFees                                    DataExtractsTransactionSubTypeEnum = "NSF_FEES"
)

type DataExtractsTransaction struct {
	CONTAINER           *DataExtractsTransactionContainerEnum      `json:"CONTAINER,omitempty"`
	AccountID           *int64                                     `json:"accountId,omitempty"`
	Amount              *Money                                     `json:"amount,omitempty"`
	BaseType            *DataExtractsTransactionBaseTypeEnum       `json:"baseType,omitempty"`
	Category            *string                                    `json:"category,omitempty"`
	CategoryID          *int64                                     `json:"categoryId,omitempty"`
	CategorySource      *DataExtractsTransactionCategorySourceEnum `json:"categorySource,omitempty"`
	CategoryType        *DataExtractsTransactionCategoryTypeEnum   `json:"categoryType,omitempty"`
	CheckNumber         *string                                    `json:"checkNumber,omitempty"`
	Commission          *Money                                     `json:"commission,omitempty"`
	CreatedDate         *string                                    `json:"createdDate,omitempty"`
	CusipNumber         *string                                    `json:"cusipNumber,omitempty"`
	Date                *string                                    `json:"date,omitempty"`
	Description         *Description                               `json:"description,omitempty"`
	DetailCategoryID    *int64                                     `json:"detailCategoryId,omitempty"`
	HighLevelCategoryID *int64                                     `json:"highLevelCategoryId,omitempty"`
	HoldingDescription  *string                                    `json:"holdingDescription,omitempty"`
	ID                  *int64                                     `json:"id,omitempty"`
	Interest            *Money                                     `json:"interest,omitempty"`
	IsDeleted           *bool                                      `json:"isDeleted,omitempty"`
	IsManual            *bool                                      `json:"isManual,omitempty"`
	Isin                *string                                    `json:"isin,omitempty"`
	LastUpdated         *string                                    `json:"lastUpdated,omitempty"`
	Memo                *string                                    `json:"memo,omitempty"`
	Merchant            *Merchant                                  `json:"merchant,omitempty"`
	ParentCategoryID    *int64                                     `json:"parentCategoryId,omitempty"`
	PostDate            *string                                    `json:"postDate,omitempty"`
	Price               *Money                                     `json:"price,omitempty"`
	Principal           *Money                                     `json:"principal,omitempty"`
	Quantity            *float64                                   `json:"quantity,omitempty"`
	RunningBalance      *Money                                     `json:"runningBalance,omitempty"`
	Sedol               *string                                    `json:"sedol,omitempty"`
	SettleDate          *string                                    `json:"settleDate,omitempty"`
	SourceID            *string                                    `json:"sourceId,omitempty"`
	SourceType          *DataExtractsTransactionSourceTypeEnum     `json:"sourceType,omitempty"`
	Status              *DataExtractsTransactionStatusEnum         `json:"status,omitempty"`
	SubType             *DataExtractsTransactionSubTypeEnum        `json:"subType,omitempty"`
	Symbol              *string                                    `json:"symbol,omitempty"`
	TransactionDate     *string                                    `json:"transactionDate,omitempty"`
	Type                *string                                    `json:"type,omitempty"`
	Valoren             *string                                    `json:"valoren,omitempty"`
}
