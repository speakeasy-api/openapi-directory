import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money
from ..shared import accountaddress as shared_accountaddress
from ..shared import banktransfercode as shared_banktransfercode
from ..shared import coverage as shared_coverage
from ..shared import accountdataset as shared_accountdataset
from ..shared import loanpayoffdetails as shared_loanpayoffdetails
from ..shared import rewardbalance as shared_rewardbalance

class DataExtractsAccountContainerEnum(str, Enum):
    BANK = "bank"
    CREDIT_CARD = "creditCard"
    INVESTMENT = "investment"
    INSURANCE = "insurance"
    LOAN = "loan"
    REWARD = "reward"
    REAL_ESTATE = "realEstate"
    OTHER_ASSETS = "otherAssets"
    OTHER_LIABILITIES = "otherLiabilities"

class DataExtractsAccountAccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    TO_BE_CLOSED = "TO_BE_CLOSED"
    CLOSED = "CLOSED"
    DELETED = "DELETED"

class DataExtractsAccountAggregationSourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class DataExtractsAccountClassificationEnum(str, Enum):
    OTHER = "OTHER"
    PERSONAL = "PERSONAL"
    CORPORATE = "CORPORATE"
    SMALL_BUSINESS = "SMALL_BUSINESS"
    TRUST = "TRUST"
    ADD_ON_CARD = "ADD_ON_CARD"
    VIRTUAL_CARD = "VIRTUAL_CARD"

class DataExtractsAccountFrequencyEnum(str, Enum):
    DAILY = "DAILY"
    ONE_TIME = "ONE_TIME"
    WEEKLY = "WEEKLY"
    EVERY_2_WEEKS = "EVERY_2_WEEKS"
    SEMI_MONTHLY = "SEMI_MONTHLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    SEMI_ANNUALLY = "SEMI_ANNUALLY"
    ANNUALLY = "ANNUALLY"
    EVERY_2_MONTHS = "EVERY_2_MONTHS"
    EBILL = "EBILL"
    FIRST_DAY_MONTHLY = "FIRST_DAY_MONTHLY"
    LAST_DAY_MONTHLY = "LAST_DAY_MONTHLY"
    EVERY_4_WEEKS = "EVERY_4_WEEKS"
    UNKNOWN = "UNKNOWN"
    OTHER = "OTHER"

class DataExtractsAccountHomeInsuranceTypeEnum(str, Enum):
    HOME_OWNER = "HOME_OWNER"
    RENTAL = "RENTAL"
    RENTER = "RENTER"
    UNKNOWN = "UNKNOWN"
    OTHER = "OTHER"

class DataExtractsAccountInterestRateTypeEnum(str, Enum):
    FIXED = "FIXED"
    VARIABLE = "VARIABLE"
    UNKNOWN = "UNKNOWN"
    OTHER = "OTHER"

class DataExtractsAccountLifeInsuranceTypeEnum(str, Enum):
    OTHER = "OTHER"
    TERM_LIFE_INSURANCE = "TERM_LIFE_INSURANCE"
    UNIVERSAL_LIFE_INSURANCE = "UNIVERSAL_LIFE_INSURANCE"
    WHOLE_LIFE_INSURANCE = "WHOLE_LIFE_INSURANCE"
    VARIABLE_LIFE_INSURANCE = "VARIABLE_LIFE_INSURANCE"
    ULIP = "ULIP"
    ENDOWMENT = "ENDOWMENT"

class DataExtractsAccountOauthMigrationStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    TO_BE_MIGRATED = "TO_BE_MIGRATED"
    COMPLETED = "COMPLETED"

class DataExtractsAccountPolicyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    OTHER = "OTHER"

class DataExtractsAccountRepaymentPlanTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    GRADUATED = "GRADUATED"
    EXTENDED = "EXTENDED"
    INCOME_BASED = "INCOME_BASED"
    INCOME_CONTINGENT = "INCOME_CONTINGENT"
    INCOME_SENSITIVE = "INCOME_SENSITIVE"
    PAY_AS_YOU_EARN = "PAY_AS_YOU_EARN"
    REVISED_PAY_AS_YOU_EARN = "REVISED_PAY_AS_YOU_EARN"

class DataExtractsAccountSourceAccountStatusEnum(str, Enum):
    IN_REPAYMENT = "IN_REPAYMENT"
    DEFAULTED = "DEFAULTED"
    IN_SCHOOL = "IN_SCHOOL"
    IN_GRACE_PERIOD = "IN_GRACE_PERIOD"
    DELINQUENCY = "DELINQUENCY"
    DEFERMENT = "DEFERMENT"
    FORBEARANCE = "FORBEARANCE"

class DataExtractsAccountUserClassificationEnum(str, Enum):
    BUSINESS = "BUSINESS"
    PERSONAL = "PERSONAL"

class DataExtractsAccountValuationTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    MANUAL = "MANUAL"


@dataclass_json
@dataclasses.dataclass
class DataExtractsAccount:
    four_hundred_and_onek_loan: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('401kLoan') }})
    container: Optional[DataExtractsAccountContainerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CONTAINER') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_status: Optional[DataExtractsAccountAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountStatus') }})
    account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    address: Optional[shared_accountaddress.AccountAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    aggregation_source: Optional[DataExtractsAccountAggregationSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationSource') }})
    amount_due: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountDue') }})
    annual_percentage_yield: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annualPercentageYield') }})
    annuity_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annuityBalance') }})
    apr: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apr') }})
    associated_provider_account_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedProviderAccountId') }})
    available_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableBalance') }})
    available_cash: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableCash') }})
    available_credit: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableCredit') }})
    balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    bank_transfer_code: Optional[list[shared_banktransfercode.BankTransferCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankTransferCode') }})
    cash: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cash') }})
    cash_apr: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashApr') }})
    cash_value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashValue') }})
    classification: Optional[DataExtractsAccountClassificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    collateral: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collateral') }})
    coverage: Optional[list[shared_coverage.Coverage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate') }})
    current_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentBalance') }})
    current_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLevel') }})
    dataset: Optional[list[shared_accountdataset.AccountDataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    death_benefit: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deathBenefit') }})
    derived_apr: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedApr') }})
    displayed_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayedName') }})
    due_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    enrollment_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentDate') }})
    escrow_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escrowBalance') }})
    estimated_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedDate') }})
    expiration_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    face_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceAmount') }})
    frequency: Optional[DataExtractsAccountFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    guarantor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guarantor') }})
    home_insurance_type: Optional[DataExtractsAccountHomeInsuranceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeInsuranceType') }})
    home_value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeValue') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    include_in_net_worth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInNetWorth') }})
    interest_paid_last_year: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interestPaidLastYear') }})
    interest_paid_ytd: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interestPaidYTD') }})
    interest_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interestRate') }})
    interest_rate_type: Optional[DataExtractsAccountInterestRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interestRateType') }})
    is_asset: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAsset') }})
    is_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleted') }})
    is_manual: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isManual') }})
    last_employee_contribution_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEmployeeContributionAmount') }})
    last_employee_contribution_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEmployeeContributionDate') }})
    last_payment: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPayment') }})
    last_payment_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPaymentAmount') }})
    last_payment_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPaymentDate') }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated') }})
    lender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lender') }})
    life_insurance_type: Optional[DataExtractsAccountLifeInsuranceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifeInsuranceType') }})
    loan_pay_by_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loanPayByDate') }})
    loan_payoff_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loanPayoffAmount') }})
    loan_payoff_details: Optional[shared_loanpayoffdetails.LoanPayoffDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loanPayoffDetails') }})
    margin_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginBalance') }})
    maturity_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maturityAmount') }})
    maturity_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maturityDate') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    minimum_amount_due: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAmountDue') }})
    money_market_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyMarketBalance') }})
    next_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextLevel') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    oauth_migration_status: Optional[DataExtractsAccountOauthMigrationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthMigrationStatus') }})
    original_loan_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalLoanAmount') }})
    origination_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originationDate') }})
    over_draft_limit: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overDraftLimit') }})
    policy_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyEffectiveDate') }})
    policy_from_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyFromDate') }})
    policy_status: Optional[DataExtractsAccountPolicyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyStatus') }})
    policy_term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTerm') }})
    policy_to_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyToDate') }})
    premium: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium') }})
    premium_payment_term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premiumPaymentTerm') }})
    primary_reward_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryRewardUnit') }})
    principal_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalBalance') }})
    provider_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccountId') }})
    provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    provider_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    recurring_payment: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringPayment') }})
    remaining_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingBalance') }})
    repayment_plan_type: Optional[DataExtractsAccountRepaymentPlanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repaymentPlanType') }})
    reward_balance: Optional[list[shared_rewardbalance.RewardBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewardBalance') }})
    running_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningBalance') }})
    short_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortBalance') }})
    source_account_status: Optional[DataExtractsAccountSourceAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountStatus') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_cash_limit: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCashLimit') }})
    total_credit_limit: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCreditLimit') }})
    total_credit_line: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCreditLine') }})
    total_unvested_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUnvestedBalance') }})
    total_vested_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalVestedBalance') }})
    user_classification: Optional[DataExtractsAccountUserClassificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userClassification') }})
    valuation_type: Optional[DataExtractsAccountValuationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuationType') }})
    
