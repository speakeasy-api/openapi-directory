import dataclasses
from typing import Optional
from ..shared import getpaymentstype as shared_getpaymentstype


@dataclasses.dataclass
class GetTransactionPaymentPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionPaymentQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionPaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionPaymentRequest:
    headers: GetTransactionPaymentHeaders = dataclasses.field()
    path_params: GetTransactionPaymentPathParams = dataclasses.field()
    query_params: GetTransactionPaymentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payments_type: Optional[shared_getpaymentstype.GetPaymentsType] = dataclasses.field(default=None)
    
