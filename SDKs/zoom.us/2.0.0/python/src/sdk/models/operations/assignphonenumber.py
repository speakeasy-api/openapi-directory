import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignPhoneNumberPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumberApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumberApplicationJSON:
    phone_numbers: Optional[list[AssignPhoneNumberApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumberMultipartFormDataPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclasses.dataclass
class AssignPhoneNumberMultipartFormData1:
    phone_numbers: Optional[list[AssignPhoneNumberMultipartFormDataPhoneNumbers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    

@dataclasses.dataclass
class AssignPhoneNumberRequests:
    object: Optional[AssignPhoneNumberApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignPhoneNumberMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignPhoneNumberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumber200ApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumber200ApplicationJSON:
    phone_numbers: Optional[list[AssignPhoneNumber200ApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclasses.dataclass
class AssignPhoneNumberRequest:
    path_params: AssignPhoneNumberPathParams = dataclasses.field()
    security: AssignPhoneNumberSecurity = dataclasses.field()
    request: Optional[AssignPhoneNumberRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_phone_number_200_application_json_object: Optional[AssignPhoneNumber200ApplicationJSON] = dataclasses.field(default=None)
    
