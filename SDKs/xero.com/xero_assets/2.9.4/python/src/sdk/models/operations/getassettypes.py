import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assettype as shared_assettype


@dataclasses.dataclass
class GetAssetTypesHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetTypesSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAssetTypesRequest:
    headers: GetAssetTypesHeaders = dataclasses.field()
    security: GetAssetTypesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_types: Optional[list[shared_assettype.AssetType]] = dataclasses.field(default=None)
    
