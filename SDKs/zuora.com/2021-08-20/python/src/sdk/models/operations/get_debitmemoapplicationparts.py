import dataclasses
from typing import Optional
from ..shared import getdebitmemoapplicationpartcollectiontype as shared_getdebitmemoapplicationpartcollectiontype


@dataclasses.dataclass
class GetDebitMemoApplicationPartsPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoApplicationPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDebitMemoApplicationPartsRequest:
    headers: GetDebitMemoApplicationPartsHeaders = dataclasses.field()
    path_params: GetDebitMemoApplicationPartsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDebitMemoApplicationPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_debit_memo_application_part_collection_type: Optional[shared_getdebitmemoapplicationpartcollectiontype.GetDebitMemoApplicationPartCollectionType] = dataclasses.field(default=None)
    
