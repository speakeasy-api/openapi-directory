import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostDelayAuthorizeCaptureMitTransactionSourceEnum(str, Enum):
    C_UNSCHEDULED = "C_Unscheduled"
    M_RECURRING = "M_Recurring"
    M_UNSCHEDULED = "M_Unscheduled"


@dataclass_json
@dataclasses.dataclass
class PostDelayAuthorizeCapture:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    gateway_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayOrderId') }})
    mit_transaction_source: Optional[PostDelayAuthorizeCaptureMitTransactionSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitTransactionSource') }})
    soft_descriptor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softDescriptor') }})
    soft_descriptor_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softDescriptorPhone') }})
    
