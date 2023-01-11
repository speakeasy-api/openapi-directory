import dataclasses
from typing import Optional
from ..shared import postmemopdfresponse as shared_postmemopdfresponse


@dataclasses.dataclass
class PostDebitMemoPdfPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDebitMemoPdfHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDebitMemoPdfRequest:
    headers: PostDebitMemoPdfHeaders = dataclasses.field()
    path_params: PostDebitMemoPdfPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostDebitMemoPdfResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_memo_pdf_response: Optional[shared_postmemopdfresponse.PostMemoPdfResponse] = dataclasses.field(default=None)
    
