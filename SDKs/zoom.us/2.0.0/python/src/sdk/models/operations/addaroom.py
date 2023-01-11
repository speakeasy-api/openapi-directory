import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class AddARoomApplicationJSONTypeEnum(str, Enum):
    ZOOM_ROOM = "ZoomRoom"
    SCHEDULING_DISPLAY_ONLY = "SchedulingDisplayOnly"
    DIGITAL_SIGNAGE_ONLY = "DigitalSignageOnly"


@dataclass_json
@dataclasses.dataclass
class AddARoomApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: AddARoomApplicationJSONTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    
class AddARoomMultipartFormDataTypeEnum(str, Enum):
    ZOOM_ROOM = "ZoomRoom"
    SCHEDULING_DISPLAY_ONLY = "SchedulingDisplayOnly"
    DIGITAL_SIGNAGE_ONLY = "DigitalSignageOnly"


@dataclasses.dataclass
class AddARoomMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    type: AddARoomMultipartFormDataTypeEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'location_id' }})
    

@dataclasses.dataclass
class AddARoomRequests:
    object: Optional[AddARoomApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddARoomMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddARoomSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class AddARoom201ApplicationJSONTypeEnum(str, Enum):
    ZOOM_ROOM = "ZoomRoom"
    SCHEDULING_DISPLAY_ONLY = "SchedulingDisplayOnly"
    DIGITAL_SIGNAGE_ONLY = "DigitalSignageOnly"


@dataclass_json
@dataclasses.dataclass
class AddARoom201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    room_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_id') }})
    type: Optional[AddARoom201ApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddARoomRequest:
    security: AddARoomSecurity = dataclasses.field()
    request: Optional[AddARoomRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddARoomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_a_room_201_application_json_object: Optional[AddARoom201ApplicationJSON] = dataclasses.field(default=None)
    
