import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReleaseEventAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReleaseEventAPIDeleteQueryParams:
    hard_delete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventAPIDeleteRequest:
    path_params: ReleaseEventAPIDeletePathParams = dataclasses.field()
    query_params: ReleaseEventAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
