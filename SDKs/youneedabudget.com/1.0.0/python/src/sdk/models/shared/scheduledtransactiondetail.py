import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledsubtransaction as shared_scheduledsubtransaction

class ScheduledTransactionDetailFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"
    NULL = "null"

class ScheduledTransactionDetailFrequencyEnum(str, Enum):
    NEVER = "never"
    DAILY = "daily"
    WEEKLY = "weekly"
    EVERY_OTHER_WEEK = "everyOtherWeek"
    TWICE_A_MONTH = "twiceAMonth"
    EVERY4_WEEKS = "every4Weeks"
    MONTHLY = "monthly"
    EVERY_OTHER_MONTH = "everyOtherMonth"
    EVERY3_MONTHS = "every3Months"
    EVERY4_MONTHS = "every4Months"
    TWICE_A_YEAR = "twiceAYear"
    YEARLY = "yearly"
    EVERY_OTHER_YEAR = "everyOtherYear"


@dataclass_json
@dataclasses.dataclass
class ScheduledTransactionDetail:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_name') }})
    amount: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_first: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_first'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_next: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_next'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    frequency: ScheduledTransactionDetailFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    subtransactions: list[shared_scheduledsubtransaction.ScheduledSubTransaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtransactions') }})
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_name') }})
    flag_color: Optional[ScheduledTransactionDetailFlagColorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_color') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    payee_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    transfer_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_account_id') }})
    
