import dataclasses
from typing import Optional
from ..shared import getjournalruntype as shared_getjournalruntype


@dataclasses.dataclass
class GetJournalRunPathParams:
    jr_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jr-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJournalRunRequest:
    headers: GetJournalRunHeaders = dataclasses.field()
    path_params: GetJournalRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJournalRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_journal_run_type: Optional[shared_getjournalruntype.GetJournalRunType] = dataclasses.field(default=None)
    
