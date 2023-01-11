import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetPicturesAlt1QueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPicturesAlt1Request:
    query_params: GetPicturesAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPicturesAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
