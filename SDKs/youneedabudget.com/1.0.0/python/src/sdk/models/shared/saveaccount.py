import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SaveAccountTypeEnum(str, Enum):
    CHECKING = "checking"
    SAVINGS = "savings"
    CREDIT_CARD = "creditCard"
    CASH = "cash"
    LINE_OF_CREDIT = "lineOfCredit"
    OTHER_ASSET = "otherAsset"
    OTHER_LIABILITY = "otherLiability"


@dataclass_json
@dataclasses.dataclass
class SaveAccount:
    balance: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: SaveAccountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
