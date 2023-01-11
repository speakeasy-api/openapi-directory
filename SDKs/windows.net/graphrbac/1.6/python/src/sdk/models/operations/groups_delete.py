import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsDeletePathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsDeleteQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsDeleteRequest:
    path_params: GroupsDeletePathParams = dataclasses.field()
    query_params: GroupsDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GroupsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
