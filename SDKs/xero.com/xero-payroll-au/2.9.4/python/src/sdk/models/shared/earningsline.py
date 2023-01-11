import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import earningsratecalculationtype_enum as shared_earningsratecalculationtype_enum


@dataclass_json
@dataclasses.dataclass
class EarningsLine:
    earnings_rate_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRateID') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    annual_salary: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualSalary') }})
    calculation_type: Optional[shared_earningsratecalculationtype_enum.EarningsRateCalculationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    fixed_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedAmount') }})
    normal_number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NormalNumberOfUnits') }})
    number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    number_of_units_per_week: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnitsPerWeek') }})
    rate_per_unit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePerUnit') }})
    
