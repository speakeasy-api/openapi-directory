import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ChangeZoomRoomsAppVersionPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    
class ChangeZoomRoomsAppVersionApplicationJSONActionEnum(str, Enum):
    UPGRADE = "upgrade"
    DOWNGRADE = "downgrade"
    CANCEL = "cancel"


@dataclass_json
@dataclasses.dataclass
class ChangeZoomRoomsAppVersionApplicationJSON:
    action: Optional[ChangeZoomRoomsAppVersionApplicationJSONActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
class ChangeZoomRoomsAppVersionMultipartFormDataActionEnum(str, Enum):
    UPGRADE = "upgrade"
    DOWNGRADE = "downgrade"
    CANCEL = "cancel"


@dataclasses.dataclass
class ChangeZoomRoomsAppVersionMultipartFormData:
    action: Optional[ChangeZoomRoomsAppVersionMultipartFormDataActionEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    

@dataclasses.dataclass
class ChangeZoomRoomsAppVersionRequests:
    object: Optional[ChangeZoomRoomsAppVersionApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ChangeZoomRoomsAppVersionMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ChangeZoomRoomsAppVersionRequest:
    path_params: ChangeZoomRoomsAppVersionPathParams = dataclasses.field()
    request: Optional[ChangeZoomRoomsAppVersionRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeZoomRoomsAppVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    change_zoom_rooms_app_version_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
