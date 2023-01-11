import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deductionline as shared_deductionline
from ..shared import earningsline as shared_earningsline
from ..shared import leaveline as shared_leaveline
from ..shared import reimbursementline as shared_reimbursementline
from ..shared import superline as shared_superline


@dataclass_json
@dataclasses.dataclass
class OpeningBalances:
    deduction_lines: Optional[list[shared_deductionline.DeductionLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionLines') }})
    earnings_lines: Optional[list[shared_earningsline.EarningsLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsLines') }})
    leave_lines: Optional[list[shared_leaveline.LeaveLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    opening_balance_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalanceDate') }})
    reimbursement_lines: Optional[list[shared_reimbursementline.ReimbursementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementLines') }})
    super_lines: Optional[list[shared_superline.SuperLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperLines') }})
    tax: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tax') }})
    
