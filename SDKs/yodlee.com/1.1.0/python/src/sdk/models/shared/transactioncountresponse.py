import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactioncount as shared_transactioncount


@dataclass_json
@dataclasses.dataclass
class TransactionCountResponse:
    transaction: Optional[shared_transactioncount.TransactionCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
