import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payrun as shared_payrun


@dataclass_json
@dataclasses.dataclass
class PayRuns:
    pay_runs: Optional[list[shared_payrun.PayRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRuns') }})
    
