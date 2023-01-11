import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import keycredentiallistresult as shared_keycredentiallistresult


@dataclasses.dataclass
class ApplicationsListKeyCredentialsPathParams:
    application_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsListKeyCredentialsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsListKeyCredentialsRequest:
    path_params: ApplicationsListKeyCredentialsPathParams = dataclasses.field()
    query_params: ApplicationsListKeyCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsListKeyCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    key_credential_list_result: Optional[shared_keycredentiallistresult.KeyCredentialListResult] = dataclasses.field(default=None)
    
