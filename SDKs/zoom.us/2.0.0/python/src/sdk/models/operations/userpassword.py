import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserPasswordPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserPasswordApplicationJSON:
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclasses.dataclass
class UserPasswordMultipartFormData:
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    

@dataclasses.dataclass
class UserPasswordRequests:
    object: Optional[UserPasswordApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UserPasswordMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserPasswordRequest:
    path_params: UserPasswordPathParams = dataclasses.field()
    request: UserPasswordRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
