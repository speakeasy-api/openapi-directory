import dataclasses
from typing import Optional
from ..shared import postdecryptiontype as shared_postdecryptiontype
from ..shared import postdecryptresponsetype as shared_postdecryptresponsetype


@dataclasses.dataclass
class PostDecryptRsaSignaturesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDecryptRsaSignaturesRequest:
    headers: PostDecryptRsaSignaturesHeaders = dataclasses.field()
    request: shared_postdecryptiontype.PostDecryptionType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDecryptRsaSignaturesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_decrypt_response_type: Optional[shared_postdecryptresponsetype.PostDecryptResponseType] = dataclasses.field(default=None)
    
