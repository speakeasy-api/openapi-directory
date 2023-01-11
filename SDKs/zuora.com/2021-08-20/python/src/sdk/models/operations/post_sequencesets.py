import dataclasses
from typing import Optional
from ..shared import postsequencesetsrequest as shared_postsequencesetsrequest
from ..shared import postsequencesetsresponse as shared_postsequencesetsresponse


@dataclasses.dataclass
class PostSequenceSetsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSequenceSetsRequest:
    headers: PostSequenceSetsHeaders = dataclasses.field()
    request: shared_postsequencesetsrequest.PostSequenceSetsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSequenceSetsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_sequence_sets_response: Optional[shared_postsequencesetsresponse.PostSequenceSetsResponse] = dataclasses.field(default=None)
    
