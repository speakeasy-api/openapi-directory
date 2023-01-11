import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAZoomRoomPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAZoomRoomSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAZoomRoomRequest:
    path_params: DeleteAZoomRoomPathParams = dataclasses.field()
    security: DeleteAZoomRoomSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAZoomRoomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_zoom_room_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
