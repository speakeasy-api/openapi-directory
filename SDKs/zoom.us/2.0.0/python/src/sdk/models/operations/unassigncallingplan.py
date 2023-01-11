import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignCallingPlanPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignCallingPlanSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignCallingPlanRequest:
    path_params: UnassignCallingPlanPathParams = dataclasses.field()
    security: UnassignCallingPlanSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignCallingPlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_calling_plan_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
