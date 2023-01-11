import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsRemoveMemberPathParams:
    group_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupObjectId', 'style': 'simple', 'explode': False }})
    member_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsRemoveMemberQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsRemoveMemberRequest:
    path_params: GroupsRemoveMemberPathParams = dataclasses.field()
    query_params: GroupsRemoveMemberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GroupsRemoveMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
