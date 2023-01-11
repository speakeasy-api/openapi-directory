import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class UsersGetPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersGetRequest:
    path_params: UsersGetPathParams = dataclasses.field()
    query_params: UsersGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    user: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
