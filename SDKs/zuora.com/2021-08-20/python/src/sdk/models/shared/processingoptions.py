import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingoptions as shared_billingoptions


@dataclass_json
@dataclasses.dataclass
class ProcessingOptionsElectronicPaymentOptions:
    r"""ProcessingOptionsElectronicPaymentOptions
    Container for the electronic payment options.
    """
    
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    

@dataclass_json
@dataclasses.dataclass
class ProcessingOptions:
    r"""ProcessingOptions
    Invoice or Payment.
    """
    
    application_order: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationOrder') }})
    apply_credit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyCredit') }})
    apply_credit_balance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyCreditBalance') }})
    billing_options: Optional[shared_billingoptions.BillingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingOptions') }})
    collect_payment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectPayment') }})
    electronic_payment_options: Optional[ProcessingOptionsElectronicPaymentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electronicPaymentOptions') }})
    run_billing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runBilling') }})
    
