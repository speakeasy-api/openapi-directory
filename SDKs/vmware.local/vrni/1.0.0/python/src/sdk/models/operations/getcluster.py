import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class GetClusterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetClusterQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetClusterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetClusterRequest:
    path_params: GetClusterPathParams = dataclasses.field()
    query_params: GetClusterQueryParams = dataclasses.field()
    security: GetClusterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
