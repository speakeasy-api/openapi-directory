import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomObjectBulkDeleteFilterConditionOperatorEnum(str, Enum):
    EQ = "EQ"
    GT = "GT"
    LT = "LT"
    GE = "GE"
    LE = "LE"


@dataclass_json
@dataclasses.dataclass
class CustomObjectBulkDeleteFilterCondition:
    r"""CustomObjectBulkDeleteFilterCondition
    Condition evaluated on a single object field
    """
    
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    operator: CustomObjectBulkDeleteFilterConditionOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
