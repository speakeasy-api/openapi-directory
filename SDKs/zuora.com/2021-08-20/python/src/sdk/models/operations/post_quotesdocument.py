import dataclasses
from typing import Optional
from ..shared import postquotedoctype as shared_postquotedoctype
from ..shared import postquotedocresponsetype as shared_postquotedocresponsetype


@dataclasses.dataclass
class PostQuotesDocumentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostQuotesDocumentRequest:
    headers: PostQuotesDocumentHeaders = dataclasses.field()
    request: shared_postquotedoctype.PostQuoteDocType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostQuotesDocumentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_quote_doc_response_type: Optional[shared_postquotedocresponsetype.PostQuoteDocResponseType] = dataclasses.field(default=None)
    
