import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountPlanAddonCancelPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class AccountPlanAddonCancelApplicationJSONActionEnum(str, Enum):
    CANCEL = "cancel"


@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCancelApplicationJSON:
    r"""AccountPlanAddonCancelApplicationJSON
    Account plan object
    """
    
    action: Optional[AccountPlanAddonCancelApplicationJSONActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    reason: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlanAddonCancelMultipartFormDataActionEnum(str, Enum):
    CANCEL = "cancel"


@dataclasses.dataclass
class AccountPlanAddonCancelMultipartFormData:
    r"""AccountPlanAddonCancelMultipartFormData
    Account plan object
    """
    
    action: Optional[AccountPlanAddonCancelMultipartFormDataActionEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comment' }})
    reason: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'reason' }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class AccountPlanAddonCancelRequests:
    object: Optional[AccountPlanAddonCancelApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountPlanAddonCancelMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountPlanAddonCancelSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountPlanAddonCancelRequest:
    path_params: AccountPlanAddonCancelPathParams = dataclasses.field()
    security: AccountPlanAddonCancelSecurity = dataclasses.field()
    request: Optional[AccountPlanAddonCancelRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AccountPlanAddonCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_plan_addon_cancel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
