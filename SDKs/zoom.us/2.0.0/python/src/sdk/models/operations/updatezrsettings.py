import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateZrSettingsPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateZrSettingsQueryParams:
    setting_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateZrSettingsRequests:
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZrSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZrSettingsRequest:
    path_params: UpdateZrSettingsPathParams = dataclasses.field()
    query_params: UpdateZrSettingsQueryParams = dataclasses.field()
    security: UpdateZrSettingsSecurity = dataclasses.field()
    request: Optional[UpdateZrSettingsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZrSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zr_settings_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
