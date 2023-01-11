import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import serviceprincipallistresult as shared_serviceprincipallistresult


@dataclasses.dataclass
class ServicePrincipalsListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsListRequest:
    path_params: ServicePrincipalsListPathParams = dataclasses.field()
    query_params: ServicePrincipalsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    service_principal_list_result: Optional[shared_serviceprincipallistresult.ServicePrincipalListResult] = dataclasses.field(default=None)
    
