import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UnsubscribeFromCategoryPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnsubscribeFromCategorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnsubscribeFromCategoryRequest:
    path_params: UnsubscribeFromCategoryPathParams = dataclasses.field()
    security: UnsubscribeFromCategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnsubscribeFromCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
