import dataclasses
from typing import Optional
from ..shared import postrsasignaturetype as shared_postrsasignaturetype
from ..shared import postrsasignatureresponsetype as shared_postrsasignatureresponsetype


@dataclasses.dataclass
class PostRsaSignaturesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRsaSignaturesRequest:
    headers: PostRsaSignaturesHeaders = dataclasses.field()
    request: shared_postrsasignaturetype.PostrsaSignatureType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRsaSignaturesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    postrsa_signature_response_type: Optional[shared_postrsasignatureresponsetype.PostrsaSignatureResponseType] = dataclasses.field(default=None)
    
