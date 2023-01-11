import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlanBaseDeletePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanBaseDeleteApplicationJSON:
    action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    reason: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclasses.dataclass
class AccountPlanBaseDeleteMultipartFormData:
    action: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comment' }})
    reason: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'reason' }})
    

@dataclasses.dataclass
class AccountPlanBaseDeleteRequests:
    object: Optional[AccountPlanBaseDeleteApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountPlanBaseDeleteMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountPlanBaseDeleteRequest:
    path_params: AccountPlanBaseDeletePathParams = dataclasses.field()
    request: Optional[AccountPlanBaseDeleteRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AccountPlanBaseDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_plan_base_delete_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
