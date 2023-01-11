import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class UsersDeletePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersDeleteQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = dataclasses.field()
    query_params: UsersDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
