import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timesheetstatus_enum as shared_timesheetstatus_enum
from ..shared import timesheetline as shared_timesheetline
from ..shared import validationerror as shared_validationerror
from ..shared import timesheetline as shared_timesheetline


@dataclass_json
@dataclasses.dataclass
class Timesheet:
    employee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    hours: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hours') }})
    status: Optional[shared_timesheetstatus_enum.TimesheetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timesheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetID') }})
    timesheet_lines: Optional[list[shared_timesheetline.TimesheetLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetLines') }})
    updated_date_utc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclasses.dataclass
class TimesheetInput:
    employee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    end_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    hours: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hours') }})
    status: Optional[shared_timesheetstatus_enum.TimesheetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timesheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetID') }})
    timesheet_lines: Optional[list[shared_timesheetline.TimesheetLineInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetLines') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
