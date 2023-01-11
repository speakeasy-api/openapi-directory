import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RenewalTermPeriodTypeEnum(str, Enum):
    MONTH = "Month"
    YEAR = "Year"
    DAY = "Day"
    WEEK = "Week"


@dataclass_json
@dataclasses.dataclass
class RenewalTerm:
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    period_type: Optional[RenewalTermPeriodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    
