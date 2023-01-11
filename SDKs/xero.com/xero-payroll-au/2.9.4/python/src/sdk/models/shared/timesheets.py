import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timesheet as shared_timesheet


@dataclass_json
@dataclasses.dataclass
class Timesheets:
    timesheets: Optional[list[shared_timesheet.Timesheet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timesheets') }})
    
