import dataclasses
from typing import Optional
from ..shared import applicationlistresult as shared_applicationlistresult
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ApplicationsListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplicationsListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ApplicationsListRequest:
    path_params: ApplicationsListPathParams = dataclasses.field()
    query_params: ApplicationsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplicationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_list_result: Optional[shared_applicationlistresult.ApplicationListResult] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
