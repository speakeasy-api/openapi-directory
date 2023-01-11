import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetZrAccountSettingsSettingTypeEnum(str, Enum):
    MEETING = "meeting"
    ALERT = "alert"


@dataclasses.dataclass
class GetZrAccountSettingsQueryParams:
    setting_type: GetZrAccountSettingsSettingTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'setting_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetZrAccountSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetZrAccountSettingsRequest:
    query_params: GetZrAccountSettingsQueryParams = dataclasses.field()
    security: GetZrAccountSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrAccountSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_account_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
