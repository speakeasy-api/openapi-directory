import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AssignPhoneNumbersSlgPathParams:
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersSlgApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersSlgApplicationJSON:
    phone_numbers: Optional[list[AssignPhoneNumbersSlgApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclasses.dataclass
class AssignPhoneNumbersSlgMultipartFormData1:
    phone_numbers: Optional[list[AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    

@dataclasses.dataclass
class AssignPhoneNumbersSlgRequests:
    object: Optional[AssignPhoneNumbersSlgApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignPhoneNumbersSlgMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignPhoneNumbersSlgRequest:
    path_params: AssignPhoneNumbersSlgPathParams = dataclasses.field()
    request: Optional[AssignPhoneNumbersSlgRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignPhoneNumbersSlgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
