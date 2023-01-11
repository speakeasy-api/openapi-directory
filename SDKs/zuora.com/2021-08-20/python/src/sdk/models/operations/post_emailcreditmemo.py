import dataclasses
from typing import Optional
from ..shared import postcreditmemoemailrequesttype as shared_postcreditmemoemailrequesttype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PostEmailCreditMemoPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailCreditMemoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailCreditMemoRequest:
    headers: PostEmailCreditMemoHeaders = dataclasses.field()
    path_params: PostEmailCreditMemoPathParams = dataclasses.field()
    request: shared_postcreditmemoemailrequesttype.PostCreditMemoEmailRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEmailCreditMemoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
