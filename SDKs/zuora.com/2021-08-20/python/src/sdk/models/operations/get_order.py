import dataclasses
from typing import Optional
from ..shared import getorderresponse as shared_getorderresponse


@dataclasses.dataclass
class GetOrderPathParams:
    order_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderRequest:
    headers: GetOrderHeaders = dataclasses.field()
    path_params: GetOrderPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order_response: Optional[shared_getorderresponse.GetOrderResponse] = dataclasses.field(default=None)
    
