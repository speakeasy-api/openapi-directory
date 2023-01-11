import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsGetPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsGetRequest:
    path_params: ApplicationsGetPathParams = dataclasses.field()
    query_params: ApplicationsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
