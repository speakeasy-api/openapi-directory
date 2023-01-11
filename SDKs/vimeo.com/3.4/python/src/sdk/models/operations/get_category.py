import dataclasses
from typing import Optional
from ..shared import category as shared_category
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetCategoryPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoryRequest:
    path_params: GetCategoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category: Optional[shared_category.Category] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
