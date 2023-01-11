import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EndConditionsEndDateConditionEnum(str, Enum):
    SUBSCRIPTION_END = "Subscription_End"
    FIXED_PERIOD = "Fixed_Period"
    SPECIFIC_END_DATE = "Specific_End_Date"

class EndConditionsUpToPeriodsTypeEnum(str, Enum):
    BILLING_PERIODS = "Billing_Periods"
    DAYS = "Days"
    WEEKS = "Weeks"
    MONTHS = "Months"
    YEARS = "Years"


@dataclass_json
@dataclasses.dataclass
class EndConditions:
    r"""EndConditions
    Specifies when a charge becomes inactive.
    
    """
    
    end_date_condition: Optional[EndConditionsEndDateConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateCondition') }})
    specific_end_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    up_to_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upToPeriods') }})
    up_to_periods_type: Optional[EndConditionsUpToPeriodsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upToPeriodsType') }})
    
