package shared

type DataExtractsAccountContainerEnum string

const (
	DataExtractsAccountCONTAINEREnumBank             DataExtractsAccountContainerEnum = "bank"
	DataExtractsAccountCONTAINEREnumCreditCard       DataExtractsAccountContainerEnum = "creditCard"
	DataExtractsAccountCONTAINEREnumInvestment       DataExtractsAccountContainerEnum = "investment"
	DataExtractsAccountCONTAINEREnumInsurance        DataExtractsAccountContainerEnum = "insurance"
	DataExtractsAccountCONTAINEREnumLoan             DataExtractsAccountContainerEnum = "loan"
	DataExtractsAccountCONTAINEREnumReward           DataExtractsAccountContainerEnum = "reward"
	DataExtractsAccountCONTAINEREnumRealEstate       DataExtractsAccountContainerEnum = "realEstate"
	DataExtractsAccountCONTAINEREnumOtherAssets      DataExtractsAccountContainerEnum = "otherAssets"
	DataExtractsAccountCONTAINEREnumOtherLiabilities DataExtractsAccountContainerEnum = "otherLiabilities"
)

type DataExtractsAccountAccountStatusEnum string

const (
	DataExtractsAccountAccountStatusEnumActive     DataExtractsAccountAccountStatusEnum = "ACTIVE"
	DataExtractsAccountAccountStatusEnumInactive   DataExtractsAccountAccountStatusEnum = "INACTIVE"
	DataExtractsAccountAccountStatusEnumToBeClosed DataExtractsAccountAccountStatusEnum = "TO_BE_CLOSED"
	DataExtractsAccountAccountStatusEnumClosed     DataExtractsAccountAccountStatusEnum = "CLOSED"
	DataExtractsAccountAccountStatusEnumDeleted    DataExtractsAccountAccountStatusEnum = "DELETED"
)

type DataExtractsAccountAggregationSourceEnum string

const (
	DataExtractsAccountAggregationSourceEnumSystem DataExtractsAccountAggregationSourceEnum = "SYSTEM"
	DataExtractsAccountAggregationSourceEnumUser   DataExtractsAccountAggregationSourceEnum = "USER"
)

type DataExtractsAccountClassificationEnum string

const (
	DataExtractsAccountClassificationEnumOther         DataExtractsAccountClassificationEnum = "OTHER"
	DataExtractsAccountClassificationEnumPersonal      DataExtractsAccountClassificationEnum = "PERSONAL"
	DataExtractsAccountClassificationEnumCorporate     DataExtractsAccountClassificationEnum = "CORPORATE"
	DataExtractsAccountClassificationEnumSmallBusiness DataExtractsAccountClassificationEnum = "SMALL_BUSINESS"
	DataExtractsAccountClassificationEnumTrust         DataExtractsAccountClassificationEnum = "TRUST"
	DataExtractsAccountClassificationEnumAddOnCard     DataExtractsAccountClassificationEnum = "ADD_ON_CARD"
	DataExtractsAccountClassificationEnumVirtualCard   DataExtractsAccountClassificationEnum = "VIRTUAL_CARD"
)

type DataExtractsAccountFrequencyEnum string

const (
	DataExtractsAccountFrequencyEnumDaily           DataExtractsAccountFrequencyEnum = "DAILY"
	DataExtractsAccountFrequencyEnumOneTime         DataExtractsAccountFrequencyEnum = "ONE_TIME"
	DataExtractsAccountFrequencyEnumWeekly          DataExtractsAccountFrequencyEnum = "WEEKLY"
	DataExtractsAccountFrequencyEnumEvery2Weeks     DataExtractsAccountFrequencyEnum = "EVERY_2_WEEKS"
	DataExtractsAccountFrequencyEnumSemiMonthly     DataExtractsAccountFrequencyEnum = "SEMI_MONTHLY"
	DataExtractsAccountFrequencyEnumMonthly         DataExtractsAccountFrequencyEnum = "MONTHLY"
	DataExtractsAccountFrequencyEnumQuarterly       DataExtractsAccountFrequencyEnum = "QUARTERLY"
	DataExtractsAccountFrequencyEnumSemiAnnually    DataExtractsAccountFrequencyEnum = "SEMI_ANNUALLY"
	DataExtractsAccountFrequencyEnumAnnually        DataExtractsAccountFrequencyEnum = "ANNUALLY"
	DataExtractsAccountFrequencyEnumEvery2Months    DataExtractsAccountFrequencyEnum = "EVERY_2_MONTHS"
	DataExtractsAccountFrequencyEnumEbill           DataExtractsAccountFrequencyEnum = "EBILL"
	DataExtractsAccountFrequencyEnumFirstDayMonthly DataExtractsAccountFrequencyEnum = "FIRST_DAY_MONTHLY"
	DataExtractsAccountFrequencyEnumLastDayMonthly  DataExtractsAccountFrequencyEnum = "LAST_DAY_MONTHLY"
	DataExtractsAccountFrequencyEnumEvery4Weeks     DataExtractsAccountFrequencyEnum = "EVERY_4_WEEKS"
	DataExtractsAccountFrequencyEnumUnknown         DataExtractsAccountFrequencyEnum = "UNKNOWN"
	DataExtractsAccountFrequencyEnumOther           DataExtractsAccountFrequencyEnum = "OTHER"
)

type DataExtractsAccountHomeInsuranceTypeEnum string

const (
	DataExtractsAccountHomeInsuranceTypeEnumHomeOwner DataExtractsAccountHomeInsuranceTypeEnum = "HOME_OWNER"
	DataExtractsAccountHomeInsuranceTypeEnumRental    DataExtractsAccountHomeInsuranceTypeEnum = "RENTAL"
	DataExtractsAccountHomeInsuranceTypeEnumRenter    DataExtractsAccountHomeInsuranceTypeEnum = "RENTER"
	DataExtractsAccountHomeInsuranceTypeEnumUnknown   DataExtractsAccountHomeInsuranceTypeEnum = "UNKNOWN"
	DataExtractsAccountHomeInsuranceTypeEnumOther     DataExtractsAccountHomeInsuranceTypeEnum = "OTHER"
)

type DataExtractsAccountInterestRateTypeEnum string

const (
	DataExtractsAccountInterestRateTypeEnumFixed    DataExtractsAccountInterestRateTypeEnum = "FIXED"
	DataExtractsAccountInterestRateTypeEnumVariable DataExtractsAccountInterestRateTypeEnum = "VARIABLE"
	DataExtractsAccountInterestRateTypeEnumUnknown  DataExtractsAccountInterestRateTypeEnum = "UNKNOWN"
	DataExtractsAccountInterestRateTypeEnumOther    DataExtractsAccountInterestRateTypeEnum = "OTHER"
)

type DataExtractsAccountLifeInsuranceTypeEnum string

const (
	DataExtractsAccountLifeInsuranceTypeEnumOther                  DataExtractsAccountLifeInsuranceTypeEnum = "OTHER"
	DataExtractsAccountLifeInsuranceTypeEnumTermLifeInsurance      DataExtractsAccountLifeInsuranceTypeEnum = "TERM_LIFE_INSURANCE"
	DataExtractsAccountLifeInsuranceTypeEnumUniversalLifeInsurance DataExtractsAccountLifeInsuranceTypeEnum = "UNIVERSAL_LIFE_INSURANCE"
	DataExtractsAccountLifeInsuranceTypeEnumWholeLifeInsurance     DataExtractsAccountLifeInsuranceTypeEnum = "WHOLE_LIFE_INSURANCE"
	DataExtractsAccountLifeInsuranceTypeEnumVariableLifeInsurance  DataExtractsAccountLifeInsuranceTypeEnum = "VARIABLE_LIFE_INSURANCE"
	DataExtractsAccountLifeInsuranceTypeEnumUlip                   DataExtractsAccountLifeInsuranceTypeEnum = "ULIP"
	DataExtractsAccountLifeInsuranceTypeEnumEndowment              DataExtractsAccountLifeInsuranceTypeEnum = "ENDOWMENT"
)

type DataExtractsAccountOauthMigrationStatusEnum string

const (
	DataExtractsAccountOauthMigrationStatusEnumInProgress   DataExtractsAccountOauthMigrationStatusEnum = "IN_PROGRESS"
	DataExtractsAccountOauthMigrationStatusEnumToBeMigrated DataExtractsAccountOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	DataExtractsAccountOauthMigrationStatusEnumCompleted    DataExtractsAccountOauthMigrationStatusEnum = "COMPLETED"
)

type DataExtractsAccountPolicyStatusEnum string

const (
	DataExtractsAccountPolicyStatusEnumActive   DataExtractsAccountPolicyStatusEnum = "ACTIVE"
	DataExtractsAccountPolicyStatusEnumInactive DataExtractsAccountPolicyStatusEnum = "INACTIVE"
	DataExtractsAccountPolicyStatusEnumOther    DataExtractsAccountPolicyStatusEnum = "OTHER"
)

type DataExtractsAccountRepaymentPlanTypeEnum string

const (
	DataExtractsAccountRepaymentPlanTypeEnumStandard            DataExtractsAccountRepaymentPlanTypeEnum = "STANDARD"
	DataExtractsAccountRepaymentPlanTypeEnumGraduated           DataExtractsAccountRepaymentPlanTypeEnum = "GRADUATED"
	DataExtractsAccountRepaymentPlanTypeEnumExtended            DataExtractsAccountRepaymentPlanTypeEnum = "EXTENDED"
	DataExtractsAccountRepaymentPlanTypeEnumIncomeBased         DataExtractsAccountRepaymentPlanTypeEnum = "INCOME_BASED"
	DataExtractsAccountRepaymentPlanTypeEnumIncomeContingent    DataExtractsAccountRepaymentPlanTypeEnum = "INCOME_CONTINGENT"
	DataExtractsAccountRepaymentPlanTypeEnumIncomeSensitive     DataExtractsAccountRepaymentPlanTypeEnum = "INCOME_SENSITIVE"
	DataExtractsAccountRepaymentPlanTypeEnumPayAsYouEarn        DataExtractsAccountRepaymentPlanTypeEnum = "PAY_AS_YOU_EARN"
	DataExtractsAccountRepaymentPlanTypeEnumRevisedPayAsYouEarn DataExtractsAccountRepaymentPlanTypeEnum = "REVISED_PAY_AS_YOU_EARN"
)

type DataExtractsAccountSourceAccountStatusEnum string

const (
	DataExtractsAccountSourceAccountStatusEnumInRepayment   DataExtractsAccountSourceAccountStatusEnum = "IN_REPAYMENT"
	DataExtractsAccountSourceAccountStatusEnumDefaulted     DataExtractsAccountSourceAccountStatusEnum = "DEFAULTED"
	DataExtractsAccountSourceAccountStatusEnumInSchool      DataExtractsAccountSourceAccountStatusEnum = "IN_SCHOOL"
	DataExtractsAccountSourceAccountStatusEnumInGracePeriod DataExtractsAccountSourceAccountStatusEnum = "IN_GRACE_PERIOD"
	DataExtractsAccountSourceAccountStatusEnumDelinquency   DataExtractsAccountSourceAccountStatusEnum = "DELINQUENCY"
	DataExtractsAccountSourceAccountStatusEnumDeferment     DataExtractsAccountSourceAccountStatusEnum = "DEFERMENT"
	DataExtractsAccountSourceAccountStatusEnumForbearance   DataExtractsAccountSourceAccountStatusEnum = "FORBEARANCE"
)

type DataExtractsAccountUserClassificationEnum string

const (
	DataExtractsAccountUserClassificationEnumBusiness DataExtractsAccountUserClassificationEnum = "BUSINESS"
	DataExtractsAccountUserClassificationEnumPersonal DataExtractsAccountUserClassificationEnum = "PERSONAL"
)

type DataExtractsAccountValuationTypeEnum string

const (
	DataExtractsAccountValuationTypeEnumSystem DataExtractsAccountValuationTypeEnum = "SYSTEM"
	DataExtractsAccountValuationTypeEnumManual DataExtractsAccountValuationTypeEnum = "MANUAL"
)

type DataExtractsAccount struct {
	FourHundredAndOnekLoan         *Money                                       `json:"401kLoan,omitempty"`
	CONTAINER                      *DataExtractsAccountContainerEnum            `json:"CONTAINER,omitempty"`
	AccountName                    *string                                      `json:"accountName,omitempty"`
	AccountNumber                  *string                                      `json:"accountNumber,omitempty"`
	AccountStatus                  *DataExtractsAccountAccountStatusEnum        `json:"accountStatus,omitempty"`
	AccountType                    *string                                      `json:"accountType,omitempty"`
	Address                        *AccountAddress                              `json:"address,omitempty"`
	AggregationSource              *DataExtractsAccountAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	AmountDue                      *Money                                       `json:"amountDue,omitempty"`
	AnnualPercentageYield          *float64                                     `json:"annualPercentageYield,omitempty"`
	AnnuityBalance                 *Money                                       `json:"annuityBalance,omitempty"`
	Apr                            *float64                                     `json:"apr,omitempty"`
	AssociatedProviderAccountID    []int64                                      `json:"associatedProviderAccountId,omitempty"`
	AvailableBalance               *Money                                       `json:"availableBalance,omitempty"`
	AvailableCash                  *Money                                       `json:"availableCash,omitempty"`
	AvailableCredit                *Money                                       `json:"availableCredit,omitempty"`
	Balance                        *Money                                       `json:"balance,omitempty"`
	BankTransferCode               []BankTransferCode                           `json:"bankTransferCode,omitempty"`
	Cash                           *Money                                       `json:"cash,omitempty"`
	CashApr                        *float64                                     `json:"cashApr,omitempty"`
	CashValue                      *Money                                       `json:"cashValue,omitempty"`
	Classification                 *DataExtractsAccountClassificationEnum       `json:"classification,omitempty"`
	Collateral                     *string                                      `json:"collateral,omitempty"`
	Coverage                       []Coverage                                   `json:"coverage,omitempty"`
	CreatedDate                    *string                                      `json:"createdDate,omitempty"`
	CurrentBalance                 *Money                                       `json:"currentBalance,omitempty"`
	CurrentLevel                   *string                                      `json:"currentLevel,omitempty"`
	Dataset                        []AccountDataset                             `json:"dataset,omitempty"`
	DeathBenefit                   *Money                                       `json:"deathBenefit,omitempty"`
	DerivedApr                     *float64                                     `json:"derivedApr,omitempty"`
	DisplayedName                  *string                                      `json:"displayedName,omitempty"`
	DueDate                        *string                                      `json:"dueDate,omitempty"`
	EnrollmentDate                 *string                                      `json:"enrollmentDate,omitempty"`
	EscrowBalance                  *Money                                       `json:"escrowBalance,omitempty"`
	EstimatedDate                  *string                                      `json:"estimatedDate,omitempty"`
	ExpirationDate                 *string                                      `json:"expirationDate,omitempty"`
	FaceAmount                     *Money                                       `json:"faceAmount,omitempty"`
	Frequency                      *DataExtractsAccountFrequencyEnum            `json:"frequency,omitempty"`
	Guarantor                      *string                                      `json:"guarantor,omitempty"`
	HomeInsuranceType              *DataExtractsAccountHomeInsuranceTypeEnum    `json:"homeInsuranceType,omitempty"`
	HomeValue                      *Money                                       `json:"homeValue,omitempty"`
	ID                             *int64                                       `json:"id,omitempty"`
	IncludeInNetWorth              *bool                                        `json:"includeInNetWorth,omitempty"`
	InterestPaidLastYear           *Money                                       `json:"interestPaidLastYear,omitempty"`
	InterestPaidYTD                *Money                                       `json:"interestPaidYTD,omitempty"`
	InterestRate                   *float64                                     `json:"interestRate,omitempty"`
	InterestRateType               *DataExtractsAccountInterestRateTypeEnum     `json:"interestRateType,omitempty"`
	IsAsset                        *bool                                        `json:"isAsset,omitempty"`
	IsDeleted                      *bool                                        `json:"isDeleted,omitempty"`
	IsManual                       *bool                                        `json:"isManual,omitempty"`
	LastEmployeeContributionAmount *Money                                       `json:"lastEmployeeContributionAmount,omitempty"`
	LastEmployeeContributionDate   *string                                      `json:"lastEmployeeContributionDate,omitempty"`
	LastPayment                    *Money                                       `json:"lastPayment,omitempty"`
	LastPaymentAmount              *Money                                       `json:"lastPaymentAmount,omitempty"`
	LastPaymentDate                *string                                      `json:"lastPaymentDate,omitempty"`
	LastUpdated                    *string                                      `json:"lastUpdated,omitempty"`
	Lender                         *string                                      `json:"lender,omitempty"`
	LifeInsuranceType              *DataExtractsAccountLifeInsuranceTypeEnum    `json:"lifeInsuranceType,omitempty"`
	LoanPayByDate                  *string                                      `json:"loanPayByDate,omitempty"`
	LoanPayoffAmount               *Money                                       `json:"loanPayoffAmount,omitempty"`
	LoanPayoffDetails              *LoanPayoffDetails                           `json:"loanPayoffDetails,omitempty"`
	MarginBalance                  *Money                                       `json:"marginBalance,omitempty"`
	MaturityAmount                 *Money                                       `json:"maturityAmount,omitempty"`
	MaturityDate                   *string                                      `json:"maturityDate,omitempty"`
	Memo                           *string                                      `json:"memo,omitempty"`
	MinimumAmountDue               *Money                                       `json:"minimumAmountDue,omitempty"`
	MoneyMarketBalance             *Money                                       `json:"moneyMarketBalance,omitempty"`
	NextLevel                      *string                                      `json:"nextLevel,omitempty"`
	Nickname                       *string                                      `json:"nickname,omitempty"`
	OauthMigrationStatus           *DataExtractsAccountOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	OriginalLoanAmount             *Money                                       `json:"originalLoanAmount,omitempty"`
	OriginationDate                *string                                      `json:"originationDate,omitempty"`
	OverDraftLimit                 *Money                                       `json:"overDraftLimit,omitempty"`
	PolicyEffectiveDate            *string                                      `json:"policyEffectiveDate,omitempty"`
	PolicyFromDate                 *string                                      `json:"policyFromDate,omitempty"`
	PolicyStatus                   *DataExtractsAccountPolicyStatusEnum         `json:"policyStatus,omitempty"`
	PolicyTerm                     *string                                      `json:"policyTerm,omitempty"`
	PolicyToDate                   *string                                      `json:"policyToDate,omitempty"`
	Premium                        *Money                                       `json:"premium,omitempty"`
	PremiumPaymentTerm             *string                                      `json:"premiumPaymentTerm,omitempty"`
	PrimaryRewardUnit              *string                                      `json:"primaryRewardUnit,omitempty"`
	PrincipalBalance               *Money                                       `json:"principalBalance,omitempty"`
	ProviderAccountID              *int64                                       `json:"providerAccountId,omitempty"`
	ProviderID                     *string                                      `json:"providerId,omitempty"`
	ProviderName                   *string                                      `json:"providerName,omitempty"`
	RecurringPayment               *Money                                       `json:"recurringPayment,omitempty"`
	RemainingBalance               *Money                                       `json:"remainingBalance,omitempty"`
	RepaymentPlanType              *DataExtractsAccountRepaymentPlanTypeEnum    `json:"repaymentPlanType,omitempty"`
	RewardBalance                  []RewardBalance                              `json:"rewardBalance,omitempty"`
	RunningBalance                 *Money                                       `json:"runningBalance,omitempty"`
	ShortBalance                   *Money                                       `json:"shortBalance,omitempty"`
	SourceAccountStatus            *DataExtractsAccountSourceAccountStatusEnum  `json:"sourceAccountStatus,omitempty"`
	SourceID                       *string                                      `json:"sourceId,omitempty"`
	Term                           *string                                      `json:"term,omitempty"`
	TotalCashLimit                 *Money                                       `json:"totalCashLimit,omitempty"`
	TotalCreditLimit               *Money                                       `json:"totalCreditLimit,omitempty"`
	TotalCreditLine                *Money                                       `json:"totalCreditLine,omitempty"`
	TotalUnvestedBalance           *Money                                       `json:"totalUnvestedBalance,omitempty"`
	TotalVestedBalance             *Money                                       `json:"totalVestedBalance,omitempty"`
	UserClassification             *DataExtractsAccountUserClassificationEnum   `json:"userClassification,omitempty"`
	ValuationType                  *DataExtractsAccountValuationTypeEnum        `json:"valuationType,omitempty"`
}
