import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactioncategorizationrule as shared_transactioncategorizationrule


@dataclass_json
@dataclasses.dataclass
class TransactionCategorizationRuleResponse:
    txn_rules: Optional[list[shared_transactioncategorizationrule.TransactionCategorizationRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnRules') }})
    
