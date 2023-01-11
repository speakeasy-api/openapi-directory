import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deductionline as shared_deductionline
from ..shared import earningsline as shared_earningsline
from ..shared import leaveaccrualline as shared_leaveaccrualline
from ..shared import leaveearningsline as shared_leaveearningsline
from ..shared import reimbursementline as shared_reimbursementline
from ..shared import superannuationline as shared_superannuationline
from ..shared import taxline as shared_taxline


@dataclass_json
@dataclasses.dataclass
class PayslipLines:
    deduction_lines: Optional[list[shared_deductionline.DeductionLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    leave_accrual_lines: Optional[list[shared_leaveaccrualline.LeaveAccrualLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveAccrualLines') }})
    leave_earnings_lines: Optional[list[shared_leaveearningsline.LeaveEarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveEarningsLines') }})
    reimbursement_lines: Optional[list[shared_reimbursementline.ReimbursementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    superannuation_lines: Optional[list[shared_superannuationline.SuperannuationLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperannuationLines') }})
    tax_lines: Optional[list[shared_taxline.TaxLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxLines') }})
    timesheet_earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetEarningsLines') }})
    
