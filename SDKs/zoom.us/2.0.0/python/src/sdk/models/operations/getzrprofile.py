import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrProfilePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetZrProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrProfile200ApplicationJSONBasic:
    activation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activation_code') }})
    hide_room_in_contacts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_room_in_contacts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrProfile200ApplicationJSON:
    basic: Optional[GetZrProfile200ApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclasses.dataclass
class GetZrProfileRequest:
    path_params: GetZrProfilePathParams = dataclasses.field()
    security: GetZrProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_profile_200_application_json_object: Optional[GetZrProfile200ApplicationJSON] = dataclasses.field(default=None)
    
