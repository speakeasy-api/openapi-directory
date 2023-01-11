import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactiondays as shared_transactiondays


@dataclass_json
@dataclasses.dataclass
class ContainerAttributes:
    bank: Optional[shared_transactiondays.TransactionDays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BANK') }})
    creditcard: Optional[shared_transactiondays.TransactionDays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CREDITCARD') }})
    insurance: Optional[shared_transactiondays.TransactionDays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('INSURANCE') }})
    investment: Optional[shared_transactiondays.TransactionDays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('INVESTMENT') }})
    loan: Optional[shared_transactiondays.TransactionDays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LOAN') }})
    
