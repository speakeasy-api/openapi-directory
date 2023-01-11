import dataclasses
from typing import Optional
from ..shared import directoryobjectlistresult as shared_directoryobjectlistresult
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsListOwnersPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsListOwnersQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsListOwnersRequest:
    path_params: ServicePrincipalsListOwnersPathParams = dataclasses.field()
    query_params: ServicePrincipalsListOwnersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsListOwnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    directory_object_list_result: Optional[shared_directoryobjectlistresult.DirectoryObjectListResult] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
