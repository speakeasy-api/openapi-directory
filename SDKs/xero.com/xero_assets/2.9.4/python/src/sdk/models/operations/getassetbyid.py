import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import asset as shared_asset


@dataclasses.dataclass
class GetAssetByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetByIDHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetByIDSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAssetByIDRequest:
    headers: GetAssetByIDHeaders = dataclasses.field()
    path_params: GetAssetByIDPathParams = dataclasses.field()
    security: GetAssetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    
