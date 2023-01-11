import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getdebitmemoitemcollectiontype as shared_getdebitmemoitemcollectiontype


@dataclasses.dataclass
class GetDebitMemoItemsPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoItemsQueryParams:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    be_applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beAppliedAmount', 'style': 'form', 'explode': True }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
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
class GetDebitMemoItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoItemsRequest:
    headers: GetDebitMemoItemsHeaders = dataclasses.field()
    path_params: GetDebitMemoItemsPathParams = dataclasses.field()
    query_params: GetDebitMemoItemsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDebitMemoItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_debit_memo_item_collection_type: Optional[shared_getdebitmemoitemcollectiontype.GetDebitMemoItemCollectionType] = dataclasses.field(default=None)
    
