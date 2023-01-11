import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OAuth2PermissionGrantCreatePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OAuth2PermissionGrantCreateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OAuth2PermissionGrantCreateRequest:
    path_params: OAuth2PermissionGrantCreatePathParams = dataclasses.field()
    query_params: OAuth2PermissionGrantCreateQueryParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OAuth2PermissionGrantCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    o_auth2_permission_grant: Optional[Any] = dataclasses.field(default=None)
    
