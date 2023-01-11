import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTimezoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_json_response: Optional[list[str]] = dataclasses.field(default=None)
    
