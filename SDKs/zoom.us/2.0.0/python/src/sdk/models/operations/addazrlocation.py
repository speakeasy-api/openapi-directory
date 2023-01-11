import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class AddAzrLocationApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_location_id') }})
    

@dataclasses.dataclass
class AddAzrLocationMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'parent_location_id' }})
    

@dataclasses.dataclass
class AddAzrLocationRequests:
    object: Optional[AddAzrLocationApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddAzrLocationMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddAzrLocationSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class AddAzrLocation200ApplicationJSONTypeEnum(str, Enum):
    COUNTRY = "country"
    STATES = "states"
    CITY = "city"
    CAMPUS = "campus"
    BUILDING = "building"
    FLOOR = "floor"


@dataclass_json
@dataclasses.dataclass
class AddAzrLocation200ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_location_id') }})
    type: Optional[AddAzrLocation200ApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddAzrLocationRequest:
    security: AddAzrLocationSecurity = dataclasses.field()
    request: Optional[AddAzrLocationRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddAzrLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_azr_location_200_application_json_object: Optional[AddAzrLocation200ApplicationJSON] = dataclasses.field(default=None)
    
