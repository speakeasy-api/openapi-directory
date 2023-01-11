import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payrollcalendar as shared_payrollcalendar


@dataclass_json
@dataclasses.dataclass
class PayrollCalendars:
    payroll_calendars: Optional[list[shared_payrollcalendar.PayrollCalendar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendars') }})
    
