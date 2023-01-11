import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import settingsobject as shared_settingsobject


@dataclasses.dataclass
class GetSettingsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsRequest:
    headers: GetSettingsHeaders = dataclasses.field()
    security: GetSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    settings_object: Optional[shared_settingsobject.SettingsObject] = dataclasses.field(default=None)
    
