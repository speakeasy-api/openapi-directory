import dataclasses
from typing import Optional
from ..shared import postinvoiceemailrequesttype as shared_postinvoiceemailrequesttype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PostEmailInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailInvoiceRequest:
    headers: PostEmailInvoiceHeaders = dataclasses.field()
    path_params: PostEmailInvoicePathParams = dataclasses.field()
    request: shared_postinvoiceemailrequesttype.PostInvoiceEmailRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEmailInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
