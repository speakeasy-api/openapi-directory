import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetTagPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagRequest:
    path_params: GetTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
