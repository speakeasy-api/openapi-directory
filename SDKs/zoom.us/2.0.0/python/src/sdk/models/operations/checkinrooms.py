import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CheckInRoomsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CheckInRoomsApplicationJSONParams:
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_id') }})
    calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendar_id') }})
    change_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_key') }})
    resource_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_email') }})
    

@dataclass_json
@dataclasses.dataclass
class CheckInRoomsApplicationJSON:
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    params: Optional[CheckInRoomsApplicationJSONParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    

@dataclass_json
@dataclasses.dataclass
class CheckInRoomsMultipartFormDataParams:
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_id') }})
    calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendar_id') }})
    change_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_key') }})
    resource_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_email') }})
    

@dataclasses.dataclass
class CheckInRoomsMultipartFormData:
    method: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    params: Optional[CheckInRoomsMultipartFormDataParams] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'params', 'json': True }})
    

@dataclasses.dataclass
class CheckInRoomsRequests:
    object: Optional[CheckInRoomsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CheckInRoomsMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CheckInRoomsRequest:
    path_params: CheckInRoomsPathParams = dataclasses.field()
    request: Optional[CheckInRoomsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CheckInRoomsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    check_in_rooms_202_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
