import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsRemoveOwnerPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    owner_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownerObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsRemoveOwnerQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsRemoveOwnerRequest:
    path_params: ApplicationsRemoveOwnerPathParams = dataclasses.field()
    query_params: ApplicationsRemoveOwnerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsRemoveOwnerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
