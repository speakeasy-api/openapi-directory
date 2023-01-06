package shared

type AccountContainerEnum string

const (
	AccountCONTAINEREnumBank             AccountContainerEnum = "bank"
	AccountCONTAINEREnumCreditCard       AccountContainerEnum = "creditCard"
	AccountCONTAINEREnumInvestment       AccountContainerEnum = "investment"
	AccountCONTAINEREnumInsurance        AccountContainerEnum = "insurance"
	AccountCONTAINEREnumLoan             AccountContainerEnum = "loan"
	AccountCONTAINEREnumReward           AccountContainerEnum = "reward"
	AccountCONTAINEREnumRealEstate       AccountContainerEnum = "realEstate"
	AccountCONTAINEREnumOtherAssets      AccountContainerEnum = "otherAssets"
	AccountCONTAINEREnumOtherLiabilities AccountContainerEnum = "otherLiabilities"
)

type AccountAccountStatusEnum string

const (
	AccountAccountStatusEnumActive     AccountAccountStatusEnum = "ACTIVE"
	AccountAccountStatusEnumInactive   AccountAccountStatusEnum = "INACTIVE"
	AccountAccountStatusEnumToBeClosed AccountAccountStatusEnum = "TO_BE_CLOSED"
	AccountAccountStatusEnumClosed     AccountAccountStatusEnum = "CLOSED"
	AccountAccountStatusEnumDeleted    AccountAccountStatusEnum = "DELETED"
)

type AccountAggregationSourceEnum string

const (
	AccountAggregationSourceEnumSystem AccountAggregationSourceEnum = "SYSTEM"
	AccountAggregationSourceEnumUser   AccountAggregationSourceEnum = "USER"
)

type AccountClassificationEnum string

const (
	AccountClassificationEnumOther         AccountClassificationEnum = "OTHER"
	AccountClassificationEnumPersonal      AccountClassificationEnum = "PERSONAL"
	AccountClassificationEnumCorporate     AccountClassificationEnum = "CORPORATE"
	AccountClassificationEnumSmallBusiness AccountClassificationEnum = "SMALL_BUSINESS"
	AccountClassificationEnumTrust         AccountClassificationEnum = "TRUST"
	AccountClassificationEnumAddOnCard     AccountClassificationEnum = "ADD_ON_CARD"
	AccountClassificationEnumVirtualCard   AccountClassificationEnum = "VIRTUAL_CARD"
)

type AccountFrequencyEnum string

const (
	AccountFrequencyEnumDaily           AccountFrequencyEnum = "DAILY"
	AccountFrequencyEnumOneTime         AccountFrequencyEnum = "ONE_TIME"
	AccountFrequencyEnumWeekly          AccountFrequencyEnum = "WEEKLY"
	AccountFrequencyEnumEvery2Weeks     AccountFrequencyEnum = "EVERY_2_WEEKS"
	AccountFrequencyEnumSemiMonthly     AccountFrequencyEnum = "SEMI_MONTHLY"
	AccountFrequencyEnumMonthly         AccountFrequencyEnum = "MONTHLY"
	AccountFrequencyEnumQuarterly       AccountFrequencyEnum = "QUARTERLY"
	AccountFrequencyEnumSemiAnnually    AccountFrequencyEnum = "SEMI_ANNUALLY"
	AccountFrequencyEnumAnnually        AccountFrequencyEnum = "ANNUALLY"
	AccountFrequencyEnumEvery2Months    AccountFrequencyEnum = "EVERY_2_MONTHS"
	AccountFrequencyEnumEbill           AccountFrequencyEnum = "EBILL"
	AccountFrequencyEnumFirstDayMonthly AccountFrequencyEnum = "FIRST_DAY_MONTHLY"
	AccountFrequencyEnumLastDayMonthly  AccountFrequencyEnum = "LAST_DAY_MONTHLY"
	AccountFrequencyEnumEvery4Weeks     AccountFrequencyEnum = "EVERY_4_WEEKS"
	AccountFrequencyEnumUnknown         AccountFrequencyEnum = "UNKNOWN"
	AccountFrequencyEnumOther           AccountFrequencyEnum = "OTHER"
)

type AccountHomeInsuranceTypeEnum string

const (
	AccountHomeInsuranceTypeEnumHomeOwner AccountHomeInsuranceTypeEnum = "HOME_OWNER"
	AccountHomeInsuranceTypeEnumRental    AccountHomeInsuranceTypeEnum = "RENTAL"
	AccountHomeInsuranceTypeEnumRenter    AccountHomeInsuranceTypeEnum = "RENTER"
	AccountHomeInsuranceTypeEnumUnknown   AccountHomeInsuranceTypeEnum = "UNKNOWN"
	AccountHomeInsuranceTypeEnumOther     AccountHomeInsuranceTypeEnum = "OTHER"
)

type AccountInterestRateTypeEnum string

const (
	AccountInterestRateTypeEnumFixed    AccountInterestRateTypeEnum = "FIXED"
	AccountInterestRateTypeEnumVariable AccountInterestRateTypeEnum = "VARIABLE"
	AccountInterestRateTypeEnumUnknown  AccountInterestRateTypeEnum = "UNKNOWN"
	AccountInterestRateTypeEnumOther    AccountInterestRateTypeEnum = "OTHER"
)

type AccountLifeInsuranceTypeEnum string

const (
	AccountLifeInsuranceTypeEnumOther                  AccountLifeInsuranceTypeEnum = "OTHER"
	AccountLifeInsuranceTypeEnumTermLifeInsurance      AccountLifeInsuranceTypeEnum = "TERM_LIFE_INSURANCE"
	AccountLifeInsuranceTypeEnumUniversalLifeInsurance AccountLifeInsuranceTypeEnum = "UNIVERSAL_LIFE_INSURANCE"
	AccountLifeInsuranceTypeEnumWholeLifeInsurance     AccountLifeInsuranceTypeEnum = "WHOLE_LIFE_INSURANCE"
	AccountLifeInsuranceTypeEnumVariableLifeInsurance  AccountLifeInsuranceTypeEnum = "VARIABLE_LIFE_INSURANCE"
	AccountLifeInsuranceTypeEnumUlip                   AccountLifeInsuranceTypeEnum = "ULIP"
	AccountLifeInsuranceTypeEnumEndowment              AccountLifeInsuranceTypeEnum = "ENDOWMENT"
)

type AccountOauthMigrationStatusEnum string

const (
	AccountOauthMigrationStatusEnumInProgress   AccountOauthMigrationStatusEnum = "IN_PROGRESS"
	AccountOauthMigrationStatusEnumToBeMigrated AccountOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	AccountOauthMigrationStatusEnumCompleted    AccountOauthMigrationStatusEnum = "COMPLETED"
)

type AccountPolicyStatusEnum string

const (
	AccountPolicyStatusEnumActive   AccountPolicyStatusEnum = "ACTIVE"
	AccountPolicyStatusEnumInactive AccountPolicyStatusEnum = "INACTIVE"
	AccountPolicyStatusEnumOther    AccountPolicyStatusEnum = "OTHER"
)

type AccountRepaymentPlanTypeEnum string

const (
	AccountRepaymentPlanTypeEnumStandard            AccountRepaymentPlanTypeEnum = "STANDARD"
	AccountRepaymentPlanTypeEnumGraduated           AccountRepaymentPlanTypeEnum = "GRADUATED"
	AccountRepaymentPlanTypeEnumExtended            AccountRepaymentPlanTypeEnum = "EXTENDED"
	AccountRepaymentPlanTypeEnumIncomeBased         AccountRepaymentPlanTypeEnum = "INCOME_BASED"
	AccountRepaymentPlanTypeEnumIncomeContingent    AccountRepaymentPlanTypeEnum = "INCOME_CONTINGENT"
	AccountRepaymentPlanTypeEnumIncomeSensitive     AccountRepaymentPlanTypeEnum = "INCOME_SENSITIVE"
	AccountRepaymentPlanTypeEnumPayAsYouEarn        AccountRepaymentPlanTypeEnum = "PAY_AS_YOU_EARN"
	AccountRepaymentPlanTypeEnumRevisedPayAsYouEarn AccountRepaymentPlanTypeEnum = "REVISED_PAY_AS_YOU_EARN"
)

type AccountSourceAccountStatusEnum string

const (
	AccountSourceAccountStatusEnumInRepayment   AccountSourceAccountStatusEnum = "IN_REPAYMENT"
	AccountSourceAccountStatusEnumDefaulted     AccountSourceAccountStatusEnum = "DEFAULTED"
	AccountSourceAccountStatusEnumInSchool      AccountSourceAccountStatusEnum = "IN_SCHOOL"
	AccountSourceAccountStatusEnumInGracePeriod AccountSourceAccountStatusEnum = "IN_GRACE_PERIOD"
	AccountSourceAccountStatusEnumDelinquency   AccountSourceAccountStatusEnum = "DELINQUENCY"
	AccountSourceAccountStatusEnumDeferment     AccountSourceAccountStatusEnum = "DEFERMENT"
	AccountSourceAccountStatusEnumForbearance   AccountSourceAccountStatusEnum = "FORBEARANCE"
)

type AccountUserClassificationEnum string

const (
	AccountUserClassificationEnumBusiness AccountUserClassificationEnum = "BUSINESS"
	AccountUserClassificationEnumPersonal AccountUserClassificationEnum = "PERSONAL"
)

type AccountValuationTypeEnum string

const (
	AccountValuationTypeEnumSystem AccountValuationTypeEnum = "SYSTEM"
	AccountValuationTypeEnumManual AccountValuationTypeEnum = "MANUAL"
)

type Account struct {
	FourHundredAndOnekLoan         *Money                           `json:"401kLoan,omitempty"`
	CONTAINER                      *AccountContainerEnum            `json:"CONTAINER,omitempty"`
	AccountName                    *string                          `json:"accountName,omitempty"`
	AccountNumber                  *string                          `json:"accountNumber,omitempty"`
	AccountStatus                  *AccountAccountStatusEnum        `json:"accountStatus,omitempty"`
	AccountType                    *string                          `json:"accountType,omitempty"`
	Address                        *AccountAddress                  `json:"address,omitempty"`
	AggregationSource              *AccountAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	AmountDue                      *Money                           `json:"amountDue,omitempty"`
	AnnualPercentageYield          *float64                         `json:"annualPercentageYield,omitempty"`
	AnnuityBalance                 *Money                           `json:"annuityBalance,omitempty"`
	Apr                            *float64                         `json:"apr,omitempty"`
	AssociatedProviderAccountID    []int64                          `json:"associatedProviderAccountId,omitempty"`
	AutoRefresh                    *AutoRefresh                     `json:"autoRefresh,omitempty"`
	AvailableBalance               *Money                           `json:"availableBalance,omitempty"`
	AvailableCash                  *Money                           `json:"availableCash,omitempty"`
	AvailableCredit                *Money                           `json:"availableCredit,omitempty"`
	Balance                        *Money                           `json:"balance,omitempty"`
	BankTransferCode               []BankTransferCode               `json:"bankTransferCode,omitempty"`
	Cash                           *Money                           `json:"cash,omitempty"`
	CashApr                        *float64                         `json:"cashApr,omitempty"`
	CashValue                      *Money                           `json:"cashValue,omitempty"`
	Classification                 *AccountClassificationEnum       `json:"classification,omitempty"`
	Collateral                     *string                          `json:"collateral,omitempty"`
	Coverage                       []Coverage                       `json:"coverage,omitempty"`
	CreatedDate                    *string                          `json:"createdDate,omitempty"`
	CurrentBalance                 *Money                           `json:"currentBalance,omitempty"`
	CurrentLevel                   *string                          `json:"currentLevel,omitempty"`
	Dataset                        []AccountDataset                 `json:"dataset,omitempty"`
	DeathBenefit                   *Money                           `json:"deathBenefit,omitempty"`
	DerivedApr                     *float64                         `json:"derivedApr,omitempty"`
	DisplayedName                  *string                          `json:"displayedName,omitempty"`
	DueDate                        *string                          `json:"dueDate,omitempty"`
	EnrollmentDate                 *string                          `json:"enrollmentDate,omitempty"`
	EscrowBalance                  *Money                           `json:"escrowBalance,omitempty"`
	EstimatedDate                  *string                          `json:"estimatedDate,omitempty"`
	ExpirationDate                 *string                          `json:"expirationDate,omitempty"`
	FaceAmount                     *Money                           `json:"faceAmount,omitempty"`
	Frequency                      *AccountFrequencyEnum            `json:"frequency,omitempty"`
	FullAccountNumber              *string                          `json:"fullAccountNumber,omitempty"`
	FullAccountNumberList          *FullAccountNumberList           `json:"fullAccountNumberList,omitempty"`
	Guarantor                      *string                          `json:"guarantor,omitempty"`
	Holder                         []AccountHolder                  `json:"holder,omitempty"`
	HomeInsuranceType              *AccountHomeInsuranceTypeEnum    `json:"homeInsuranceType,omitempty"`
	HomeValue                      *Money                           `json:"homeValue,omitempty"`
	ID                             *int64                           `json:"id,omitempty"`
	IncludeInNetWorth              *bool                            `json:"includeInNetWorth,omitempty"`
	InterestPaidLastYear           *Money                           `json:"interestPaidLastYear,omitempty"`
	InterestPaidYTD                *Money                           `json:"interestPaidYTD,omitempty"`
	InterestRate                   *float64                         `json:"interestRate,omitempty"`
	InterestRateType               *AccountInterestRateTypeEnum     `json:"interestRateType,omitempty"`
	IsAsset                        *bool                            `json:"isAsset,omitempty"`
	IsManual                       *bool                            `json:"isManual,omitempty"`
	LastEmployeeContributionAmount *Money                           `json:"lastEmployeeContributionAmount,omitempty"`
	LastEmployeeContributionDate   *string                          `json:"lastEmployeeContributionDate,omitempty"`
	LastPayment                    *Money                           `json:"lastPayment,omitempty"`
	LastPaymentAmount              *Money                           `json:"lastPaymentAmount,omitempty"`
	LastPaymentDate                *string                          `json:"lastPaymentDate,omitempty"`
	LastUpdated                    *string                          `json:"lastUpdated,omitempty"`
	Lender                         *string                          `json:"lender,omitempty"`
	LifeInsuranceType              *AccountLifeInsuranceTypeEnum    `json:"lifeInsuranceType,omitempty"`
	LoanPayByDate                  *string                          `json:"loanPayByDate,omitempty"`
	LoanPayoffAmount               *Money                           `json:"loanPayoffAmount,omitempty"`
	LoanPayoffDetails              *LoanPayoffDetails               `json:"loanPayoffDetails,omitempty"`
	MarginBalance                  *Money                           `json:"marginBalance,omitempty"`
	MaturityAmount                 *Money                           `json:"maturityAmount,omitempty"`
	MaturityDate                   *string                          `json:"maturityDate,omitempty"`
	Memo                           *string                          `json:"memo,omitempty"`
	MinimumAmountDue               *Money                           `json:"minimumAmountDue,omitempty"`
	MoneyMarketBalance             *Money                           `json:"moneyMarketBalance,omitempty"`
	NextLevel                      *string                          `json:"nextLevel,omitempty"`
	Nickname                       *string                          `json:"nickname,omitempty"`
	OauthMigrationStatus           *AccountOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	OriginalLoanAmount             *Money                           `json:"originalLoanAmount,omitempty"`
	OriginationDate                *string                          `json:"originationDate,omitempty"`
	OverDraftLimit                 *Money                           `json:"overDraftLimit,omitempty"`
	PaymentProfile                 *PaymentProfile                  `json:"paymentProfile,omitempty"`
	PolicyEffectiveDate            *string                          `json:"policyEffectiveDate,omitempty"`
	PolicyFromDate                 *string                          `json:"policyFromDate,omitempty"`
	PolicyStatus                   *AccountPolicyStatusEnum         `json:"policyStatus,omitempty"`
	PolicyTerm                     *string                          `json:"policyTerm,omitempty"`
	PolicyToDate                   *string                          `json:"policyToDate,omitempty"`
	Premium                        *Money                           `json:"premium,omitempty"`
	PremiumPaymentTerm             *string                          `json:"premiumPaymentTerm,omitempty"`
	PrimaryRewardUnit              *string                          `json:"primaryRewardUnit,omitempty"`
	PrincipalBalance               *Money                           `json:"principalBalance,omitempty"`
	Profile                        *AccountProfile                  `json:"profile,omitempty"`
	ProviderAccountID              *int64                           `json:"providerAccountId,omitempty"`
	ProviderID                     *string                          `json:"providerId,omitempty"`
	ProviderName                   *string                          `json:"providerName,omitempty"`
	RecurringPayment               *Money                           `json:"recurringPayment,omitempty"`
	RemainingBalance               *Money                           `json:"remainingBalance,omitempty"`
	RepaymentPlanType              *AccountRepaymentPlanTypeEnum    `json:"repaymentPlanType,omitempty"`
	RewardBalance                  []RewardBalance                  `json:"rewardBalance,omitempty"`
	RunningBalance                 *Money                           `json:"runningBalance,omitempty"`
	ShortBalance                   *Money                           `json:"shortBalance,omitempty"`
	SourceAccountStatus            *AccountSourceAccountStatusEnum  `json:"sourceAccountStatus,omitempty"`
	SourceID                       *string                          `json:"sourceId,omitempty"`
	Term                           *string                          `json:"term,omitempty"`
	TotalCashLimit                 *Money                           `json:"totalCashLimit,omitempty"`
	TotalCreditLimit               *Money                           `json:"totalCreditLimit,omitempty"`
	TotalCreditLine                *Money                           `json:"totalCreditLine,omitempty"`
	TotalUnvestedBalance           *Money                           `json:"totalUnvestedBalance,omitempty"`
	TotalVestedBalance             *Money                           `json:"totalVestedBalance,omitempty"`
	UserClassification             *AccountUserClassificationEnum   `json:"userClassification,omitempty"`
	ValuationType                  *AccountValuationTypeEnum        `json:"valuationType,omitempty"`
}
