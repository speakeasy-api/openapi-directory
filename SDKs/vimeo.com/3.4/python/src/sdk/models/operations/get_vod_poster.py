import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVodPosterPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    poster_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'poster_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodPosterRequest:
    path_params: GetVodPosterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodPosterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
