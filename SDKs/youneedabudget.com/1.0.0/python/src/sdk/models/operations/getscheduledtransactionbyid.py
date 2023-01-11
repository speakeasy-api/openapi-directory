import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import scheduledtransactionresponse as shared_scheduledtransactionresponse


@dataclasses.dataclass
class GetScheduledTransactionByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    scheduled_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scheduled_transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScheduledTransactionByIDRequest:
    path_params: GetScheduledTransactionByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetScheduledTransactionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    scheduled_transaction_response: Optional[shared_scheduledtransactionresponse.ScheduledTransactionResponse] = dataclasses.field(default=None)
    
