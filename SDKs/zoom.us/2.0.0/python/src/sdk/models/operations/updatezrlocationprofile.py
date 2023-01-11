import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateZrLocationProfilePathParams:
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateZrLocationProfileApplicationJSONBasic:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description ') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateZrLocationProfileApplicationJSON:
    basic: Optional[UpdateZrLocationProfileApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateZrLocationProfileMultipartFormDataBasic:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description ') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclasses.dataclass
class UpdateZrLocationProfileMultipartFormData:
    basic: Optional[UpdateZrLocationProfileMultipartFormDataBasic] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'basic', 'json': True }})
    

@dataclasses.dataclass
class UpdateZrLocationProfileRequests:
    object: Optional[UpdateZrLocationProfileApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateZrLocationProfileMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZrLocationProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZrLocationProfileRequest:
    path_params: UpdateZrLocationProfilePathParams = dataclasses.field()
    security: UpdateZrLocationProfileSecurity = dataclasses.field()
    request: Optional[UpdateZrLocationProfileRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZrLocationProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zr_location_profile_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
