import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateOrderResumeResumePeriodsTypeEnum(str, Enum):
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"
    YEAR = "Year"

class CreateOrderResumeResumePolicyEnum(str, Enum):
    TODAY = "Today"
    FIXED_PERIODS_FROM_SUSPEND_DATE = "FixedPeriodsFromSuspendDate"
    FIXED_PERIODS_FROM_TODAY = "FixedPeriodsFromToday"
    SPECIFIC_DATE = "SpecificDate"
    SUSPEND_DATE = "SuspendDate"


@dataclass_json
@dataclasses.dataclass
class CreateOrderResume:
    r"""CreateOrderResume
    Information about an order action of type `Resume`.
    
    """
    
    resume_policy: CreateOrderResumeResumePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumePolicy') }})
    extends_term: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendsTerm') }})
    resume_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumePeriods') }})
    resume_periods_type: Optional[CreateOrderResumeResumePeriodsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumePeriodsType') }})
    resume_specific_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumeSpecificDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
