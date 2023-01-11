import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateZrLocationSettingsPathParams:
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateZrLocationSettingsQueryParams:
    setting_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateZrLocationSettingsRequests:
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZrLocationSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZrLocationSettingsRequest:
    path_params: UpdateZrLocationSettingsPathParams = dataclasses.field()
    query_params: UpdateZrLocationSettingsQueryParams = dataclasses.field()
    security: UpdateZrLocationSettingsSecurity = dataclasses.field()
    request: Optional[UpdateZrLocationSettingsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZrLocationSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zr_location_settings_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
