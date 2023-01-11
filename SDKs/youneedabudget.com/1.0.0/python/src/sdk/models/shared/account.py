import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountTypeEnum(str, Enum):
    CHECKING = "checking"
    SAVINGS = "savings"
    CASH = "cash"
    CREDIT_CARD = "creditCard"
    LINE_OF_CREDIT = "lineOfCredit"
    OTHER_ASSET = "otherAsset"
    OTHER_LIABILITY = "otherLiability"
    PAY_PAL = "payPal"
    MERCHANT_ACCOUNT = "merchantAccount"
    INVESTMENT_ACCOUNT = "investmentAccount"
    MORTGAGE = "mortgage"


@dataclass_json
@dataclasses.dataclass
class Account:
    balance: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    cleared_balance: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleared_balance') }})
    closed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed') }})
    deleted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_budget: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_budget') }})
    transfer_payee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_payee_id') }})
    type: AccountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uncleared_balance: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncleared_balance') }})
    direct_import_in_error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_import_in_error') }})
    direct_import_linked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_import_linked') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
