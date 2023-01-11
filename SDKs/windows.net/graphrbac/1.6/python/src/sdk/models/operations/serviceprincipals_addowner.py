import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsAddOwnerPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsAddOwnerQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsAddOwnerRequests:
    add_owner_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_owner_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ServicePrincipalsAddOwnerRequest:
    path_params: ServicePrincipalsAddOwnerPathParams = dataclasses.field()
    query_params: ServicePrincipalsAddOwnerQueryParams = dataclasses.field()
    request: ServicePrincipalsAddOwnerRequests = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsAddOwnerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
