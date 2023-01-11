import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import applicationupdateparameters as shared_applicationupdateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsPatchPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsPatchQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsPatchRequests:
    application_update_parameters: Optional[shared_applicationupdateparameters.ApplicationUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_update_parameters1: Optional[shared_applicationupdateparameters.ApplicationUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ApplicationsPatchRequest:
    path_params: ApplicationsPatchPathParams = dataclasses.field()
    query_params: ApplicationsPatchQueryParams = dataclasses.field()
    request: ApplicationsPatchRequests = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsPatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
