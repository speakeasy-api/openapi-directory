import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPITokenStatusHeaders:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPITokenStatusRequest:
    headers: GetAPITokenStatusHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPITokenStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
