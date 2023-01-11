import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DebitMemoCollectRequestPayment:
    r"""DebitMemoCollectRequestPayment
    Some detail info that would be used to processed an electronic payment.
    The info would only effect when `collect` set to `true`.
    
    """
    
    gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    

@dataclass_json
@dataclasses.dataclass
class DebitMemoCollectRequest:
    application_order: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationOrder') }})
    apply_credit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyCredit') }})
    collect: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collect') }})
    payment: Optional[DebitMemoCollectRequestPayment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment') }})
    
