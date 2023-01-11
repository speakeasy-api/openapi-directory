import dataclasses
from typing import Optional


@dataclasses.dataclass
class ArtistAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArtistAPIDeleteQueryParams:
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ArtistAPIDeleteRequest:
    path_params: ArtistAPIDeletePathParams = dataclasses.field()
    query_params: ArtistAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ArtistAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
