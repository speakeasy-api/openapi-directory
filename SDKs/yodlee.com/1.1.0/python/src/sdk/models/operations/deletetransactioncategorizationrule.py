import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DeleteTransactionCategorizationRulePathParams:
    rule_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransactionCategorizationRuleRequest:
    path_params: DeleteTransactionCategorizationRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTransactionCategorizationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
