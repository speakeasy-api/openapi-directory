import dataclasses
from typing import Optional
from enum import Enum
from ..shared import assetstatusqueryparam_enum as shared_assetstatusqueryparam_enum
from ..shared import security as shared_security
from ..shared import assets as shared_assets

class GetAssetsOrderByEnum(str, Enum):
    ASSET_TYPE = "AssetType"
    ASSET_NAME = "AssetName"
    ASSET_NUMBER = "AssetNumber"
    PURCHASE_DATE = "PurchaseDate"
    PURCHASE_PRICE = "PurchasePrice"
    DISPOSAL_DATE = "DisposalDate"
    DISPOSAL_PRICE = "DisposalPrice"

class GetAssetsSortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetAssetsQueryParams:
    status: shared_assetstatusqueryparam_enum.AssetStatusQueryParamEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    filter_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filterBy', 'style': 'form', 'explode': True }})
    order_by: Optional[GetAssetsOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_direction: Optional[GetAssetsSortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssetsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAssetsRequest:
    headers: GetAssetsHeaders = dataclasses.field()
    query_params: GetAssetsQueryParams = dataclasses.field()
    security: GetAssetsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assets: Optional[shared_assets.Assets] = dataclasses.field(default=None)
    
