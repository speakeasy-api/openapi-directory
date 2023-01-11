import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deductiontypecalculationtype_enum as shared_deductiontypecalculationtype_enum


@dataclass_json
@dataclasses.dataclass
class DeductionLine:
    calculation_type: shared_deductiontypecalculationtype_enum.DeductionTypeCalculationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    deduction_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypeID') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    number_of_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    
