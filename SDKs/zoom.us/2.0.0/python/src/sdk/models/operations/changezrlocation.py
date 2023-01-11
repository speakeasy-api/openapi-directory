import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ChangeZrLocationPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeZrLocationApplicationJSON:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    

@dataclasses.dataclass
class ChangeZrLocationMultipartFormData:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'location_id' }})
    

@dataclasses.dataclass
class ChangeZrLocationRequests:
    object: Optional[ChangeZrLocationApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ChangeZrLocationMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ChangeZrLocationSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ChangeZrLocationRequest:
    path_params: ChangeZrLocationPathParams = dataclasses.field()
    security: ChangeZrLocationSecurity = dataclasses.field()
    request: Optional[ChangeZrLocationRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeZrLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    change_zr_location_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
