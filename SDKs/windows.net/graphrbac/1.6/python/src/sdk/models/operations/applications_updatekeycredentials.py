import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import keycredentialsupdateparameters as shared_keycredentialsupdateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsUpdateKeyCredentialsPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsUpdateKeyCredentialsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsUpdateKeyCredentialsRequests:
    key_credentials_update_parameters: Optional[shared_keycredentialsupdateparameters.KeyCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    key_credentials_update_parameters1: Optional[shared_keycredentialsupdateparameters.KeyCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ApplicationsUpdateKeyCredentialsRequest:
    path_params: ApplicationsUpdateKeyCredentialsPathParams = dataclasses.field()
    query_params: ApplicationsUpdateKeyCredentialsQueryParams = dataclasses.field()
    request: ApplicationsUpdateKeyCredentialsRequests = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsUpdateKeyCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
