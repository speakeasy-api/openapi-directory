import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetPictureAlt1PathParams:
    portraitset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPictureAlt1Request:
    path_params: GetPictureAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPictureAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
