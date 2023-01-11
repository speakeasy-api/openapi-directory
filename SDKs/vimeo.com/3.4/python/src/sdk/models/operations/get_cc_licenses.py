import dataclasses
from typing import Optional
from ..shared import creative_commons as shared_creative_commons


@dataclasses.dataclass
class GetCcLicensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creative_commons: Optional[list[shared_creative_commons.CreativeCommons]] = dataclasses.field(default=None)
    
