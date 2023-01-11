import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateOrderSuspendSuspendPeriodsTypeEnum(str, Enum):
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"
    YEAR = "Year"

class CreateOrderSuspendSuspendPolicyEnum(str, Enum):
    TODAY = "Today"
    END_OF_LAST_INVOICE_PERIOD = "EndOfLastInvoicePeriod"
    FIXED_PERIODS_FROM_TODAY = "FixedPeriodsFromToday"
    SPECIFIC_DATE = "SpecificDate"


@dataclass_json
@dataclasses.dataclass
class CreateOrderSuspend:
    r"""CreateOrderSuspend
    Information about an order action of type `Suspend`.
    
    """
    
    suspend_policy: CreateOrderSuspendSuspendPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPolicy') }})
    suspend_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPeriods') }})
    suspend_periods_type: Optional[CreateOrderSuspendSuspendPeriodsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPeriodsType') }})
    suspend_specific_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendSpecificDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
