import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleclause as shared_ruleclause


@dataclass_json
@dataclasses.dataclass
class TransactionCategorizationRule:
    category_level_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryLevelId') }})
    mem_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memId') }})
    rule_clauses: Optional[list[shared_ruleclause.RuleClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleClauses') }})
    rule_priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulePriority') }})
    transaction_categorisation_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCategorisationId') }})
    user_defined_rule_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedRuleId') }})
    
