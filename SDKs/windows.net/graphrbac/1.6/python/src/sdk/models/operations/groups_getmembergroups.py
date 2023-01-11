import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror
from ..shared import groupgetmembergroupsresult as shared_groupgetmembergroupsresult


@dataclasses.dataclass
class GroupsGetMemberGroupsPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsGetMemberGroupsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsGetMemberGroupsRequests:
    group_get_member_groups_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_get_member_groups_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class GroupsGetMemberGroupsRequest:
    path_params: GroupsGetMemberGroupsPathParams = dataclasses.field()
    query_params: GroupsGetMemberGroupsQueryParams = dataclasses.field()
    request: GroupsGetMemberGroupsRequests = dataclasses.field()
    

@dataclasses.dataclass
class GroupsGetMemberGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    group_get_member_groups_result: Optional[shared_groupgetmembergroupsresult.GroupGetMemberGroupsResult] = dataclasses.field(default=None)
    
