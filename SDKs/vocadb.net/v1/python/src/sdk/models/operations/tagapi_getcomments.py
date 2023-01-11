import dataclasses
from typing import Optional
from ..shared import partialfindresult_commentforapicontract_ as shared_partialfindresult_commentforapicontract_


@dataclasses.dataclass
class TagAPIGetCommentsPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagAPIGetCommentsRequest:
    path_params: TagAPIGetCommentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared_partialfindresult_commentforapicontract_.PartialFindResultCommentForAPIContract] = dataclasses.field(default=None)
    
