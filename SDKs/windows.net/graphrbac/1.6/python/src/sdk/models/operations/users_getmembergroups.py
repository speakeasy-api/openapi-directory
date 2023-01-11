import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror
from ..shared import usergetmembergroupsresult as shared_usergetmembergroupsresult


@dataclasses.dataclass
class UsersGetMemberGroupsPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetMemberGroupsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersGetMemberGroupsRequests:
    user_get_member_groups_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_get_member_groups_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UsersGetMemberGroupsRequest:
    path_params: UsersGetMemberGroupsPathParams = dataclasses.field()
    query_params: UsersGetMemberGroupsQueryParams = dataclasses.field()
    request: UsersGetMemberGroupsRequests = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetMemberGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    user_get_member_groups_result: Optional[shared_usergetmembergroupsresult.UserGetMemberGroupsResult] = dataclasses.field(default=None)
    
