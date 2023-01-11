import dataclasses
from typing import Optional
from ..shared import posttaxationitemlistfordmtype as shared_posttaxationitemlistfordmtype
from ..shared import gettaxationitemlisttype as shared_gettaxationitemlisttype


@dataclasses.dataclass
class PostDmTaxationItemsPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDmTaxationItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDmTaxationItemsRequest:
    headers: PostDmTaxationItemsHeaders = dataclasses.field()
    path_params: PostDmTaxationItemsPathParams = dataclasses.field()
    request: shared_posttaxationitemlistfordmtype.PostTaxationItemListForDmType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDmTaxationItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_taxation_item_list_type: Optional[shared_gettaxationitemlisttype.GetTaxationItemListType] = dataclasses.field(default=None)
    
