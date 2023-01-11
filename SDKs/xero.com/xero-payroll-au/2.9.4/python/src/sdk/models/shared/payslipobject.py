import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payslip as shared_payslip


@dataclass_json
@dataclasses.dataclass
class PayslipObject:
    payslip: Optional[shared_payslip.Payslip] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payslip') }})
    
