import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transaction as shared_transaction


@dataclass_json
@dataclasses.dataclass
class TransactionResponse:
    transaction: Optional[list[shared_transaction.Transaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
