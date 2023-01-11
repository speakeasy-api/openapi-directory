import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatetransactionswrapper as shared_updatetransactionswrapper
from ..shared import errorresponse as shared_errorresponse
from ..shared import savetransactionsresponse as shared_savetransactionsresponse


@dataclasses.dataclass
class UpdateTransactionsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTransactionsRequest:
    path_params: UpdateTransactionsPathParams = dataclasses.field()
    request: shared_updatetransactionswrapper.UpdateTransactionsWrapper = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    save_transactions_response: Optional[shared_savetransactionsresponse.SaveTransactionsResponse] = dataclasses.field(default=None)
    
