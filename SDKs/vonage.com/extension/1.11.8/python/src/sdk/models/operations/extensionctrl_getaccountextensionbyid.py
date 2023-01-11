import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import enduserroutehalresponse as shared_enduserroutehalresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionByIDPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    extension_number: float = dataclasses.field(metadata={'path_param': { 'field_name': 'extension_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionByIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionByIDRequest:
    path_params: ExtensionCtrlGetAccountExtensionByIDPathParams = dataclasses.field()
    security: ExtensionCtrlGetAccountExtensionByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    end_user_route_hal_response: Optional[shared_enduserroutehalresponse.EndUserRouteHalResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
