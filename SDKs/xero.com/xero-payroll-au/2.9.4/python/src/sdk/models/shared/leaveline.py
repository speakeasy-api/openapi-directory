import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leavelinecalculationtype_enum as shared_leavelinecalculationtype_enum
from ..shared import employmentterminationpaymenttype_enum as shared_employmentterminationpaymenttype_enum
from ..shared import entitlementfinalpaypayouttype_enum as shared_entitlementfinalpaypayouttype_enum


@dataclass_json
@dataclasses.dataclass
class LeaveLine:
    annual_number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualNumberOfUnits') }})
    calculation_type: Optional[shared_leavelinecalculationtype_enum.LeaveLineCalculationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    employment_termination_payment_type: Optional[shared_employmentterminationpaymenttype_enum.EmploymentTerminationPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    entitlement_final_pay_payout_type: Optional[shared_entitlementfinalpaypayouttype_enum.EntitlementFinalPayPayoutTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementFinalPayPayoutType') }})
    full_time_number_of_units_per_period: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullTimeNumberOfUnitsPerPeriod') }})
    include_superannuation_guarantee_contribution: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeSuperannuationGuaranteeContribution') }})
    leave_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    
