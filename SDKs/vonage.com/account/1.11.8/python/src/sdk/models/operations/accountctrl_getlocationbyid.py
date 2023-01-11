import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import locationhalresponse as shared_locationhalresponse


@dataclasses.dataclass
class AccountCtrlGetLocationByIDPathParams:
    account_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    location_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountCtrlGetLocationByIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class AccountCtrlGetLocationByIDRequest:
    path_params: AccountCtrlGetLocationByIDPathParams = dataclasses.field()
    security: AccountCtrlGetLocationByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCtrlGetLocationByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_hal_response: Optional[shared_locationhalresponse.LocationHalResponse] = dataclasses.field(default=None)
    
