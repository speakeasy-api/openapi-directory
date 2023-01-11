import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostReconcileRefundRequestActionEnum(str, Enum):
    SETTLE = "settle"
    REJECT = "reject"


@dataclass_json
@dataclasses.dataclass
class PostReconcileRefundRequest:
    action: Optional[PostReconcileRefundRequestActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    action_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionDate') }})
    gateway_reconciliation_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayReconciliationReason') }})
    gateway_reconciliation_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayReconciliationStatus') }})
    payout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    
