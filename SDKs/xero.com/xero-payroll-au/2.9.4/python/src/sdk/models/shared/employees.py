import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import employee as shared_employee


@dataclass_json
@dataclasses.dataclass
class Employees:
    employees: Optional[list[shared_employee.Employee]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employees') }})
    
