import dataclasses
from typing import Optional
from ..shared import commentforapicontract as shared_commentforapicontract


@dataclasses.dataclass
class SongAPIGetCommentsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongAPIGetCommentsRequest:
    path_params: SongAPIGetCommentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    comment_for_api_contracts: Optional[list[shared_commentforapicontract.CommentForAPIContract]] = dataclasses.field(default=None)
    
