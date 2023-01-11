import dataclasses
from typing import Optional
from ..shared import postcatalogtype as shared_postcatalogtype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PostCatalogPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'product-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCatalogHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCatalogRequest:
    headers: PostCatalogHeaders = dataclasses.field()
    path_params: PostCatalogPathParams = dataclasses.field()
    request: shared_postcatalogtype.PostCatalogType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCatalogResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
