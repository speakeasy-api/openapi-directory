import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import passwordcredentialsupdateparameters as shared_passwordcredentialsupdateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsUpdatePasswordCredentialsPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsUpdatePasswordCredentialsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared_passwordcredentialsupdateparameters.PasswordCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared_passwordcredentialsupdateparameters.PasswordCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ApplicationsUpdatePasswordCredentialsRequest:
    path_params: ApplicationsUpdatePasswordCredentialsPathParams = dataclasses.field()
    query_params: ApplicationsUpdatePasswordCredentialsQueryParams = dataclasses.field()
    request: ApplicationsUpdatePasswordCredentialsRequests = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsUpdatePasswordCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
