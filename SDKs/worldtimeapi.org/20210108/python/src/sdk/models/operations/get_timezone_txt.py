import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTimezoneTxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_text_response: Optional[str] = dataclasses.field(default=None)
    
