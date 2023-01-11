import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class CreateOrRunTransactionCategorizationRulesQueryParams:
    action: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    rule_param: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ruleParam', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateOrRunTransactionCategorizationRulesRequest:
    query_params: CreateOrRunTransactionCategorizationRulesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateOrRunTransactionCategorizationRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
