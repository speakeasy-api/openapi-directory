import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payeelocationresponse as shared_payeelocationresponse


@dataclasses.dataclass
class GetPayeeLocationByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payee_location_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeeLocationByIDRequest:
    path_params: GetPayeeLocationByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeeLocationByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payee_location_response: Optional[shared_payeelocationresponse.PayeeLocationResponse] = dataclasses.field(default=None)
    
