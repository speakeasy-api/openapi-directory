import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class DeletedApplicationsHardDeletePathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletedApplicationsHardDeleteQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeletedApplicationsHardDeleteRequest:
    path_params: DeletedApplicationsHardDeletePathParams = dataclasses.field()
    query_params: DeletedApplicationsHardDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletedApplicationsHardDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
