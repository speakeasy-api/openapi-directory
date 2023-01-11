import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaveapplication as shared_leaveapplication


@dataclass_json
@dataclasses.dataclass
class LeaveApplications:
    leave_applications: Optional[list[shared_leaveapplication.LeaveApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveApplications') }})
    
