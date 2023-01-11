import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPaymentPathParams:
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPaymentRequest:
    headers: GetPaymentHeaders = dataclasses.field()
    path_params: GetPaymentPathParams = dataclasses.field()
    security: GetPaymentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_payments: Optional[Any] = dataclasses.field(default=None)
    get_payment_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_payment_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_payment_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_payment_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_payment_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_payment_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
