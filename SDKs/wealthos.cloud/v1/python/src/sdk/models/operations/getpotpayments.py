import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPotPaymentsPathParams:
    pot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotPaymentsQueryParams:
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    payment_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'purpose', 'style': 'form', 'explode': True }})
    service_provider: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_provider', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPotPaymentsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotPaymentsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetPotPayments200ApplicationJSON:
    next_page_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    payments: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    pot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    

@dataclasses.dataclass
class GetPotPaymentsRequest:
    headers: GetPotPaymentsHeaders = dataclasses.field()
    path_params: GetPotPaymentsPathParams = dataclasses.field()
    query_params: GetPotPaymentsQueryParams = dataclasses.field()
    security: GetPotPaymentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPotPaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pot_payments_200_application_json_object: Optional[GetPotPayments200ApplicationJSON] = dataclasses.field(default=None)
    get_pot_payments_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_payments_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_payments_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_payments_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_payments_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
