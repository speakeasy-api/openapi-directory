import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListZrDevicesPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListZrDevicesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum(str, Enum):
    ZOOM_ROOMS_COMPUTER = "Zoom Rooms Computer"
    CONTROLLER = "Controller"
    SCHEDULING_DISPLAY = "Scheduling Display"
    ZOOM_ROOMS_CONTROL_SYSTEM = "Zoom Rooms Control System"
    COMPANION_WHITEBOARD = "Companion Whiteboard"

class ListZrDevices200ApplicationJSONDevicesStatusEnum(str, Enum):
    ONLINE = "Online"
    OFFLINE = "Offline"


@dataclass_json
@dataclasses.dataclass
class ListZrDevices200ApplicationJSONDevices:
    app_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_version') }})
    device_system: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_system') }})
    device_type: Optional[ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    room_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_name') }})
    status: Optional[ListZrDevices200ApplicationJSONDevicesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListZrDevices200ApplicationJSON:
    devices: Optional[list[ListZrDevices200ApplicationJSONDevices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    

@dataclasses.dataclass
class ListZrDevicesRequest:
    path_params: ListZrDevicesPathParams = dataclasses.field()
    security: ListZrDevicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListZrDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_zr_devices_200_application_json_object: Optional[ListZrDevices200ApplicationJSON] = dataclasses.field(default=None)
    
