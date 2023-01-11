import dataclasses
from typing import Optional
from ..shared import approleassignmentlistresult as shared_approleassignmentlistresult
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class ServicePrincipalsListAppRoleAssignmentsPathParams:
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServicePrincipalsListAppRoleAssignmentsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ServicePrincipalsListAppRoleAssignmentsRequest:
    path_params: ServicePrincipalsListAppRoleAssignmentsPathParams = dataclasses.field()
    query_params: ServicePrincipalsListAppRoleAssignmentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ServicePrincipalsListAppRoleAssignmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_role_assignment_list_result: Optional[shared_approleassignmentlistresult.AppRoleAssignmentListResult] = dataclasses.field(default=None)
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
