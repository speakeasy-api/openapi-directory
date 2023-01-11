import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JobResultOrderLineItems:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class JobResultRamps:
    ramp_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rampNumber') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class JobResultReasons:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class JobResultStatusEnum(str, Enum):
    COMPLETED = "Completed"
    PENDING = "Pending"

class JobResultSubscriptionsStatusEnum(str, Enum):
    ACTIVE = "Active"
    PENDING_ACTIVATION = "Pending Activation"
    PENDING_ACCEPTANCE = "Pending Acceptance"
    CANCELLED = "Cancelled"


@dataclass_json
@dataclasses.dataclass
class JobResultSubscriptions:
    status: Optional[JobResultSubscriptionsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class JobResult:
    r"""JobResult
    **Note:** The schema of the `result` nested field is the same as the response body schema of either the [\"Create an order\"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the [\"Preview an order\"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
    
    The following schema for the nested `result` field is defined as the response body schema of \"Create an order\". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of \"Preview an order\". 
    
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    credit_memo_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemoIds') }})
    credit_memo_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemoNumbers') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    invoice_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceNumbers') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_line_items: Optional[list[JobResultOrderLineItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    paid_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paidAmount') }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    payment_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentNumber') }})
    process_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processId') }})
    ramps: Optional[list[JobResultRamps]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramps') }})
    reasons: Optional[list[JobResultReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    status: Optional[JobResultStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionIds') }})
    subscription_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumbers') }})
    subscriptions: Optional[list[JobResultSubscriptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
