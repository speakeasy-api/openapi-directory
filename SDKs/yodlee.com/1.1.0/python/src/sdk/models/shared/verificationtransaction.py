import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class VerificationTransactionBaseTypeEnum(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"


@dataclass_json
@dataclasses.dataclass
class VerificationTransaction:
    amount: shared_money.Money = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    base_type: VerificationTransactionBaseTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseType') }})
    
