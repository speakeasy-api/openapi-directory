import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class CoverageAmountLimitTypeEnum(str, Enum):
    IN_NETWORK = "IN_NETWORK"
    OUT_NETWORK = "OUT_NETWORK"

class CoverageAmountTypeEnum(str, Enum):
    DEDUCTIBLE = "DEDUCTIBLE"
    OUT_OF_POCKET = "OUT_OF_POCKET"
    ANNUAL_BENEFIT = "ANNUAL_BENEFIT"
    MAX_BENEFIT = "MAX_BENEFIT"
    COVERAGE_AMOUNT = "COVERAGE_AMOUNT"
    MONTHLY_BENEFIT = "MONTHLY_BENEFIT"
    OTHER = "OTHER"

class CoverageAmountUnitTypeEnum(str, Enum):
    PER_FAMILY = "PER_FAMILY"
    PER_MEMBER = "PER_MEMBER"


@dataclass_json
@dataclasses.dataclass
class CoverageAmount:
    cover: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover') }})
    limit_type: Optional[CoverageAmountLimitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitType') }})
    met: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('met') }})
    type: Optional[CoverageAmountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_type: Optional[CoverageAmountUnitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitType') }})
    
