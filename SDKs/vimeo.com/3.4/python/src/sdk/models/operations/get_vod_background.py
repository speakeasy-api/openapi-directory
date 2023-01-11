import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVodBackgroundPathParams:
    background_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'background_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodBackgroundRequest:
    path_params: GetVodBackgroundPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodBackgroundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
