import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FilterRuleParameterDefinitionValueTypeEnum(str, Enum):
    STRING = "STRING"
    BYTE = "BYTE"
    SHORT = "SHORT"
    CHARACTER = "CHARACTER"
    INTEGER = "INTEGER"
    LONG = "LONG"
    FLOAT = "FLOAT"
    DOUBLE = "DOUBLE"
    BOOLEAN = "BOOLEAN"
    BIG_INTEGER = "BIG_INTEGER"
    BIG_DECIMAL = "BIG_DECIMAL"
    LOCAL_DATE = "LOCAL_DATE"
    LOCAL_DATE_TIME = "LOCAL_DATE_TIME"
    TIMESTAMP = "TIMESTAMP"
    BYTE_ARRAY = "BYTE_ARRAY"
    SHORT_ARRAY = "SHORT_ARRAY"
    CHARACTER_ARRAY = "CHARACTER_ARRAY"
    INTEGER_ARRAY = "INTEGER_ARRAY"
    FLOAT_ARRAY = "FLOAT_ARRAY"
    DOUBLE_ARRAY = "DOUBLE_ARRAY"
    BOOLEAN_ARRAY = "BOOLEAN_ARRAY"
    STRING_ARRAY = "STRING_ARRAY"
    BIG_INTEGER_ARRAY = "BIG_INTEGER_ARRAY"
    BIG_DECIMAL_ARRAY = "BIG_DECIMAL_ARRAY"
    LOCAL_DATE_ARRAY = "LOCAL_DATE_ARRAY"
    LOCAL_DATE_TIME_ARRAY = "LOCAL_DATE_TIME_ARRAY"
    TIMESTAMP_ARRAY = "TIMESTAMP_ARRAY"


@dataclass_json
@dataclasses.dataclass
class FilterRuleParameterDefinition:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    value_type: Optional[FilterRuleParameterDefinitionValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
