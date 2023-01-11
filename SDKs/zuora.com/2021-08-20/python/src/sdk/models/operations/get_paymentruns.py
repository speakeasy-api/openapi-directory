import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum4 as shared_global_request_pagesize_enum4
from ..shared import getpaymentruncollectiontype as shared_getpaymentruncollectiontype


@dataclasses.dataclass
class GetPaymentRunsQueryParams:
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_global_request_pagesize_enum4.GlobalRequestPageSizeEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    target_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetDate', 'style': 'form', 'explode': True }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedById', 'style': 'form', 'explode': True }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentRunsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentRunsRequest:
    headers: GetPaymentRunsHeaders = dataclasses.field()
    query_params: GetPaymentRunsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentRunsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_collection_type: Optional[shared_getpaymentruncollectiontype.GetPaymentRunCollectionType] = dataclasses.field(default=None)
    
