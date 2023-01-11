import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UnsubscribeFromCategoryAlt1PathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnsubscribeFromCategoryAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnsubscribeFromCategoryAlt1Request:
    path_params: UnsubscribeFromCategoryAlt1PathParams = dataclasses.field()
    security: UnsubscribeFromCategoryAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class UnsubscribeFromCategoryAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
