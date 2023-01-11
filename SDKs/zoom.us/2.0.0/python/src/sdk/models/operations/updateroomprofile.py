import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateRoomProfilePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoomProfileApplicationJSONBasic:
    hide_room_in_contacts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_room_in_contacts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoomProfileApplicationJSON:
    basic: Optional[UpdateRoomProfileApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoomProfileMultipartFormDataBasic:
    hide_room_in_contacts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_room_in_contacts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclasses.dataclass
class UpdateRoomProfileMultipartFormData:
    basic: Optional[UpdateRoomProfileMultipartFormDataBasic] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'basic', 'json': True }})
    

@dataclasses.dataclass
class UpdateRoomProfileRequests:
    object: Optional[UpdateRoomProfileApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateRoomProfileMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateRoomProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateRoomProfileRequest:
    path_params: UpdateRoomProfilePathParams = dataclasses.field()
    security: UpdateRoomProfileSecurity = dataclasses.field()
    request: Optional[UpdateRoomProfileRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_room_profile_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
