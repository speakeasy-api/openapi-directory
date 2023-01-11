import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostVoidAuthorize:
    gateway_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayOrderId') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    payment_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentGatewayId') }})
    
