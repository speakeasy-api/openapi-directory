import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsCreatePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsCreateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsCreateRequests:
    group_create_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_create_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class GroupsCreateRequest:
    path_params: GroupsCreatePathParams = dataclasses.field()
    query_params: GroupsCreateQueryParams = dataclasses.field()
    request: GroupsCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class GroupsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_group: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
