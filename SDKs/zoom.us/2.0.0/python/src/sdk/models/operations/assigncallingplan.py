import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignCallingPlanPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignCallingPlanApplicationJSONCallingPlans:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignCallingPlanApplicationJSON:
    calling_plans: Optional[list[AssignCallingPlanApplicationJSONCallingPlans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calling_plans') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignCallingPlanMultipartFormDataCallingPlans:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AssignCallingPlanMultipartFormData1:
    calling_plans: Optional[list[AssignCallingPlanMultipartFormDataCallingPlans]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'calling_plans', 'json': True }})
    

@dataclasses.dataclass
class AssignCallingPlanRequests:
    object: Optional[AssignCallingPlanApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignCallingPlanMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignCallingPlanSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AssignCallingPlanRequest:
    path_params: AssignCallingPlanPathParams = dataclasses.field()
    security: AssignCallingPlanSecurity = dataclasses.field()
    request: Optional[AssignCallingPlanRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignCallingPlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_calling_plan_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
