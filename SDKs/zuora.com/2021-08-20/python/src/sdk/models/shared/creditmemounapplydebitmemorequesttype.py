import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemounapplydebitmemoitemrequesttype as shared_creditmemounapplydebitmemoitemrequesttype


@dataclass_json
@dataclasses.dataclass
class CreditMemoUnapplyDebitMemoRequestType:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    debit_memo_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemoId') }})
    items: Optional[list[shared_creditmemounapplydebitmemoitemrequesttype.CreditMemoUnapplyDebitMemoItemRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
