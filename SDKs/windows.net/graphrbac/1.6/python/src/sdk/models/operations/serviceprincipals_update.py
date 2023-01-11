import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import serviceprincipalupdateparameters as shared_serviceprincipalupdateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsUpdatePathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdateRequests:
    service_principal_update_parameters: Optional[shared_serviceprincipalupdateparameters.ServicePrincipalUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_principal_update_parameters1: Optional[shared_serviceprincipalupdateparameters.ServicePrincipalUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdateRequest:
    path_params: ServicePrincipalsUpdatePathParams = dataclasses.field()
    query_params: ServicePrincipalsUpdateQueryParams = dataclasses.field()
    request: ServicePrincipalsUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
