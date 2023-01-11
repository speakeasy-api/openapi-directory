import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import setting as shared_setting


@dataclasses.dataclass
class GetAssetSettingsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetSettingsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAssetSettingsRequest:
    headers: GetAssetSettingsHeaders = dataclasses.field()
    security: GetAssetSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    setting: Optional[shared_setting.Setting] = dataclasses.field(default=None)
    
