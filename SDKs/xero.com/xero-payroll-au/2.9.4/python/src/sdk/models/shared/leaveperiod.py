import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaveperiodstatus_enum as shared_leaveperiodstatus_enum


@dataclass_json
@dataclasses.dataclass
class LeavePeriod:
    leave_period_status: Optional[shared_leaveperiodstatus_enum.LeavePeriodStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeavePeriodStatus') }})
    number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    pay_period_end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayPeriodEndDate') }})
    pay_period_start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayPeriodStartDate') }})
    
