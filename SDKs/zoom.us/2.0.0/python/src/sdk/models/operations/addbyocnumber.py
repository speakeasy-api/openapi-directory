import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddByocNumberApplicationJSON:
    carrier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    phone_numbers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclasses.dataclass
class AddByocNumberMultipartFormData:
    carrier: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'carrier' }})
    phone_numbers: list[str] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class AddByocNumberRequests:
    object: Optional[AddByocNumberApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddByocNumberMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AddByocNumber201ApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AddByocNumber201ApplicationJSON:
    phone_numbers: Optional[list[AddByocNumber201ApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclasses.dataclass
class AddByocNumberRequest:
    request: Optional[AddByocNumberRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddByocNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_byoc_number_201_application_json_object: Optional[AddByocNumber201ApplicationJSON] = dataclasses.field(default=None)
    
