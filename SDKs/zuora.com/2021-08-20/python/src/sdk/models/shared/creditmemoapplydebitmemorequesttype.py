import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemoapplydebitmemoitemrequesttype as shared_creditmemoapplydebitmemoitemrequesttype


@dataclass_json
@dataclasses.dataclass
class CreditMemoApplyDebitMemoRequestType:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    debit_memo_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemoId') }})
    items: Optional[list[shared_creditmemoapplydebitmemoitemrequesttype.CreditMemoApplyDebitMemoItemRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
