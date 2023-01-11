import dataclasses
from typing import Optional
from ..shared import getinvoicefilewrapper as shared_getinvoicefilewrapper


@dataclasses.dataclass
class GetTransactionInvoicePathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionInvoiceQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionInvoiceRequest:
    headers: GetTransactionInvoiceHeaders = dataclasses.field()
    path_params: GetTransactionInvoicePathParams = dataclasses.field()
    query_params: GetTransactionInvoiceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_file_wrapper: Optional[shared_getinvoicefilewrapper.GetInvoiceFileWrapper] = dataclasses.field(default=None)
    
