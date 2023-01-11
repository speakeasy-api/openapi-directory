import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payeelocationsresponse as shared_payeelocationsresponse


@dataclasses.dataclass
class GetPayeeLocationsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeeLocationsRequest:
    path_params: GetPayeeLocationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeeLocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payee_locations_response: Optional[shared_payeelocationsresponse.PayeeLocationsResponse] = dataclasses.field(default=None)
    
