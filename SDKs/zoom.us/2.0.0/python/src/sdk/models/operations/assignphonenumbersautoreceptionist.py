import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistPathParams:
    auto_receptionist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'autoReceptionistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistApplicationJSON:
    phone_numbers: Optional[list[AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistMultipartFormData1:
    phone_numbers: Optional[list[AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    

@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistRequests:
    object: Optional[AssignPhoneNumbersAutoReceptionistApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignPhoneNumbersAutoReceptionistMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistRequest:
    path_params: AssignPhoneNumbersAutoReceptionistPathParams = dataclasses.field()
    security: AssignPhoneNumbersAutoReceptionistSecurity = dataclasses.field()
    request: Optional[AssignPhoneNumbersAutoReceptionistRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignPhoneNumbersAutoReceptionistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_phone_numbers_auto_receptionist_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
