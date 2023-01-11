import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemoentityprefix as shared_creditmemoentityprefix
from ..shared import debitmemoentityprefix as shared_debitmemoentityprefix
from ..shared import invoiceentityprefix as shared_invoiceentityprefix
from ..shared import paymententityprefix as shared_paymententityprefix
from ..shared import refundentityprefix as shared_refundentityprefix


@dataclass_json
@dataclasses.dataclass
class PutSequenceSetRequest:
    credit_memo: Optional[shared_creditmemoentityprefix.CreditMemoEntityPrefix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemo') }})
    debit_memo: Optional[shared_debitmemoentityprefix.DebitMemoEntityPrefix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemo') }})
    invoice: Optional[shared_invoiceentityprefix.InvoiceEntityPrefix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment: Optional[shared_paymententityprefix.PaymentEntityPrefix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment') }})
    refund: Optional[shared_refundentityprefix.RefundEntityPrefix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund') }})
    
