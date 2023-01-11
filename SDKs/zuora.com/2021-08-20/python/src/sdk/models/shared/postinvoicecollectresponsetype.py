import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postinvoicecollectcreditmemostype as shared_postinvoicecollectcreditmemostype
from ..shared import postinvoicecollectinvoicestype as shared_postinvoicecollectinvoicestype


@dataclass_json
@dataclasses.dataclass
class PostInvoiceCollectResponseType:
    amount_collected: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountCollected') }})
    credit_memos: Optional[list[shared_postinvoicecollectcreditmemostype.PostInvoiceCollectCreditMemosType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemos') }})
    invoices: Optional[list[shared_postinvoicecollectinvoicestype.PostInvoiceCollectInvoicesType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
