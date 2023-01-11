import dataclasses
from typing import Optional
from ..shared import getpaymentruntype as shared_getpaymentruntype


@dataclasses.dataclass
class GetPaymentRunPathParams:
    payment_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunRequest:
    headers: GetPaymentRunHeaders = dataclasses.field()
    path_params: GetPaymentRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_type: Optional[shared_getpaymentruntype.GetPaymentRunType] = dataclasses.field(default=None)
    
