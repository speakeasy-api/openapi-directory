import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class AddPhoneDeviceApplicationJSON:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    mac_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    assigned_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigned_to') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddPhoneDeviceMultipartFormData:
    display_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'display_name' }})
    mac_address: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'mac_address' }})
    assigned_to: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'assigned_to' }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'model' }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class AddPhoneDeviceRequests:
    object: Optional[AddPhoneDeviceApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddPhoneDeviceMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddPhoneDeviceSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddPhoneDeviceRequest:
    security: AddPhoneDeviceSecurity = dataclasses.field()
    request: Optional[AddPhoneDeviceRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddPhoneDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_phone_device_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
