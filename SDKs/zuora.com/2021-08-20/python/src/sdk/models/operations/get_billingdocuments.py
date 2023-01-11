import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum1 as shared_global_request_pagesize_enum1
from ..shared import billingdocumentqueryresponseelementtype as shared_billingdocumentqueryresponseelementtype


@dataclasses.dataclass
class GetBillingDocumentsQueryParams:
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    document_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'documentDate', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_global_request_pagesize_enum1.GlobalRequestPageSizeEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBillingDocumentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingDocumentsRequest:
    headers: GetBillingDocumentsHeaders = dataclasses.field()
    query_params: GetBillingDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBillingDocumentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    billing_document_query_response_element_type: Optional[shared_billingdocumentqueryresponseelementtype.BillingDocumentQueryResponseElementType] = dataclasses.field(default=None)
    
