import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetCustomLogoAlt1PathParams:
    logo_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomLogoAlt1Request:
    path_params: GetCustomLogoAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomLogoAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
