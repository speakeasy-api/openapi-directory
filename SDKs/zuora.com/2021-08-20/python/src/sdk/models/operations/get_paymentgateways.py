import dataclasses
from typing import Optional
from ..shared import getpaymentgatwaysresponse as shared_getpaymentgatwaysresponse


@dataclasses.dataclass
class GetPaymentgatewaysHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentgatewaysRequest:
    headers: GetPaymentgatewaysHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentgatewaysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_gatways_response: Optional[shared_getpaymentgatwaysresponse.GetPaymentGatwaysResponse] = dataclasses.field(default=None)
    
