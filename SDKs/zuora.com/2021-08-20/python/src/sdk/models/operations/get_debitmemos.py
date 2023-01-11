import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum2 as shared_global_request_pagesize_enum2
from ..shared import getdebitmemocollectiontype as shared_getdebitmemocollectiontype


@dataclasses.dataclass
class GetDebitMemosQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'balance', 'style': 'form', 'explode': True }})
    be_applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beAppliedAmount', 'style': 'form', 'explode': True }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdById', 'style': 'form', 'explode': True }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdDate', 'style': 'form', 'explode': True }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    debit_memo_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debitMemoDate', 'style': 'form', 'explode': True }})
    due_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dueDate', 'style': 'form', 'explode': True }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    referred_invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'referredInvoiceId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_global_request_pagesize_enum2.GlobalRequestPageSizeEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    target_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetDate', 'style': 'form', 'explode': True }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxAmount', 'style': 'form', 'explode': True }})
    total_tax_exempt_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'totalTaxExemptAmount', 'style': 'form', 'explode': True }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedById', 'style': 'form', 'explode': True }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDebitMemosHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemosRequest:
    headers: GetDebitMemosHeaders = dataclasses.field()
    query_params: GetDebitMemosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDebitMemosResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_debit_memo_collection_type: Optional[shared_getdebitmemocollectiontype.GetDebitMemoCollectionType] = dataclasses.field(default=None)
    
