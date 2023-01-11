import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum5 as shared_global_request_pagesize_enum5
from ..shared import global_request_pagesize_enum6 as shared_global_request_pagesize_enum6
from ..shared import paymentcollectionresponsetype as shared_paymentcollectionresponsetype


@dataclasses.dataclass
class GetRetrieveAllPaymentsQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appliedAmount', 'style': 'form', 'explode': True }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    credit_balance_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creditBalanceAmount', 'style': 'form', 'explode': True }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    effective_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'effectiveDate', 'style': 'form', 'explode': True }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    refund_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refundAmount', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_global_request_pagesize_enum5.GlobalRequestPageSizeEnum5] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[shared_global_request_pagesize_enum6.GlobalRequestPageSizeEnum6] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    unapplied_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unappliedAmount', 'style': 'form', 'explode': True }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedById', 'style': 'form', 'explode': True }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRetrieveAllPaymentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRetrieveAllPaymentsRequest:
    headers: GetRetrieveAllPaymentsHeaders = dataclasses.field()
    query_params: GetRetrieveAllPaymentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRetrieveAllPaymentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_collection_response_type: Optional[shared_paymentcollectionresponsetype.PaymentCollectionResponseType] = dataclasses.field(default=None)
    
