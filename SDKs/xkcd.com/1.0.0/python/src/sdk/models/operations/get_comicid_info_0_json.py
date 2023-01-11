import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetComicIDInfo0JSONPathParams:
    comic_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'comicId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetComicIDInfo0JSONRequest:
    path_params: GetComicIDInfo0JSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetComicIDInfo0JSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
