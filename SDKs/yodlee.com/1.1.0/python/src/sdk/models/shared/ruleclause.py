import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RuleClauseFieldEnum(str, Enum):
    AMOUNT = "amount"
    DESCRIPTION = "description"

class RuleClauseOperationEnum(str, Enum):
    NUMBER_EQUALS = "numberEquals"
    NUMBER_LESS_THAN = "numberLessThan"
    NUMBER_LESS_THAN_EQUALS = "numberLessThanEquals"
    NUMBER_GREATER_THAN = "numberGreaterThan"
    NUMBER_GREATER_THAN_EQUALS = "numberGreaterThanEquals"
    STRING_EQUALS = "stringEquals"
    STRING_CONTAINS = "stringContains"


@dataclass_json
@dataclasses.dataclass
class RuleClause:
    field: Optional[RuleClauseFieldEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldValue') }})
    operation: Optional[RuleClauseOperationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    rule_clause_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleClauseId') }})
    user_defined_rule_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedRuleId') }})
    
