import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LastTermPeriodTypeEnum(str, Enum):
    MONTH = "Month"
    YEAR = "Year"
    DAY = "Day"
    WEEK = "Week"

class LastTermTermTypeEnum(str, Enum):
    TERMED = "TERMED"
    EVERGREEN = "EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class LastTerm:
    r"""LastTerm
    The length of the period for the current subscription term.
    """
    
    term_type: LastTermTermTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termType') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    period_type: Optional[LastTermPeriodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
