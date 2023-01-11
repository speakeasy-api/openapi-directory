import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrAccountProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrAccountProfile200ApplicationJSONBasic:
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrAccountProfile200ApplicationJSON:
    basic: Optional[GetZrAccountProfile200ApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclasses.dataclass
class GetZrAccountProfileRequest:
    security: GetZrAccountProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrAccountProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_account_profile_200_application_json_object: Optional[GetZrAccountProfile200ApplicationJSON] = dataclasses.field(default=None)
    
