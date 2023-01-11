import dataclasses
from typing import Optional
from ..shared import savetransactionswrapper as shared_savetransactionswrapper
from ..shared import errorresponse as shared_errorresponse
from ..shared import savetransactionsresponse as shared_savetransactionsresponse


@dataclasses.dataclass
class CreateTransactionPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTransactionRequest:
    path_params: CreateTransactionPathParams = dataclasses.field()
    request: shared_savetransactionswrapper.SaveTransactionsWrapper = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    save_transactions_response: Optional[shared_savetransactionsresponse.SaveTransactionsResponse] = dataclasses.field(default=None)
    
