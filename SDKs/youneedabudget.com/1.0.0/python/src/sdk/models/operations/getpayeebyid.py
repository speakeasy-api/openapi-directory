import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payeeresponse as shared_payeeresponse


@dataclasses.dataclass
class GetPayeeByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeeByIDRequest:
    path_params: GetPayeeByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeeByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payee_response: Optional[shared_payeeresponse.PayeeResponse] = dataclasses.field(default=None)
    
