import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money
from ..shared import description as shared_description
from ..shared import merchant as shared_merchant

class DataExtractsTransactionContainerEnum(str, Enum):
    BANK = "bank"
    CREDIT_CARD = "creditCard"
    INVESTMENT = "investment"
    INSURANCE = "insurance"
    LOAN = "loan"
    REWARD = "reward"
    REAL_ESTATE = "realEstate"
    OTHER_ASSETS = "otherAssets"
    OTHER_LIABILITIES = "otherLiabilities"

class DataExtractsTransactionBaseTypeEnum(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

class DataExtractsTransactionCategorySourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class DataExtractsTransactionCategoryTypeEnum(str, Enum):
    TRANSFER = "TRANSFER"
    DEFERRED_COMPENSATION = "DEFERRED_COMPENSATION"
    UNCATEGORIZE = "UNCATEGORIZE"
    INCOME = "INCOME"
    EXPENSE = "EXPENSE"

class DataExtractsTransactionSourceTypeEnum(str, Enum):
    AGGREGATED = "AGGREGATED"
    MANUAL = "MANUAL"

class DataExtractsTransactionStatusEnum(str, Enum):
    POSTED = "POSTED"
    PENDING = "PENDING"
    SCHEDULED = "SCHEDULED"
    FAILED = "FAILED"
    CLEARED = "CLEARED"

class DataExtractsTransactionSubTypeEnum(str, Enum):
    AUTH_HOLD = "AUTH_HOLD"
    AUTH_REQUEST = "AUTH_REQUEST"
    OVERDRAFT_CHARGE = "OVERDRAFT_CHARGE"
    CREDIT_ADJUSTMENT = "CREDIT_ADJUSTMENT"
    PIN_DEBIT = "PIN_DEBIT"
    BANK_DIRECT_DEPOSIT = "BANK_DIRECT_DEPOSIT"
    DIVIDEND_DEPOSIT = "DIVIDEND_DEPOSIT"
    INTEREST_SAVINGS = "INTEREST_SAVINGS"
    INTEREST_ADJUSTMENT = "INTEREST_ADJUSTMENT"
    ONLINE_PURCHASE = "ONLINE_PURCHASE"
    PURCHASED_WITH_CHECK = "PURCHASED_WITH_CHECK"
    RECURRING_BILLING = "RECURRING_BILLING"
    TAX_PAYMENT = "TAX_PAYMENT"
    PAYMENT_BY_CHECK = "PAYMENT_BY_CHECK"
    PAYMENT_PLAN = "PAYMENT_PLAN"
    FEE_REFUND = "FEE_REFUND"
    WIRE_TRANSFER_CHARGE = "WIRE_TRANSFER_CHARGE"
    ACCOUNT_TO_ACCOUNT_TRANSFER = "ACCOUNT_TO_ACCOUNT_TRANSFER"
    BANK_TO_BANK_TRANSACTION = "BANK_TO_BANK_TRANSACTION"
    BANK_TO_NON_BANK_ACCOUNT_TRANSFER = "BANK_TO_NON_BANK_ACCOUNT_TRANSFER"
    CASH_WITHDRAWAL_AT_FI = "CASH_WITHDRAWAL_AT_FI"
    ATM_CASH_WITHDRAWAL = "ATM_CASH_WITHDRAWAL"
    AUTH_PROCESSING = "AUTH_PROCESSING"
    AUTH_RELEASE = "AUTH_RELEASE"
    PRE_AUTH = "PRE_AUTH"
    AUTH_COMPLETE = "AUTH_COMPLETE"
    AUTH_VOID = "AUTH_VOID"
    BALANCE_ENQUIRY = "BALANCE_ENQUIRY"
    ACCOUNT_VERIFICATION = "ACCOUNT_VERIFICATION"
    PRE_AUTH_COMPLETION = "PRE_AUTH_COMPLETION"
    SERVICE_CHARGE = "SERVICE_CHARGE"
    SERVICE_CHARGE_FEE_REFUND = "SERVICE_CHARGE_FEE_REFUND"
    RETURNED_CHECK_CHARGE = "RETURNED_CHECK_CHARGE"
    RETURNED_CHECK_REIMBURSEMENT = "RETURNED_CHECK_REIMBURSEMENT"
    CASH_ADVANCE = "CASH_ADVANCE"
    BILL_PAY_CHARGE = "BILL_PAY_CHARGE"
    CHECK_IMAGE_SERVICE_CHARGE = "CHECK_IMAGE_SERVICE_CHARGE"
    OVERDRAFT_PROTECTION_CHARGE = "OVERDRAFT_PROTECTION_CHARGE"
    STOP_PAYMENT_CHARGE = "STOP_PAYMENT_CHARGE"
    CHECKS_ORDERING_CHARGE = "CHECKS_ORDERING_CHARGE"
    MONTHLY_MAINTENANCE_CHARGE = "MONTHLY_MAINTENANCE_CHARGE"
    DEBIT_CARD_FEE = "DEBIT_CARD_FEE"
    CONVENIENCE_FEE = "CONVENIENCE_FEE"
    PERSONAL_LOAN_CREDIT = "PERSONAL_LOAN_CREDIT"
    CREDIT_CARD_CREDIT = "CREDIT_CARD_CREDIT"
    AUTO_LOAN = "AUTO_LOAN"
    HOME_LOAN_MORTGAGE = "HOME_LOAN_MORTGAGE"
    SHORT_TERM_CREDIT = "SHORT_TERM_CREDIT"
    SIGNATURE_DEBIT = "SIGNATURE_DEBIT"
    CONTACT_LESS_DEBIT = "CONTACT_LESS_DEBIT"
    DEFERRED_DEPOSIT = "DEFERRED_DEPOSIT"
    DEFERRED_BILL_PAY = "DEFERRED_BILL_PAY"
    INSTALLMENT_PAYMENT = "INSTALLMENT_PAYMENT"
    RECURRING_SUBSCRIPTION_PAYMENT = "RECURRING_SUBSCRIPTION_PAYMENT"
    HOLD_CHECK_PAYMENT = "HOLD_CHECK_PAYMENT"
    CAPITAL_GAINS_DISTIBUTION = "CAPITAL_GAINS_DISTIBUTION"
    CG_LONG_TERM_DEPOSIT = "CG_LONG_TERM_DEPOSIT"
    OPEN_SALE_DEPOSIT = "OPEN_SALE_DEPOSIT"
    INTEREST_CHECK = "INTEREST__CHECK"
    PURCHASE_VOID = "PURCHASE_VOID"
    PURCHASE_WITH_CREDIT_CARD = "PURCHASE_WITH_CREDIT_CARD"
    PURCHASE_WITH_DEBIT_CARD = "PURCHASE_WITH_DEBIT_CARD"
    CHARGE_A_REPEAT_CUSTOMER = "CHARGE_A_REPEAT_CUSTOMER"
    DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT = "DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT"
    FEE_PAYMENT = "FEE_PAYMENT"
    FINANCE_CHARGE_REFUND = "FINANCE_CHARGE_REFUND"
    TRANSACTION_VOID = "TRANSACTION_VOID"
    FEE_VOID = "FEE_VOID"
    DEBIT_CARD_WITHDRAWAL_AT_STORE = "DEBIT_CARD_WITHDRAWAL_AT_STORE"
    ELECTRONIC_PAYMENT = "ELECTRONIC_PAYMENT"
    ACH_DEBIT = "ACH_DEBIT"
    ATM_TELLER_DEPOSIT = "ATM_TELLER_DEPOSIT"
    POS_DEBIT = "POS_DEBIT"
    BANK_ADJUSTMENT = "BANK_ADJUSTMENT"
    CHARGES_FEES = "CHARGES_FEES"
    INTEREST = "INTEREST"
    DEPOSITS_CREDITS = "DEPOSITS_CREDITS"
    PAYMENT = "PAYMENT"
    PURCHASE = "PURCHASE"
    REFUND = "REFUND"
    TRANSFER = "TRANSFER"
    WITHDRAWAL = "WITHDRAWAL"
    OTHER_DEPOSITS = "OTHER_DEPOSITS"
    OTHER_WITHDRAWALS = "OTHER_WITHDRAWALS"
    ADJUSTMENT = "ADJUSTMENT"
    FINANCE_CHARGE = "FINANCE_CHARGE"
    OTHER_CHARGES_FEES = "OTHER_CHARGES_FEES"
    ANNUAL_FEE = "ANNUAL_FEE"
    DEPOSIT = "DEPOSIT"
    DIRECT_DEPOSIT_SALARY = "DIRECT_DEPOSIT_SALARY"
    INVESTMENT_INCOME_CASH = "INVESTMENT_INCOME_CASH"
    SSA = "SSA"
    REWARDS = "REWARDS"
    CHECK_DEPOSIT = "CHECK_DEPOSIT"
    MOBILE_REMOTE_DEPOSIT = "MOBILE_REMOTE_DEPOSIT"
    TELLER_DEPOSIT = "TELLER_DEPOSIT"
    TAX_REFUND = "TAX_REFUND"
    CREDIT_CARD_PAYMENT = "CREDIT_CARD_PAYMENT"
    INSURANCE_PAYMENT = "INSURANCE_PAYMENT"
    UTILITIES_PAYMENT = "UTILITIES_PAYMENT"
    CHILD_SUPPORT = "CHILD_SUPPORT"
    LOAN = "LOAN"
    PERSONAL_LOAN = "PERSONAL_LOAN"
    STUDENT_LOAN = "STUDENT_LOAN"
    SALES_TAX = "SALES_TAX"
    REIMBURSEMENT = "REIMBURSEMENT"
    BALANCE_TRANSFER = "BALANCE_TRANSFER"
    WIRE_TRANSFER = "WIRE_TRANSFER"
    OVERDRAFT_PROTECTION = "OVERDRAFT_PROTECTION"
    DEBIT = "DEBIT"
    CREDIT = "CREDIT"
    NSF_FEES = "NSF_FEES"


@dataclass_json
@dataclasses.dataclass
class DataExtractsTransaction:
    container: Optional[DataExtractsTransactionContainerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CONTAINER') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    base_type: Optional[DataExtractsTransactionBaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseType') }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_source: Optional[DataExtractsTransactionCategorySourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySource') }})
    category_type: Optional[DataExtractsTransactionCategoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryType') }})
    check_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkNumber') }})
    commission: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commission') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate') }})
    cusip_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cusipNumber') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    description: Optional[shared_description.Description] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    detail_category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCategoryId') }})
    high_level_category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highLevelCategoryId') }})
    holding_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdingDescription') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interest: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interest') }})
    is_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleted') }})
    is_manual: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isManual') }})
    isin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isin') }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    merchant: Optional[shared_merchant.Merchant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    parent_category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategoryId') }})
    post_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postDate') }})
    price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    principal: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    running_balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningBalance') }})
    sedol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sedol') }})
    settle_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settleDate') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    source_type: Optional[DataExtractsTransactionSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    status: Optional[DataExtractsTransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_type: Optional[DataExtractsTransactionSubTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    valoren: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valoren') }})
    
