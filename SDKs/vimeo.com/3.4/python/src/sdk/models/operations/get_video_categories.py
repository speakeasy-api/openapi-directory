import dataclasses
from typing import Optional
from ..shared import category as shared_category
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetVideoCategoriesPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoCategoriesRequest:
    path_params: GetVideoCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
