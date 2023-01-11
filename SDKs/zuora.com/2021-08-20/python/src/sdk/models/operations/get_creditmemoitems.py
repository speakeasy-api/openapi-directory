import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getcreditmemoitemslisttype as shared_getcreditmemoitemslisttype


@dataclasses.dataclass
class GetCreditMemoItemsPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemsQueryParams:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appliedAmount', 'style': 'form', 'explode': True }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    refund_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refundAmount', 'style': 'form', 'explode': True }})
    service_end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceEndDate', 'style': 'form', 'explode': True }})
    service_start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceStartDate', 'style': 'form', 'explode': True }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    sku_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skuName', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_item_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceItemId', 'style': 'form', 'explode': True }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscriptionId', 'style': 'form', 'explode': True }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedById', 'style': 'form', 'explode': True }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreditMemoItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemsRequest:
    headers: GetCreditMemoItemsHeaders = dataclasses.field()
    path_params: GetCreditMemoItemsPathParams = dataclasses.field()
    query_params: GetCreditMemoItemsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditMemoItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_items_list_type: Optional[shared_getcreditmemoitemslisttype.GetCreditMemoItemsListType] = dataclasses.field(default=None)
    
