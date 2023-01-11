import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrLocationProfilePathParams:
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetZrLocationProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrLocationProfile200ApplicationJSONBasic:
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
class GetZrLocationProfile200ApplicationJSON:
    basic: Optional[GetZrLocationProfile200ApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclasses.dataclass
class GetZrLocationProfileRequest:
    path_params: GetZrLocationProfilePathParams = dataclasses.field()
    security: GetZrLocationProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrLocationProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_location_profile_200_application_json_object: Optional[GetZrLocationProfile200ApplicationJSON] = dataclasses.field(default=None)
    
