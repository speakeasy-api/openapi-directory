import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FieldOperationFieldEnum(str, Enum):
    AMOUNT = "amount"
    DESCRIPTION = "description"

class FieldOperationOperationEnum(str, Enum):
    NUMBER_EQUALS = "numberEquals"
    NUMBER_LESS_THAN = "numberLessThan"
    NUMBER_LESS_THAN_EQUALS = "numberLessThanEquals"
    NUMBER_GREATER_THAN = "numberGreaterThan"
    NUMBER_GREATER_THAN_EQUALS = "numberGreaterThanEquals"
    STRING_EQUALS = "stringEquals"
    STRING_CONTAINS = "stringContains"


@dataclass_json
@dataclasses.dataclass
class FieldOperation:
    field: Optional[FieldOperationFieldEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    operation: Optional[FieldOperationOperationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
