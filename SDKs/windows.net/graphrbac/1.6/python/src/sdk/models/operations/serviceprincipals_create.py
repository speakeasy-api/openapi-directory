import dataclasses
from typing import Any,Optional
from ..shared import serviceprincipalcreateparameters as shared_serviceprincipalcreateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsCreatePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsCreateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsCreateRequests:
    service_principal_create_parameters: Optional[shared_serviceprincipalcreateparameters.ServicePrincipalCreateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_principal_create_parameters1: Optional[shared_serviceprincipalcreateparameters.ServicePrincipalCreateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ServicePrincipalsCreateRequest:
    path_params: ServicePrincipalsCreatePathParams = dataclasses.field()
    query_params: ServicePrincipalsCreateQueryParams = dataclasses.field()
    request: ServicePrincipalsCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    service_principal: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
