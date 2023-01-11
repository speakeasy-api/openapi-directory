import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutOrderTriggerDatesResponseTypeReasons:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class PutOrderTriggerDatesResponseTypeStatusEnum(str, Enum):
    COMPLETED = "Completed"
    PENDING = "Pending"

class PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum(str, Enum):
    ACTIVE = "Active"
    PENDING_ACTIVATION = "Pending Activation"
    PENDING_ACCEPTANCE = "Pending Acceptance"


@dataclass_json
@dataclasses.dataclass
class PutOrderTriggerDatesResponseTypeSubscriptions:
    status: Optional[PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrderTriggerDatesResponseType:
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    process_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processId') }})
    reasons: Optional[list[PutOrderTriggerDatesResponseTypeReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    status: Optional[PutOrderTriggerDatesResponseTypeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscriptions: Optional[list[PutOrderTriggerDatesResponseTypeSubscriptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
