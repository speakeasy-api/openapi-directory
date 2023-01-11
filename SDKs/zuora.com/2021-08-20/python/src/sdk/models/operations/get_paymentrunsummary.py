import dataclasses
from typing import Optional
from ..shared import getpaymentrunsummaryresponse as shared_getpaymentrunsummaryresponse


@dataclasses.dataclass
class GetPaymentRunSummaryPathParams:
    payment_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunSummaryHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunSummaryRequest:
    headers: GetPaymentRunSummaryHeaders = dataclasses.field()
    path_params: GetPaymentRunSummaryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentRunSummaryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_summary_response: Optional[shared_getpaymentrunsummaryresponse.GetPaymentRunSummaryResponse] = dataclasses.field(default=None)
    
