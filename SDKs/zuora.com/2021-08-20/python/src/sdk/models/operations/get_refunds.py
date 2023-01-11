import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum7 as shared_global_request_pagesize_enum7
from ..shared import global_request_pagesize_enum8 as shared_global_request_pagesize_enum8
from ..shared import global_request_pagesize_enum6 as shared_global_request_pagesize_enum6
from ..shared import getrefundcollectiontype as shared_getrefundcollectiontype


@dataclasses.dataclass
class GetRefundsQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    method_type: Optional[shared_global_request_pagesize_enum7.GlobalRequestPageSizeEnum7] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'methodType', 'style': 'form', 'explode': True }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentId', 'style': 'form', 'explode': True }})
    refund_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refundDate', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_global_request_pagesize_enum8.GlobalRequestPageSizeEnum8] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[shared_global_request_pagesize_enum6.GlobalRequestPageSizeEnum6] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedById', 'style': 'form', 'explode': True }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRefundsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundsRequest:
    headers: GetRefundsHeaders = dataclasses.field()
    query_params: GetRefundsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRefundsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_collection_type: Optional[shared_getrefundcollectiontype.GetRefundCollectionType] = dataclasses.field(default=None)
    
