import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentinvoiceapplicationitemunapplyrequesttype as shared_paymentinvoiceapplicationitemunapplyrequesttype


@dataclass_json
@dataclasses.dataclass
class PaymentInvoiceApplicationUnapplyRequestType:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    items: Optional[list[shared_paymentinvoiceapplicationitemunapplyrequesttype.PaymentInvoiceApplicationItemUnapplyRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
