import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdebitmemotype as shared_batchdebitmemotype


@dataclass_json
@dataclasses.dataclass
class PutBatchDebitMemosRequest:
    debit_memos: Optional[list[shared_batchdebitmemotype.BatchDebitMemoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemos') }})
    
