import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class DeletedApplicationsRestorePathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletedApplicationsRestoreQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeletedApplicationsRestoreRequest:
    path_params: DeletedApplicationsRestorePathParams = dataclasses.field()
    query_params: DeletedApplicationsRestoreQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletedApplicationsRestoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
