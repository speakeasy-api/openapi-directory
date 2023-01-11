import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetAllPaymentsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetAllPaymentsQueryParams:
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    payment_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'purpose', 'style': 'form', 'explode': True }})
    service_provider: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_provider', 'style': 'form', 'explode': True }})
    sort: Optional[GetAllPaymentsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllPaymentsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllPaymentsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllPayments200ApplicationJSON:
    next_page_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    payments: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    

@dataclasses.dataclass
class GetAllPaymentsRequest:
    headers: GetAllPaymentsHeaders = dataclasses.field()
    query_params: GetAllPaymentsQueryParams = dataclasses.field()
    security: GetAllPaymentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllPaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_payments_200_application_json_object: Optional[GetAllPayments200ApplicationJSON] = dataclasses.field(default=None)
    get_all_payments_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_payments_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_payments_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_payments_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_payments_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_payments_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
