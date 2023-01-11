import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import passwordcredentiallistresult as shared_passwordcredentiallistresult


@dataclasses.dataclass
class ApplicationsListPasswordCredentialsPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsListPasswordCredentialsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsListPasswordCredentialsRequest:
    path_params: ApplicationsListPasswordCredentialsPathParams = dataclasses.field()
    query_params: ApplicationsListPasswordCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsListPasswordCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    password_credential_list_result: Optional[shared_passwordcredentiallistresult.PasswordCredentialListResult] = dataclasses.field(default=None)
    
