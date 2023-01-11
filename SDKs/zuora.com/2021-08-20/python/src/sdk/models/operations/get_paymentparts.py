import dataclasses
from typing import Optional
from ..shared import getpaymentpartscollectiontype as shared_getpaymentpartscollectiontype


@dataclasses.dataclass
class GetPaymentPartsPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentPartsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentPartsRequest:
    headers: GetPaymentPartsHeaders = dataclasses.field()
    path_params: GetPaymentPartsPathParams = dataclasses.field()
    query_params: GetPaymentPartsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_parts_collection_type: Optional[shared_getpaymentpartscollectiontype.GetPaymentPartsCollectionType] = dataclasses.field(default=None)
    
