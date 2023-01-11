import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class SignedInUserGetPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SignedInUserGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SignedInUserGetRequest:
    path_params: SignedInUserGetPathParams = dataclasses.field()
    query_params: SignedInUserGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SignedInUserGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    user: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
