import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import asset as shared_asset


@dataclasses.dataclass
class CreateAssetHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAssetSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAssetRequest:
    headers: CreateAssetHeaders = dataclasses.field()
    request: shared_asset.Asset = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAssetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    
