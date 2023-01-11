import dataclasses
from typing import Optional
from ..shared import getjournalentriesinjournalruntype as shared_getjournalentriesinjournalruntype


@dataclasses.dataclass
class GetAllSummaryJournalEntriesPathParams:
    jr_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jr-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllSummaryJournalEntriesQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllSummaryJournalEntriesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllSummaryJournalEntriesRequest:
    headers: GetAllSummaryJournalEntriesHeaders = dataclasses.field()
    path_params: GetAllSummaryJournalEntriesPathParams = dataclasses.field()
    query_params: GetAllSummaryJournalEntriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllSummaryJournalEntriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_journal_entries_in_journal_run_type: Optional[shared_getjournalentriesinjournalruntype.GetJournalEntriesInJournalRunType] = dataclasses.field(default=None)
    
