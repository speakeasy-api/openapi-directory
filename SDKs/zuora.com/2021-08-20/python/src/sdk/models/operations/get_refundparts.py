import dataclasses
from typing import Optional
from ..shared import getrefundpartcollectiontype as shared_getrefundpartcollectiontype


@dataclasses.dataclass
class GetRefundPartsPathParams:
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundPartsRequest:
    headers: GetRefundPartsHeaders = dataclasses.field()
    path_params: GetRefundPartsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRefundPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_part_collection_type: Optional[shared_getrefundpartcollectiontype.GetRefundPartCollectionType] = dataclasses.field(default=None)
    
