import dataclasses
from typing import Any,Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutBasicSummaryJournalEntryPathParams:
    je_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'je-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutBasicSummaryJournalEntryHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutBasicSummaryJournalEntryRequest:
    headers: PutBasicSummaryJournalEntryHeaders = dataclasses.field()
    path_params: PutBasicSummaryJournalEntryPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutBasicSummaryJournalEntryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
