import dataclasses
from typing import Optional
from ..shared import getpaymentitempartcollectiontype as shared_getpaymentitempartcollectiontype


@dataclasses.dataclass
class GetPaymentItemPartsPathParams:
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentItemPartsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentItemPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentItemPartsRequest:
    headers: GetPaymentItemPartsHeaders = dataclasses.field()
    path_params: GetPaymentItemPartsPathParams = dataclasses.field()
    query_params: GetPaymentItemPartsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentItemPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_item_part_collection_type: Optional[shared_getpaymentitempartcollectiontype.GetPaymentItemPartCollectionType] = dataclasses.field(default=None)
    
