import dataclasses
from typing import Optional
from ..shared import transactioncategorizationruleresponse as shared_transactioncategorizationruleresponse


@dataclasses.dataclass
class GetTransactionCategorizationRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction_categorization_rule_response: Optional[shared_transactioncategorizationruleresponse.TransactionCategorizationRuleResponse] = dataclasses.field(default=None)
    
