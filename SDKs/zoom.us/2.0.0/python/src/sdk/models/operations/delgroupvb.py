import dataclasses
from typing import Optional


@dataclasses.dataclass
class DelGroupVbPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DelGroupVbQueryParams:
    file_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DelGroupVbRequest:
    path_params: DelGroupVbPathParams = dataclasses.field()
    query_params: DelGroupVbQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DelGroupVbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
