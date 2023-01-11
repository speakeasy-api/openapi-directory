import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDebitMemoPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoRequest:
    headers: GetDebitMemoHeaders = dataclasses.field()
    path_params: GetDebitMemoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDebitMemoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_debit_memo_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
