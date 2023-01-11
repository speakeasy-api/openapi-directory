import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CancelSubscriptionCancellationPolicyEnum(str, Enum):
    END_OF_CURRENT_TERM = "EndOfCurrentTerm"
    END_OF_LAST_INVOICE_PERIOD = "EndOfLastInvoicePeriod"
    SPECIFIC_DATE = "SpecificDate"


@dataclass_json
@dataclasses.dataclass
class CancelSubscription:
    r"""CancelSubscription
    Information about an order action of type `CancelSubscription`.
    
    """
    
    cancellation_policy: CancelSubscriptionCancellationPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationPolicy') }})
    cancellation_effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationEffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
