import dataclasses
from typing import Optional
from ..shared import oauth2permissiongrantlistresult as shared_oauth2permissiongrantlistresult


@dataclasses.dataclass
class OAuth2PermissionGrantListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OAuth2PermissionGrantListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OAuth2PermissionGrantListRequest:
    path_params: OAuth2PermissionGrantListPathParams = dataclasses.field()
    query_params: OAuth2PermissionGrantListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OAuth2PermissionGrantListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    o_auth2_permission_grant_list_result: Optional[shared_oauth2permissiongrantlistresult.OAuth2PermissionGrantListResult] = dataclasses.field(default=None)
    
