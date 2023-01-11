import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coverageamount as shared_coverageamount

class CoveragePlanTypeEnum(str, Enum):
    PPO = "PPO"
    HMO = "HMO"
    UNKNOWN = "UNKNOWN"

class CoverageTypeEnum(str, Enum):
    VISION = "VISION"
    DENTAL = "DENTAL"
    MEDICAL = "MEDICAL"
    HEALTH = "HEALTH"
    DEATH_COVER = "DEATH_COVER"
    TOTAL_PERMANENT_DISABILITY = "TOTAL_PERMANENT_DISABILITY"
    ACCIDENTAL_DEATH_COVER = "ACCIDENTAL_DEATH_COVER"
    INCOME_PROTECTION = "INCOME_PROTECTION"
    DEATH_TOTAL_PERMANENT_DISABILITY = "DEATH_TOTAL_PERMANENT_DISABILITY"
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class Coverage:
    amount: Optional[list[shared_coverageamount.CoverageAmount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    plan_type: Optional[CoveragePlanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planType') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    type: Optional[CoverageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
