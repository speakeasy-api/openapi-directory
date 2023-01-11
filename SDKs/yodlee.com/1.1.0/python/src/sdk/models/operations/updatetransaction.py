import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import transactionrequest as shared_transactionrequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class UpdateTransactionPathParams:
    transaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = dataclasses.field()
    request: shared_transactionrequest.TransactionRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
