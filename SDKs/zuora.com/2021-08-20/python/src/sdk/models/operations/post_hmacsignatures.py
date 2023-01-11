import dataclasses
from typing import Optional
from ..shared import posthmacsignaturetype as shared_posthmacsignaturetype
from ..shared import posthmacsignatureresponsetype as shared_posthmacsignatureresponsetype


@dataclasses.dataclass
class PostHmacSignaturesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostHmacSignaturesRequest:
    headers: PostHmacSignaturesHeaders = dataclasses.field()
    request: shared_posthmacsignaturetype.PosthmacSignatureType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostHmacSignaturesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    posthmac_signature_response_type: Optional[shared_posthmacsignatureresponsetype.PosthmacSignatureResponseType] = dataclasses.field(default=None)
    
