import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RewardBalanceBalanceTypeEnum(str, Enum):
    EXPIRING_BALANCE = "EXPIRING_BALANCE"
    BALANCE_TO_LEVEL = "BALANCE_TO_LEVEL"
    BALANCE_TO_REWARD = "BALANCE_TO_REWARD"
    BALANCE = "BALANCE"
    TOTAL_BALANCE = "TOTAL_BALANCE"


@dataclass_json
@dataclasses.dataclass
class RewardBalance:
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    balance_to_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceToLevel') }})
    balance_to_reward: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceToReward') }})
    balance_type: Optional[RewardBalanceBalanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiry_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate') }})
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
