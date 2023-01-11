import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class UpdateZrAccProfileApplicationJSONBasic:
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateZrAccProfileApplicationJSON:
    basic: Optional[UpdateZrAccProfileApplicationJSONBasic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateZrAccProfileMultipartFormDataBasic:
    required_code_to_ext: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_code_to_ext') }})
    room_passcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_passcode') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_email') }})
    support_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_phone') }})
    

@dataclasses.dataclass
class UpdateZrAccProfileMultipartFormData:
    basic: Optional[UpdateZrAccProfileMultipartFormDataBasic] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'basic', 'json': True }})
    

@dataclasses.dataclass
class UpdateZrAccProfileRequests:
    object: Optional[UpdateZrAccProfileApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateZrAccProfileMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZrAccProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZrAccProfileRequest:
    security: UpdateZrAccProfileSecurity = dataclasses.field()
    request: Optional[UpdateZrAccProfileRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZrAccProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zr_acc_profile_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
