import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BillingUpdateBillingPeriodAlignmentEnum(str, Enum):
    ALIGN_TO_CHARGE = "AlignToCharge"
    ALIGN_TO_SUBSCRIPTION_START = "AlignToSubscriptionStart"
    ALIGN_TO_TERM_START = "AlignToTermStart"


@dataclass_json
@dataclasses.dataclass
class BillingUpdate:
    billing_period_alignment: Optional[BillingUpdateBillingPeriodAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodAlignment') }})
    
