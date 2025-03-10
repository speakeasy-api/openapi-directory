"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import deductionline as shared_deductionline
from ..shared import earningsline as shared_earningsline
from ..shared import leaveaccrualline as shared_leaveaccrualline
from ..shared import leaveearningsline as shared_leaveearningsline
from ..shared import reimbursementline as shared_reimbursementline
from ..shared import superannuationline as shared_superannuationline
from ..shared import taxline as shared_taxline
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PayslipLines:
    
    deduction_lines: Optional[list[shared_deductionline.DeductionLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeductionLines'), 'exclude': lambda f: f is None }})  
    earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EarningsLines'), 'exclude': lambda f: f is None }})  
    leave_accrual_lines: Optional[list[shared_leaveaccrualline.LeaveAccrualLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LeaveAccrualLines'), 'exclude': lambda f: f is None }})  
    leave_earnings_lines: Optional[list[shared_leaveearningsline.LeaveEarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LeaveEarningsLines'), 'exclude': lambda f: f is None }})  
    reimbursement_lines: Optional[list[shared_reimbursementline.ReimbursementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReimbursementLines'), 'exclude': lambda f: f is None }})  
    superannuation_lines: Optional[list[shared_superannuationline.SuperannuationLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SuperannuationLines'), 'exclude': lambda f: f is None }})  
    tax_lines: Optional[list[shared_taxline.TaxLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaxLines'), 'exclude': lambda f: f is None }})  
    timesheet_earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TimesheetEarningsLines'), 'exclude': lambda f: f is None }})  
    