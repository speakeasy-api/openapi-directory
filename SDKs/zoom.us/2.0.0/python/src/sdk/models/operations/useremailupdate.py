import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserEmailUpdatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserEmailUpdateApplicationJSON:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class UserEmailUpdateMultipartFormData:
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    

@dataclasses.dataclass
class UserEmailUpdateRequests:
    object: Optional[UserEmailUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UserEmailUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserEmailUpdateRequest:
    path_params: UserEmailUpdatePathParams = dataclasses.field()
    request: UserEmailUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserEmailUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
