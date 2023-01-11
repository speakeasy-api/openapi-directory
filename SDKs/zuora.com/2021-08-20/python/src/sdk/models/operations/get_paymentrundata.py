import dataclasses
from typing import Optional
from ..shared import getpaymentrundataarrayresponse as shared_getpaymentrundataarrayresponse


@dataclasses.dataclass
class GetPaymentRunDataPathParams:
    payment_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunDataHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunDataRequest:
    headers: GetPaymentRunDataHeaders = dataclasses.field()
    path_params: GetPaymentRunDataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentRunDataResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_data_array_response: Optional[shared_getpaymentrundataarrayresponse.GetPaymentRunDataArrayResponse] = dataclasses.field(default=None)
    
