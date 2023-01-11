import dataclasses
from typing import Optional


@dataclasses.dataclass
class SongAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongAPIDeleteQueryParams:
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIDeleteRequest:
    path_params: SongAPIDeletePathParams = dataclasses.field()
    query_params: SongAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
