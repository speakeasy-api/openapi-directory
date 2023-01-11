import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class SubscribeToCategoryPathParams:
    category: float = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscribeToCategorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SubscribeToCategoryRequest:
    path_params: SubscribeToCategoryPathParams = dataclasses.field()
    security: SubscribeToCategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class SubscribeToCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
