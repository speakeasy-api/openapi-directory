import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProxyCreateInvoicePayment:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    invoice_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceId') }})
    payment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentId') }})
    
