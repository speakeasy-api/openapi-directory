import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import transactionresponse as shared_transactionresponse


@dataclasses.dataclass
class GetTransactionByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionByIDRequest:
    path_params: GetTransactionByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    transaction_response: Optional[shared_transactionresponse.TransactionResponse] = dataclasses.field(default=None)
    
