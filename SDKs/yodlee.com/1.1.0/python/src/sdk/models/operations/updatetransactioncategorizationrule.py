import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import transactioncategorizationrulerequest as shared_transactioncategorizationrulerequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class UpdateTransactionCategorizationRulePathParams:
    rule_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTransactionCategorizationRuleRequest:
    path_params: UpdateTransactionCategorizationRulePathParams = dataclasses.field()
    request: shared_transactioncategorizationrulerequest.TransactionCategorizationRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTransactionCategorizationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
