import dataclasses
from typing import Optional


@dataclasses.dataclass
class SongListAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongListAPIDeleteQueryParams:
    hard_delete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongListAPIDeleteRequest:
    path_params: SongListAPIDeletePathParams = dataclasses.field()
    query_params: SongListAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongListAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
