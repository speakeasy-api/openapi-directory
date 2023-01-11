import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemounapplyinvoiceitemrequesttype as shared_creditmemounapplyinvoiceitemrequesttype


@dataclass_json
@dataclasses.dataclass
class CreditMemoUnapplyInvoiceRequestType:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    invoice_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    items: Optional[list[shared_creditmemounapplyinvoiceitemrequesttype.CreditMemoUnapplyInvoiceItemRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
