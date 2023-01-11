import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactioncategorizationruleinfo as shared_transactioncategorizationruleinfo


@dataclass_json
@dataclasses.dataclass
class TransactionCategorizationRuleRequest:
    rule: shared_transactioncategorizationruleinfo.TransactionCategorizationRuleInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
