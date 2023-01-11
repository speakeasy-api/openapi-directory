import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class AddVideoToPortfolioAlt1PathParams:
    portfolio_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoToPortfolioAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoToPortfolioAlt1Request:
    path_params: AddVideoToPortfolioAlt1PathParams = dataclasses.field()
    security: AddVideoToPortfolioAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoToPortfolioAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
