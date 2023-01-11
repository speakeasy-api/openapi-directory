import dataclasses
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class GroupsIsMemberOfPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupsIsMemberOfQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GroupsIsMemberOfRequests:
    check_group_membership_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    check_group_membership_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class GroupsIsMemberOfRequest:
    path_params: GroupsIsMemberOfPathParams = dataclasses.field()
    query_params: GroupsIsMemberOfQueryParams = dataclasses.field()
    request: GroupsIsMemberOfRequests = dataclasses.field()
    

@dataclasses.dataclass
class GroupsIsMemberOfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_group_membership_result: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
