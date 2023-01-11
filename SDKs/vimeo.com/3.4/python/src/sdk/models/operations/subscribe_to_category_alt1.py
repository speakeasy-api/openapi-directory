import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class SubscribeToCategoryAlt1PathParams:
    category: float = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscribeToCategoryAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SubscribeToCategoryAlt1Request:
    path_params: SubscribeToCategoryAlt1PathParams = dataclasses.field()
    security: SubscribeToCategoryAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class SubscribeToCategoryAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
