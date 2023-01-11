import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetProductPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'product-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductRequest:
    headers: GetProductHeaders = dataclasses.field()
    path_params: GetProductPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProductResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_product_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
