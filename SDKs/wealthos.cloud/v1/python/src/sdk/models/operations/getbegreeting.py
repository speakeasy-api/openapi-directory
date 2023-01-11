import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBeGreetingSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetBeGreetingRequest:
    security: GetBeGreetingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBeGreetingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_be_greeting_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_be_greeting_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_be_greeting_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_be_greeting_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
