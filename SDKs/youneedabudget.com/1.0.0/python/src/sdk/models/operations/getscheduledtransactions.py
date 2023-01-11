import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import scheduledtransactionsresponse as shared_scheduledtransactionsresponse


@dataclasses.dataclass
class GetScheduledTransactionsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScheduledTransactionsQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScheduledTransactionsRequest:
    path_params: GetScheduledTransactionsPathParams = dataclasses.field()
    query_params: GetScheduledTransactionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetScheduledTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    scheduled_transactions_response: Optional[shared_scheduledtransactionsresponse.ScheduledTransactionsResponse] = dataclasses.field(default=None)
    
