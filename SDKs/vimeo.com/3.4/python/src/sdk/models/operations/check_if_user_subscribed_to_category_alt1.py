import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class CheckIfUserSubscribedToCategoryAlt1PathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserSubscribedToCategoryAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CheckIfUserSubscribedToCategoryAlt1Request:
    path_params: CheckIfUserSubscribedToCategoryAlt1PathParams = dataclasses.field()
    security: CheckIfUserSubscribedToCategoryAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserSubscribedToCategoryAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
