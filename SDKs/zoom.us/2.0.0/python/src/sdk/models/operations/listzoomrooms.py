import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class ListZoomRoomsStatusEnum(str, Enum):
    OFFLINE = "Offline"
    AVAILABLE = "Available"
    IN_MEETING = "InMeeting"
    UNDER_CONSTRUCTION = "UnderConstruction"

class ListZoomRoomsTypeEnum(str, Enum):
    ZOOM_ROOM = "ZoomRoom"
    SCHEDULING_DISPLAY_ONLY = "SchedulingDisplayOnly"
    DIGITAL_SIGNAGE_ONLY = "DigitalSignageOnly"


@dataclasses.dataclass
class ListZoomRoomsQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[ListZoomRoomsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[ListZoomRoomsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    unassigned_rooms: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unassigned_rooms', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListZoomRoomsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListZoomRooms200ApplicationJSONRoomsStatusEnum(str, Enum):
    OFFLINE = "Offline"
    AVAILABLE = "Available"
    IN_MEETING = "InMeeting"
    UNDER_CONSTRUCTION = "UnderConstruction"


@dataclass_json
@dataclasses.dataclass
class ListZoomRooms200ApplicationJSONRooms:
    activation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activation_code') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    room_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_id') }})
    status: Optional[ListZoomRooms200ApplicationJSONRoomsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListZoomRooms200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    rooms: Optional[list[ListZoomRooms200ApplicationJSONRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclasses.dataclass
class ListZoomRoomsRequest:
    query_params: ListZoomRoomsQueryParams = dataclasses.field()
    security: ListZoomRoomsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListZoomRoomsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_zoom_rooms_200_application_json_object: Optional[ListZoomRooms200ApplicationJSON] = dataclasses.field(default=None)
    
