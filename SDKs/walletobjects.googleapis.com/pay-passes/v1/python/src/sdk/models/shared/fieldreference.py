import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FieldReferenceDateFormatEnum(str, Enum):
    DATE_FORMAT_UNSPECIFIED = "DATE_FORMAT_UNSPECIFIED"
    DATE_TIME_UPPER = "DATE_TIME"
    DATE_TIME_MIXED = "dateTime"
    DATE_ONLY_UPPER = "DATE_ONLY"
    DATE_ONLY_MIXED = "dateOnly"
    TIME_ONLY_UPPER = "TIME_ONLY"
    TIME_ONLY_MIXED = "timeOnly"
    DATE_TIME_YEAR_UPPER = "DATE_TIME_YEAR"
    DATE_TIME_YEAR_MIXED = "dateTimeYear"
    DATE_YEAR_UPPER = "DATE_YEAR"
    DATE_YEAR_MIXED = "dateYear"


@dataclass_json
@dataclasses.dataclass
class FieldReference:
    date_format: Optional[FieldReferenceDateFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormat') }})
    field_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    
