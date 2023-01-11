import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentdebitmemoapplicationitemunapplyrequesttype as shared_paymentdebitmemoapplicationitemunapplyrequesttype


@dataclass_json
@dataclasses.dataclass
class PaymentDebitMemoApplicationUnapplyRequestType:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    debit_memo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemoId') }})
    items: Optional[list[shared_paymentdebitmemoapplicationitemunapplyrequesttype.PaymentDebitMemoApplicationItemUnapplyRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
