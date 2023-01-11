import dataclasses
from typing import Optional
from ..shared import getcreditmemoitempartscollectiontype as shared_getcreditmemoitempartscollectiontype


@dataclasses.dataclass
class GetCreditMemoItemPartsPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemPartsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreditMemoItemPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemPartsRequest:
    headers: GetCreditMemoItemPartsHeaders = dataclasses.field()
    path_params: GetCreditMemoItemPartsPathParams = dataclasses.field()
    query_params: GetCreditMemoItemPartsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditMemoItemPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_item_parts_collection_type: Optional[shared_getcreditmemoitempartscollectiontype.GetCreditMemoItemPartsCollectionType] = dataclasses.field(default=None)
    
