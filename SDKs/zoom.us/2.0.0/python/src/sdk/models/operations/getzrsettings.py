import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrSettingsPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetZrSettingsQueryParams:
    setting_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetZrSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetZrSettingsRequest:
    path_params: GetZrSettingsPathParams = dataclasses.field()
    query_params: GetZrSettingsQueryParams = dataclasses.field()
    security: GetZrSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
