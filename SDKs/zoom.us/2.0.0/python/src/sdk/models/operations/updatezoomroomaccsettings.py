import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateZoomRoomAccSettingsQueryParams:
    setting_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateZoomRoomAccSettingsRequests:
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZoomRoomAccSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZoomRoomAccSettingsRequest:
    query_params: UpdateZoomRoomAccSettingsQueryParams = dataclasses.field()
    security: UpdateZoomRoomAccSettingsSecurity = dataclasses.field()
    request: Optional[UpdateZoomRoomAccSettingsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZoomRoomAccSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zoom_room_acc_settings_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
