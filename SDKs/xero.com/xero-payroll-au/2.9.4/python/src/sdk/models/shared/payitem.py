import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deductiontype as shared_deductiontype
from ..shared import earningsrate as shared_earningsrate
from ..shared import leavetype as shared_leavetype
from ..shared import reimbursementtype as shared_reimbursementtype
from ..shared import deductiontype as shared_deductiontype
from ..shared import earningsrate as shared_earningsrate
from ..shared import leavetype as shared_leavetype
from ..shared import reimbursementtype as shared_reimbursementtype


@dataclass_json
@dataclasses.dataclass
class PayItem:
    deduction_types: Optional[list[shared_deductiontype.DeductionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypes') }})
    earnings_rates: Optional[list[shared_earningsrate.EarningsRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRates') }})
    leave_types: Optional[list[shared_leavetype.LeaveType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypes') }})
    reimbursement_types: Optional[list[shared_reimbursementtype.ReimbursementType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypes') }})
    

@dataclass_json
@dataclasses.dataclass
class PayItemInput:
    deduction_types: Optional[list[shared_deductiontype.DeductionTypeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypes') }})
    earnings_rates: Optional[list[shared_earningsrate.EarningsRateInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRates') }})
    leave_types: Optional[list[shared_leavetype.LeaveTypeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypes') }})
    reimbursement_types: Optional[list[shared_reimbursementtype.ReimbursementTypeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypes') }})
    
