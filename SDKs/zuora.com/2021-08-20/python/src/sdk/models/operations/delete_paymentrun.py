import dataclasses
from typing import Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class DeletePaymentRunPathParams:
    payment_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePaymentRunHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePaymentRunRequest:
    headers: DeletePaymentRunHeaders = dataclasses.field()
    path_params: DeletePaymentRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePaymentRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
