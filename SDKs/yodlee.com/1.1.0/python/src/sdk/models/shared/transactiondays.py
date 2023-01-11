import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TransactionDaysFullAccountNumberFieldsEnum(str, Enum):
    PAYMENT_ACCOUNT_NUMBER = "paymentAccountNumber"
    UNMASKED_ACCOUNT_NUMBER = "unmaskedAccountNumber"


@dataclass_json
@dataclasses.dataclass
class TransactionDays:
    full_account_number_fields: Optional[list[TransactionDaysFullAccountNumberFieldsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullAccountNumberFields') }})
    number_of_transaction_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfTransactionDays') }})
    
