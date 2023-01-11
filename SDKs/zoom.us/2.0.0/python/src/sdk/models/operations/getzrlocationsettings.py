import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrLocationSettingsPathParams:
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetZrLocationSettingsQueryParams:
    setting_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetZrLocationSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetZrLocationSettingsRequest:
    path_params: GetZrLocationSettingsPathParams = dataclasses.field()
    query_params: GetZrLocationSettingsQueryParams = dataclasses.field()
    security: GetZrLocationSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrLocationSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_location_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
