import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import enduserroutehalresponse as shared_enduserroutehalresponse
from ..shared import validationerrorsresponse as shared_validationerrorsresponse


@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionsQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    location_id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    login_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'login_name', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phone_number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionsRequest:
    path_params: ExtensionCtrlGetAccountExtensionsPathParams = dataclasses.field()
    query_params: ExtensionCtrlGetAccountExtensionsQueryParams = dataclasses.field()
    security: ExtensionCtrlGetAccountExtensionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExtensionCtrlGetAccountExtensionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    end_user_route_hal_response: Optional[shared_enduserroutehalresponse.EndUserRouteHalResponse] = dataclasses.field(default=None)
    validation_errors_response: Optional[shared_validationerrorsresponse.ValidationErrorsResponse] = dataclasses.field(default=None)
    
