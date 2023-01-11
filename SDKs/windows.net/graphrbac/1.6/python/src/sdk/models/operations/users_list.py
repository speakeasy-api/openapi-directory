import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import userlistresult as shared_userlistresult


@dataclasses.dataclass
class UsersListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_expand: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_top: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$top', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListRequest:
    path_params: UsersListPathParams = dataclasses.field()
    query_params: UsersListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    user_list_result: Optional[shared_userlistresult.UserListResult] = dataclasses.field(default=None)
    
