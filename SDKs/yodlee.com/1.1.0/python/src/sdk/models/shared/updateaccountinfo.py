import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaddress as shared_accountaddress
from ..shared import money as shared_money

class UpdateAccountInfoAccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    TO_BE_CLOSED = "TO_BE_CLOSED"
    CLOSED = "CLOSED"
    DELETED = "DELETED"

class UpdateAccountInfoContainerEnum(str, Enum):
    BANK = "bank"
    CREDIT_CARD = "creditCard"
    INVESTMENT = "investment"
    INSURANCE = "insurance"
    LOAN = "loan"
    REWARD = "reward"
    REAL_ESTATE = "realEstate"
    OTHER_ASSETS = "otherAssets"
    OTHER_LIABILITIES = "otherLiabilities"

class UpdateAccountInfoFrequencyEnum(str, Enum):
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


@dataclass_json
@dataclasses.dataclass
class UpdateAccountInfo:
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_status: Optional[UpdateAccountInfoAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountStatus') }})
    address: Optional[shared_accountaddress.AccountAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount_due: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountDue') }})
    balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    container: Optional[UpdateAccountInfoContainerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    due_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    frequency: Optional[UpdateAccountInfoFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    home_value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeValue') }})
    include_in_net_worth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInNetWorth') }})
    is_ebill_enrolled: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEbillEnrolled') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
