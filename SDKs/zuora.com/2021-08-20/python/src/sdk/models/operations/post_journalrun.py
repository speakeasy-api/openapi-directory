import dataclasses
from typing import Optional
from ..shared import postjournalruntype as shared_postjournalruntype
from ..shared import postjournalrunresponsetype as shared_postjournalrunresponsetype


@dataclasses.dataclass
class PostJournalRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostJournalRunRequest:
    headers: PostJournalRunHeaders = dataclasses.field()
    request: shared_postjournalruntype.PostJournalRunType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostJournalRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_journal_run_response_type: Optional[shared_postjournalrunresponsetype.PostJournalRunResponseType] = dataclasses.field(default=None)
    
