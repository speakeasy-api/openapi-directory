import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetCustomLogosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
