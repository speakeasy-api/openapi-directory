import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetOrderSuspendSuspendPeriodsTypeEnum(str, Enum):
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"
    YEAR = "Year"

class GetOrderSuspendSuspendPolicyEnum(str, Enum):
    TODAY = "Today"
    END_OF_LAST_INVOICE_PERIOD = "EndOfLastInvoicePeriod"
    FIXED_PERIODS_FROM_TODAY = "FixedPeriodsFromToday"
    SPECIFIC_DATE = "SpecificDate"


@dataclass_json
@dataclasses.dataclass
class GetOrderSuspend:
    r"""GetOrderSuspend
    Information about an order action of type `Suspend`.
    
    """
    
    suspend_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suspend_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPeriods') }})
    suspend_periods_type: Optional[GetOrderSuspendSuspendPeriodsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPeriodsType') }})
    suspend_policy: Optional[GetOrderSuspendSuspendPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPolicy') }})
    suspend_specific_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendSpecificDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
