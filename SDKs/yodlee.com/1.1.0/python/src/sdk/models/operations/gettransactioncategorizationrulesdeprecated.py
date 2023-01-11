import dataclasses
from typing import Optional
from ..shared import transactioncategorizationrule as shared_transactioncategorizationrule


@dataclasses.dataclass
class GetTransactionCategorizationRulesDeprecatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction_categorization_rules: Optional[list[shared_transactioncategorizationrule.TransactionCategorizationRule]] = dataclasses.field(default=None)
    
