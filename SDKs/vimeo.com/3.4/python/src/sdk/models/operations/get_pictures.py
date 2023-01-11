import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetPicturesPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPicturesQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPicturesRequest:
    path_params: GetPicturesPathParams = dataclasses.field()
    query_params: GetPicturesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPicturesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
