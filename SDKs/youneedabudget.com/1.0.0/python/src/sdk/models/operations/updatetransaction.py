import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import savetransactionwrapper as shared_savetransactionwrapper
from ..shared import errorresponse as shared_errorresponse
from ..shared import transactionresponse as shared_transactionresponse


@dataclasses.dataclass
class UpdateTransactionPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = dataclasses.field()
    request: shared_savetransactionwrapper.SaveTransactionWrapper = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    transaction_response: Optional[shared_transactionresponse.TransactionResponse] = dataclasses.field(default=None)
    
