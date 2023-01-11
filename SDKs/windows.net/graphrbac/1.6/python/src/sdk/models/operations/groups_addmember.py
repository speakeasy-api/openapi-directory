import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsAddMemberPathParams:
    group_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsAddMemberQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsAddMemberRequests:
    group_add_member_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_add_member_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class GroupsAddMemberRequest:
    path_params: GroupsAddMemberPathParams = dataclasses.field()
    query_params: GroupsAddMemberQueryParams = dataclasses.field()
    request: GroupsAddMemberRequests = dataclasses.field()
    

@dataclasses.dataclass
class GroupsAddMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
