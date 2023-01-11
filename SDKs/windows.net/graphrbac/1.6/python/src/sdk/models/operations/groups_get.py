import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsGetPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsGetRequest:
    path_params: GroupsGetPathParams = dataclasses.field()
    query_params: GroupsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GroupsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_group: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
