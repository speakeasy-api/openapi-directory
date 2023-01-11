import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldoperation as shared_fieldoperation

class TransactionCategorizationRuleInfoSourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"


@dataclass_json
@dataclasses.dataclass
class TransactionCategorizationRuleInfo:
    category_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    rule_clause: list[shared_fieldoperation.FieldOperation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleClause') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    source: Optional[TransactionCategorizationRuleInfoSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
