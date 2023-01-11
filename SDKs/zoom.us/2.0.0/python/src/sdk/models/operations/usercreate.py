import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class UserCreateApplicationJSONActionEnum(str, Enum):
    CREATE = "create"
    AUTO_CREATE = "autoCreate"
    CUST_CREATE = "custCreate"
    SSO_CREATE = "ssoCreate"


@dataclass_json
@dataclasses.dataclass
class UserCreateApplicationJSONUserInfo:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass_json
@dataclasses.dataclass
class UserCreateApplicationJSON:
    action: UserCreateApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    user_info: Optional[UserCreateApplicationJSONUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_info') }})
    
class UserCreateMultipartFormDataActionEnum(str, Enum):
    CREATE = "create"
    AUTO_CREATE = "autoCreate"
    CUST_CREATE = "custCreate"
    SSO_CREATE = "ssoCreate"


@dataclass_json
@dataclasses.dataclass
class UserCreateMultipartFormDataUserInfo:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclasses.dataclass
class UserCreateMultipartFormData:
    action: UserCreateMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    user_info: Optional[UserCreateMultipartFormDataUserInfo] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_info', 'json': True }})
    

@dataclasses.dataclass
class UserCreateRequests:
    object: Optional[UserCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UserCreateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserCreate201ApplicationJSON:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class UserCreateRequest:
    request: UserCreateRequests = dataclasses.field()
    security: UserCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_create_201_application_json_object: Optional[UserCreate201ApplicationJSON] = dataclasses.field(default=None)
    
