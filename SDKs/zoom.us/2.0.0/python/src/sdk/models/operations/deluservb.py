import dataclasses
from typing import Optional


@dataclasses.dataclass
class DelUserVbPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DelUserVbQueryParams:
    file_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DelUserVbRequest:
    path_params: DelUserVbPathParams = dataclasses.field()
    query_params: DelUserVbQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DelUserVbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
