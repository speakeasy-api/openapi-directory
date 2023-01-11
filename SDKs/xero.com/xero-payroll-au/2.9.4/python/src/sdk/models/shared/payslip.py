import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
class Payslip:
    deduction_lines: Optional[list[shared_deductionline.DeductionLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    deductions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deductions') }})
    earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    leave_accrual_lines: Optional[list[shared_leaveaccrualline.LeaveAccrualLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveAccrualLines') }})
    leave_earnings_lines: Optional[list[shared_leaveearningsline.LeaveEarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveEarningsLines') }})
    net_pay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetPay') }})
    payslip_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipID') }})
    reimbursement_lines: Optional[list[shared_reimbursementline.ReimbursementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    reimbursements: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reimbursements') }})
    super: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Super') }})
    superannuation_lines: Optional[list[shared_superannuationline.SuperannuationLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperannuationLines') }})
    tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    tax_lines: Optional[list[shared_taxline.TaxLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxLines') }})
    timesheet_earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetEarningsLines') }})
    updated_date_utc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    wages: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wages') }})
    
