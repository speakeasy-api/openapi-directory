import dataclasses
from typing import Optional
from ..shared import grapherror as shared_grapherror
from ..shared import grouplistresult as shared_grouplistresult


@dataclasses.dataclass
class GroupsListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsListRequest:
    path_params: GroupsListPathParams = dataclasses.field()
    query_params: GroupsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GroupsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    group_list_result: Optional[shared_grouplistresult.GroupListResult] = dataclasses.field(default=None)
    
