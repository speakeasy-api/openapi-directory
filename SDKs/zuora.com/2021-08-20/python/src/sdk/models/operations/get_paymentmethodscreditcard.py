import dataclasses
from typing import Optional
from ..shared import getpaymentmethodstype as shared_getpaymentmethodstype


@dataclasses.dataclass
class GetPaymentMethodsCreditCardPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentMethodsCreditCardQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentMethodsCreditCardHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentMethodsCreditCardRequest:
    headers: GetPaymentMethodsCreditCardHeaders = dataclasses.field()
    path_params: GetPaymentMethodsCreditCardPathParams = dataclasses.field()
    query_params: GetPaymentMethodsCreditCardQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentMethodsCreditCardResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_methods_type: Optional[shared_getpaymentmethodstype.GetPaymentMethodsType] = dataclasses.field(default=None)
    
