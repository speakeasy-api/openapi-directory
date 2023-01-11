import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import serviceprincipalobjectresult as shared_serviceprincipalobjectresult


@dataclasses.dataclass
class ApplicationsGetServicePrincipalsIDByAppIDPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationID', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsGetServicePrincipalsIDByAppIDQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsGetServicePrincipalsIDByAppIDRequest:
    path_params: ApplicationsGetServicePrincipalsIDByAppIDPathParams = dataclasses.field()
    query_params: ApplicationsGetServicePrincipalsIDByAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsGetServicePrincipalsIDByAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    service_principal_object_result: Optional[shared_serviceprincipalobjectresult.ServicePrincipalObjectResult] = dataclasses.field(default=None)
    
