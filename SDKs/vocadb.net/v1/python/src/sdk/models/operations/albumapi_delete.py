import dataclasses
from typing import Optional


@dataclasses.dataclass
class AlbumAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AlbumAPIDeleteQueryParams:
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIDeleteRequest:
    path_params: AlbumAPIDeletePathParams = dataclasses.field()
    query_params: AlbumAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
