import dataclasses
from typing import Any,Optional
from ..shared import applicationcreateparameters as shared_applicationcreateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsCreatePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsCreateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsCreateRequests:
    application_create_parameters: Optional[shared_applicationcreateparameters.ApplicationCreateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_create_parameters1: Optional[shared_applicationcreateparameters.ApplicationCreateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ApplicationsCreateRequest:
    path_params: ApplicationsCreatePathParams = dataclasses.field()
    query_params: ApplicationsCreateQueryParams = dataclasses.field()
    request: ApplicationsCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
