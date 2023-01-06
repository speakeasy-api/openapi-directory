package shared

type TransactionContainerEnum string

const (
	TransactionCONTAINEREnumBank             TransactionContainerEnum = "bank"
	TransactionCONTAINEREnumCreditCard       TransactionContainerEnum = "creditCard"
	TransactionCONTAINEREnumInvestment       TransactionContainerEnum = "investment"
	TransactionCONTAINEREnumInsurance        TransactionContainerEnum = "insurance"
	TransactionCONTAINEREnumLoan             TransactionContainerEnum = "loan"
	TransactionCONTAINEREnumReward           TransactionContainerEnum = "reward"
	TransactionCONTAINEREnumRealEstate       TransactionContainerEnum = "realEstate"
	TransactionCONTAINEREnumOtherAssets      TransactionContainerEnum = "otherAssets"
	TransactionCONTAINEREnumOtherLiabilities TransactionContainerEnum = "otherLiabilities"
)

type TransactionBaseTypeEnum string

const (
	TransactionBaseTypeEnumCredit TransactionBaseTypeEnum = "CREDIT"
	TransactionBaseTypeEnumDebit  TransactionBaseTypeEnum = "DEBIT"
)

type TransactionCategorySourceEnum string

const (
	TransactionCategorySourceEnumSystem TransactionCategorySourceEnum = "SYSTEM"
	TransactionCategorySourceEnumUser   TransactionCategorySourceEnum = "USER"
)

type TransactionCategoryTypeEnum string

const (
	TransactionCategoryTypeEnumTransfer             TransactionCategoryTypeEnum = "TRANSFER"
	TransactionCategoryTypeEnumDeferredCompensation TransactionCategoryTypeEnum = "DEFERRED_COMPENSATION"
	TransactionCategoryTypeEnumUncategorize         TransactionCategoryTypeEnum = "UNCATEGORIZE"
	TransactionCategoryTypeEnumIncome               TransactionCategoryTypeEnum = "INCOME"
	TransactionCategoryTypeEnumExpense              TransactionCategoryTypeEnum = "EXPENSE"
)

type TransactionSourceTypeEnum string

const (
	TransactionSourceTypeEnumAggregated TransactionSourceTypeEnum = "AGGREGATED"
	TransactionSourceTypeEnumManual     TransactionSourceTypeEnum = "MANUAL"
)

type TransactionStatusEnum string

const (
	TransactionStatusEnumPosted    TransactionStatusEnum = "POSTED"
	TransactionStatusEnumPending   TransactionStatusEnum = "PENDING"
	TransactionStatusEnumScheduled TransactionStatusEnum = "SCHEDULED"
	TransactionStatusEnumFailed    TransactionStatusEnum = "FAILED"
	TransactionStatusEnumCleared   TransactionStatusEnum = "CLEARED"
)

type TransactionSubTypeEnum string

const (
	TransactionSubTypeEnumAuthHold                                   TransactionSubTypeEnum = "AUTH_HOLD"
	TransactionSubTypeEnumAuthRequest                                TransactionSubTypeEnum = "AUTH_REQUEST"
	TransactionSubTypeEnumOverdraftCharge                            TransactionSubTypeEnum = "OVERDRAFT_CHARGE"
	TransactionSubTypeEnumCreditAdjustment                           TransactionSubTypeEnum = "CREDIT_ADJUSTMENT"
	TransactionSubTypeEnumPinDebit                                   TransactionSubTypeEnum = "PIN_DEBIT"
	TransactionSubTypeEnumBankDirectDeposit                          TransactionSubTypeEnum = "BANK_DIRECT_DEPOSIT"
	TransactionSubTypeEnumDividendDeposit                            TransactionSubTypeEnum = "DIVIDEND_DEPOSIT"
	TransactionSubTypeEnumInterestSavings                            TransactionSubTypeEnum = "INTEREST_SAVINGS"
	TransactionSubTypeEnumInterestAdjustment                         TransactionSubTypeEnum = "INTEREST_ADJUSTMENT"
	TransactionSubTypeEnumOnlinePurchase                             TransactionSubTypeEnum = "ONLINE_PURCHASE"
	TransactionSubTypeEnumPurchasedWithCheck                         TransactionSubTypeEnum = "PURCHASED_WITH_CHECK"
	TransactionSubTypeEnumRecurringBilling                           TransactionSubTypeEnum = "RECURRING_BILLING"
	TransactionSubTypeEnumTaxPayment                                 TransactionSubTypeEnum = "TAX_PAYMENT"
	TransactionSubTypeEnumPaymentByCheck                             TransactionSubTypeEnum = "PAYMENT_BY_CHECK"
	TransactionSubTypeEnumPaymentPlan                                TransactionSubTypeEnum = "PAYMENT_PLAN"
	TransactionSubTypeEnumFeeRefund                                  TransactionSubTypeEnum = "FEE_REFUND"
	TransactionSubTypeEnumWireTransferCharge                         TransactionSubTypeEnum = "WIRE_TRANSFER_CHARGE"
	TransactionSubTypeEnumAccountToAccountTransfer                   TransactionSubTypeEnum = "ACCOUNT_TO_ACCOUNT_TRANSFER"
	TransactionSubTypeEnumBankToBankTransaction                      TransactionSubTypeEnum = "BANK_TO_BANK_TRANSACTION"
	TransactionSubTypeEnumBankToNonBankAccountTransfer               TransactionSubTypeEnum = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER"
	TransactionSubTypeEnumCashWithdrawalAtFi                         TransactionSubTypeEnum = "CASH_WITHDRAWAL_AT_FI"
	TransactionSubTypeEnumAtmCashWithdrawal                          TransactionSubTypeEnum = "ATM_CASH_WITHDRAWAL"
	TransactionSubTypeEnumAuthProcessing                             TransactionSubTypeEnum = "AUTH_PROCESSING"
	TransactionSubTypeEnumAuthRelease                                TransactionSubTypeEnum = "AUTH_RELEASE"
	TransactionSubTypeEnumPreAuth                                    TransactionSubTypeEnum = "PRE_AUTH"
	TransactionSubTypeEnumAuthComplete                               TransactionSubTypeEnum = "AUTH_COMPLETE"
	TransactionSubTypeEnumAuthVoid                                   TransactionSubTypeEnum = "AUTH_VOID"
	TransactionSubTypeEnumBalanceEnquiry                             TransactionSubTypeEnum = "BALANCE_ENQUIRY"
	TransactionSubTypeEnumAccountVerification                        TransactionSubTypeEnum = "ACCOUNT_VERIFICATION"
	TransactionSubTypeEnumPreAuthCompletion                          TransactionSubTypeEnum = "PRE_AUTH_COMPLETION"
	TransactionSubTypeEnumServiceCharge                              TransactionSubTypeEnum = "SERVICE_CHARGE"
	TransactionSubTypeEnumServiceChargeFeeRefund                     TransactionSubTypeEnum = "SERVICE_CHARGE_FEE_REFUND"
	TransactionSubTypeEnumReturnedCheckCharge                        TransactionSubTypeEnum = "RETURNED_CHECK_CHARGE"
	TransactionSubTypeEnumReturnedCheckReimbursement                 TransactionSubTypeEnum = "RETURNED_CHECK_REIMBURSEMENT"
	TransactionSubTypeEnumCashAdvance                                TransactionSubTypeEnum = "CASH_ADVANCE"
	TransactionSubTypeEnumBillPayCharge                              TransactionSubTypeEnum = "BILL_PAY_CHARGE"
	TransactionSubTypeEnumCheckImageServiceCharge                    TransactionSubTypeEnum = "CHECK_IMAGE_SERVICE_CHARGE"
	TransactionSubTypeEnumOverdraftProtectionCharge                  TransactionSubTypeEnum = "OVERDRAFT_PROTECTION_CHARGE"
	TransactionSubTypeEnumStopPaymentCharge                          TransactionSubTypeEnum = "STOP_PAYMENT_CHARGE"
	TransactionSubTypeEnumChecksOrderingCharge                       TransactionSubTypeEnum = "CHECKS_ORDERING_CHARGE"
	TransactionSubTypeEnumMonthlyMaintenanceCharge                   TransactionSubTypeEnum = "MONTHLY_MAINTENANCE_CHARGE"
	TransactionSubTypeEnumDebitCardFee                               TransactionSubTypeEnum = "DEBIT_CARD_FEE"
	TransactionSubTypeEnumConvenienceFee                             TransactionSubTypeEnum = "CONVENIENCE_FEE"
	TransactionSubTypeEnumPersonalLoanCredit                         TransactionSubTypeEnum = "PERSONAL_LOAN_CREDIT"
	TransactionSubTypeEnumCreditCardCredit                           TransactionSubTypeEnum = "CREDIT_CARD_CREDIT"
	TransactionSubTypeEnumAutoLoan                                   TransactionSubTypeEnum = "AUTO_LOAN"
	TransactionSubTypeEnumHomeLoanMortgage                           TransactionSubTypeEnum = "HOME_LOAN_MORTGAGE"
	TransactionSubTypeEnumShortTermCredit                            TransactionSubTypeEnum = "SHORT_TERM_CREDIT"
	TransactionSubTypeEnumSignatureDebit                             TransactionSubTypeEnum = "SIGNATURE_DEBIT"
	TransactionSubTypeEnumContactLessDebit                           TransactionSubTypeEnum = "CONTACT_LESS_DEBIT"
	TransactionSubTypeEnumDeferredDeposit                            TransactionSubTypeEnum = "DEFERRED_DEPOSIT"
	TransactionSubTypeEnumDeferredBillPay                            TransactionSubTypeEnum = "DEFERRED_BILL_PAY"
	TransactionSubTypeEnumInstallmentPayment                         TransactionSubTypeEnum = "INSTALLMENT_PAYMENT"
	TransactionSubTypeEnumRecurringSubscriptionPayment               TransactionSubTypeEnum = "RECURRING_SUBSCRIPTION_PAYMENT"
	TransactionSubTypeEnumHoldCheckPayment                           TransactionSubTypeEnum = "HOLD_CHECK_PAYMENT"
	TransactionSubTypeEnumCapitalGainsDistibution                    TransactionSubTypeEnum = "CAPITAL_GAINS_DISTIBUTION"
	TransactionSubTypeEnumCgLongTermDeposit                          TransactionSubTypeEnum = "CG_LONG_TERM_DEPOSIT"
	TransactionSubTypeEnumOpenSaleDeposit                            TransactionSubTypeEnum = "OPEN_SALE_DEPOSIT"
	TransactionSubTypeEnumInterestCheck                              TransactionSubTypeEnum = "INTEREST__CHECK"
	TransactionSubTypeEnumPurchaseVoid                               TransactionSubTypeEnum = "PURCHASE_VOID"
	TransactionSubTypeEnumPurchaseWithCreditCard                     TransactionSubTypeEnum = "PURCHASE_WITH_CREDIT_CARD"
	TransactionSubTypeEnumPurchaseWithDebitCard                      TransactionSubTypeEnum = "PURCHASE_WITH_DEBIT_CARD"
	TransactionSubTypeEnumChargeARepeatCustomer                      TransactionSubTypeEnum = "CHARGE_A_REPEAT_CUSTOMER"
	TransactionSubTypeEnumDownPaymentOrAnnuityPaymentOrDirectPayment TransactionSubTypeEnum = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT"
	TransactionSubTypeEnumFeePayment                                 TransactionSubTypeEnum = "FEE_PAYMENT"
	TransactionSubTypeEnumFinanceChargeRefund                        TransactionSubTypeEnum = "FINANCE_CHARGE_REFUND"
	TransactionSubTypeEnumTransactionVoid                            TransactionSubTypeEnum = "TRANSACTION_VOID"
	TransactionSubTypeEnumFeeVoid                                    TransactionSubTypeEnum = "FEE_VOID"
	TransactionSubTypeEnumDebitCardWithdrawalAtStore                 TransactionSubTypeEnum = "DEBIT_CARD_WITHDRAWAL_AT_STORE"
	TransactionSubTypeEnumElectronicPayment                          TransactionSubTypeEnum = "ELECTRONIC_PAYMENT"
	TransactionSubTypeEnumAchDebit                                   TransactionSubTypeEnum = "ACH_DEBIT"
	TransactionSubTypeEnumAtmTellerDeposit                           TransactionSubTypeEnum = "ATM_TELLER_DEPOSIT"
	TransactionSubTypeEnumPosDebit                                   TransactionSubTypeEnum = "POS_DEBIT"
	TransactionSubTypeEnumBankAdjustment                             TransactionSubTypeEnum = "BANK_ADJUSTMENT"
	TransactionSubTypeEnumChargesFees                                TransactionSubTypeEnum = "CHARGES_FEES"
	TransactionSubTypeEnumInterest                                   TransactionSubTypeEnum = "INTEREST"
	TransactionSubTypeEnumDepositsCredits                            TransactionSubTypeEnum = "DEPOSITS_CREDITS"
	TransactionSubTypeEnumPayment                                    TransactionSubTypeEnum = "PAYMENT"
	TransactionSubTypeEnumPurchase                                   TransactionSubTypeEnum = "PURCHASE"
	TransactionSubTypeEnumRefund                                     TransactionSubTypeEnum = "REFUND"
	TransactionSubTypeEnumTransfer                                   TransactionSubTypeEnum = "TRANSFER"
	TransactionSubTypeEnumWithdrawal                                 TransactionSubTypeEnum = "WITHDRAWAL"
	TransactionSubTypeEnumOtherDeposits                              TransactionSubTypeEnum = "OTHER_DEPOSITS"
	TransactionSubTypeEnumOtherWithdrawals                           TransactionSubTypeEnum = "OTHER_WITHDRAWALS"
	TransactionSubTypeEnumAdjustment                                 TransactionSubTypeEnum = "ADJUSTMENT"
	TransactionSubTypeEnumFinanceCharge                              TransactionSubTypeEnum = "FINANCE_CHARGE"
	TransactionSubTypeEnumOtherChargesFees                           TransactionSubTypeEnum = "OTHER_CHARGES_FEES"
	TransactionSubTypeEnumAnnualFee                                  TransactionSubTypeEnum = "ANNUAL_FEE"
	TransactionSubTypeEnumDeposit                                    TransactionSubTypeEnum = "DEPOSIT"
	TransactionSubTypeEnumDirectDepositSalary                        TransactionSubTypeEnum = "DIRECT_DEPOSIT_SALARY"
	TransactionSubTypeEnumInvestmentIncomeCash                       TransactionSubTypeEnum = "INVESTMENT_INCOME_CASH"
	TransactionSubTypeEnumSsa                                        TransactionSubTypeEnum = "SSA"
	TransactionSubTypeEnumRewards                                    TransactionSubTypeEnum = "REWARDS"
	TransactionSubTypeEnumCheckDeposit                               TransactionSubTypeEnum = "CHECK_DEPOSIT"
	TransactionSubTypeEnumMobileRemoteDeposit                        TransactionSubTypeEnum = "MOBILE_REMOTE_DEPOSIT"
	TransactionSubTypeEnumTellerDeposit                              TransactionSubTypeEnum = "TELLER_DEPOSIT"
	TransactionSubTypeEnumTaxRefund                                  TransactionSubTypeEnum = "TAX_REFUND"
	TransactionSubTypeEnumCreditCardPayment                          TransactionSubTypeEnum = "CREDIT_CARD_PAYMENT"
	TransactionSubTypeEnumInsurancePayment                           TransactionSubTypeEnum = "INSURANCE_PAYMENT"
	TransactionSubTypeEnumUtilitiesPayment                           TransactionSubTypeEnum = "UTILITIES_PAYMENT"
	TransactionSubTypeEnumChildSupport                               TransactionSubTypeEnum = "CHILD_SUPPORT"
	TransactionSubTypeEnumLoan                                       TransactionSubTypeEnum = "LOAN"
	TransactionSubTypeEnumPersonalLoan                               TransactionSubTypeEnum = "PERSONAL_LOAN"
	TransactionSubTypeEnumStudentLoan                                TransactionSubTypeEnum = "STUDENT_LOAN"
	TransactionSubTypeEnumSalesTax                                   TransactionSubTypeEnum = "SALES_TAX"
	TransactionSubTypeEnumReimbursement                              TransactionSubTypeEnum = "REIMBURSEMENT"
	TransactionSubTypeEnumBalanceTransfer                            TransactionSubTypeEnum = "BALANCE_TRANSFER"
	TransactionSubTypeEnumWireTransfer                               TransactionSubTypeEnum = "WIRE_TRANSFER"
	TransactionSubTypeEnumOverdraftProtection                        TransactionSubTypeEnum = "OVERDRAFT_PROTECTION"
	TransactionSubTypeEnumDebit                                      TransactionSubTypeEnum = "DEBIT"
	TransactionSubTypeEnumCredit                                     TransactionSubTypeEnum = "CREDIT"
	TransactionSubTypeEnumNsfFees                                    TransactionSubTypeEnum = "NSF_FEES"
)

type Transaction struct {
	CONTAINER           *TransactionContainerEnum      `json:"CONTAINER,omitempty"`
	AccountID           *int64                         `json:"accountId,omitempty"`
	Amount              *Money                         `json:"amount,omitempty"`
	BaseType            *TransactionBaseTypeEnum       `json:"baseType,omitempty"`
	Category            *string                        `json:"category,omitempty"`
	CategoryID          *int64                         `json:"categoryId,omitempty"`
	CategorySource      *TransactionCategorySourceEnum `json:"categorySource,omitempty"`
	CategoryType        *TransactionCategoryTypeEnum   `json:"categoryType,omitempty"`
	CheckNumber         *string                        `json:"checkNumber,omitempty"`
	Commission          *Money                         `json:"commission,omitempty"`
	CreatedDate         *string                        `json:"createdDate,omitempty"`
	CusipNumber         *string                        `json:"cusipNumber,omitempty"`
	Date                *string                        `json:"date,omitempty"`
	Description         *Description                   `json:"description,omitempty"`
	DetailCategoryID    *int64                         `json:"detailCategoryId,omitempty"`
	HighLevelCategoryID *int64                         `json:"highLevelCategoryId,omitempty"`
	HoldingDescription  *string                        `json:"holdingDescription,omitempty"`
	ID                  *int64                         `json:"id,omitempty"`
	Interest            *Money                         `json:"interest,omitempty"`
	IsManual            *bool                          `json:"isManual,omitempty"`
	Isin                *string                        `json:"isin,omitempty"`
	LastUpdated         *string                        `json:"lastUpdated,omitempty"`
	Memo                *string                        `json:"memo,omitempty"`
	Merchant            *Merchant                      `json:"merchant,omitempty"`
	ParentCategoryID    *int64                         `json:"parentCategoryId,omitempty"`
	PostDate            *string                        `json:"postDate,omitempty"`
	Price               *Money                         `json:"price,omitempty"`
	Principal           *Money                         `json:"principal,omitempty"`
	Quantity            *float64                       `json:"quantity,omitempty"`
	RunningBalance      *Money                         `json:"runningBalance,omitempty"`
	Sedol               *string                        `json:"sedol,omitempty"`
	SettleDate          *string                        `json:"settleDate,omitempty"`
	SourceID            *string                        `json:"sourceId,omitempty"`
	SourceType          *TransactionSourceTypeEnum     `json:"sourceType,omitempty"`
	Status              *TransactionStatusEnum         `json:"status,omitempty"`
	SubType             *TransactionSubTypeEnum        `json:"subType,omitempty"`
	Symbol              *string                        `json:"symbol,omitempty"`
	TransactionDate     *string                        `json:"transactionDate,omitempty"`
	Type                *string                        `json:"type,omitempty"`
	Valoren             *string                        `json:"valoren,omitempty"`
}
