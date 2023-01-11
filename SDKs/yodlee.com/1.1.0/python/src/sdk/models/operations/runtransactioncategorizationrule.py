import dataclasses
from typing import Optional
from enum import Enum
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class RunTransactionCategorizationRulePathParams:
    rule_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class RunTransactionCategorizationRuleActionEnum(str, Enum):
    RUN = "run"


@dataclasses.dataclass
class RunTransactionCategorizationRuleQueryParams:
    action: RunTransactionCategorizationRuleActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RunTransactionCategorizationRuleRequest:
    path_params: RunTransactionCategorizationRulePathParams = dataclasses.field()
    query_params: RunTransactionCategorizationRuleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RunTransactionCategorizationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
