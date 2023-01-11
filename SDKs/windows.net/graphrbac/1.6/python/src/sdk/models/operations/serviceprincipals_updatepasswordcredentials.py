import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import passwordcredentialsupdateparameters as shared_passwordcredentialsupdateparameters
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsUpdatePasswordCredentialsPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdatePasswordCredentialsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared_passwordcredentialsupdateparameters.PasswordCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared_passwordcredentialsupdateparameters.PasswordCredentialsUpdateParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequest:
    path_params: ServicePrincipalsUpdatePasswordCredentialsPathParams = dataclasses.field()
    query_params: ServicePrincipalsUpdatePasswordCredentialsQueryParams = dataclasses.field()
    request: ServicePrincipalsUpdatePasswordCredentialsRequests = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsUpdatePasswordCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
