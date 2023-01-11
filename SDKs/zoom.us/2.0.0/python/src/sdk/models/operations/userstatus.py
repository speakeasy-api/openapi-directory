import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserStatusPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserStatusApplicationJSONActionEnum(str, Enum):
    ACTIVATE = "activate"
    DEACTIVATE = "deactivate"


@dataclass_json
@dataclasses.dataclass
class UserStatusApplicationJSON:
    r"""UserStatusApplicationJSON
    The action.
    """
    
    action: UserStatusApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
class UserStatusMultipartFormDataActionEnum(str, Enum):
    ACTIVATE = "activate"
    DEACTIVATE = "deactivate"


@dataclasses.dataclass
class UserStatusMultipartFormData:
    r"""UserStatusMultipartFormData
    The action.
    """
    
    action: UserStatusMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    

@dataclasses.dataclass
class UserStatusRequests:
    object: Optional[UserStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UserStatusMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UserStatusRequest:
    path_params: UserStatusPathParams = dataclasses.field()
    request: UserStatusRequests = dataclasses.field()
    security: UserStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
