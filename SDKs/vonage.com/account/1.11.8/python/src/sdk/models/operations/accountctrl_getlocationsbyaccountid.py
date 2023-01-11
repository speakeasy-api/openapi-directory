import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import locationshalresponse as shared_locationshalresponse


@dataclasses.dataclass
class AccountCtrlGetLocationsByAccountIDPathParams:
    account_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountCtrlGetLocationsByAccountIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class AccountCtrlGetLocationsByAccountIDRequest:
    path_params: AccountCtrlGetLocationsByAccountIDPathParams = dataclasses.field()
    security: AccountCtrlGetLocationsByAccountIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCtrlGetLocationsByAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    locations_hal_response: Optional[shared_locationshalresponse.LocationsHalResponse] = dataclasses.field(default=None)
    
