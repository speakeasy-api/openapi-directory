import dataclasses
from typing import Optional
from ..shared import posttaxationitemlistforcmtype as shared_posttaxationitemlistforcmtype
from ..shared import gettaxationitemlisttype as shared_gettaxationitemlisttype


@dataclasses.dataclass
class PostCmTaxationItemsPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCmTaxationItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCmTaxationItemsRequest:
    headers: PostCmTaxationItemsHeaders = dataclasses.field()
    path_params: PostCmTaxationItemsPathParams = dataclasses.field()
    request: shared_posttaxationitemlistforcmtype.PostTaxationItemListForCmType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCmTaxationItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_taxation_item_list_type: Optional[shared_gettaxationitemlisttype.GetTaxationItemListType] = dataclasses.field(default=None)
    
