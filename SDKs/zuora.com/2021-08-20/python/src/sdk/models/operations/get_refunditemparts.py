import dataclasses
from typing import Optional
from ..shared import getrefunditempartcollectiontype as shared_getrefunditempartcollectiontype


@dataclasses.dataclass
class GetRefundItemPartsPathParams:
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundId', 'style': 'simple', 'explode': False }})
    refundpartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundpartid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundItemPartsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRefundItemPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundItemPartsRequest:
    headers: GetRefundItemPartsHeaders = dataclasses.field()
    path_params: GetRefundItemPartsPathParams = dataclasses.field()
    query_params: GetRefundItemPartsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRefundItemPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_item_part_collection_type: Optional[shared_getrefunditempartcollectiontype.GetRefundItemPartCollectionType] = dataclasses.field(default=None)
    
