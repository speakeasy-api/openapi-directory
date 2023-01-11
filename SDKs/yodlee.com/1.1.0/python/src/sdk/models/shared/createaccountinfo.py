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

class CreateAccountInfoFrequencyEnum(str, Enum):
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

class CreateAccountInfoValuationTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    MANUAL = "MANUAL"


@dataclass_json
@dataclasses.dataclass
class CreateAccountInfo:
    account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    address: Optional[shared_accountaddress.AccountAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount_due: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountDue') }})
    balance: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    due_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    frequency: Optional[CreateAccountInfoFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    home_value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeValue') }})
    include_in_net_worth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInNetWorth') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    valuation_type: Optional[CreateAccountInfoValuationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuationType') }})
    
