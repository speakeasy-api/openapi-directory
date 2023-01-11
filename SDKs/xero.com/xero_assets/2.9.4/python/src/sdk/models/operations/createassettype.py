import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assettype as shared_assettype


@dataclasses.dataclass
class CreateAssetTypeHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAssetTypeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAssetTypeRequest:
    headers: CreateAssetTypeHeaders = dataclasses.field()
    security: CreateAssetTypeSecurity = dataclasses.field()
    request: Optional[shared_assettype.AssetType] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAssetTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_type: Optional[shared_assettype.AssetType] = dataclasses.field(default=None)
    
