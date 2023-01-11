import dataclasses
from typing import Optional
from ..shared import putverifypaymentmethodtype as shared_putverifypaymentmethodtype
from ..shared import putverifypaymentmethodresponsetype as shared_putverifypaymentmethodresponsetype


@dataclasses.dataclass
class PutVerifyPaymentMethodsPathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutVerifyPaymentMethodsHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutVerifyPaymentMethodsRequest:
    headers: PutVerifyPaymentMethodsHeaders = dataclasses.field()
    path_params: PutVerifyPaymentMethodsPathParams = dataclasses.field()
    request: shared_putverifypaymentmethodtype.PutVerifyPaymentMethodType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutVerifyPaymentMethodsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_verify_payment_method_response_type: Optional[shared_putverifypaymentmethodresponsetype.PutVerifyPaymentMethodResponseType] = dataclasses.field(default=None)
    
