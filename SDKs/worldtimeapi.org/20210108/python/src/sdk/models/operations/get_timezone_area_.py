import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTimezoneAreaPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaRequest:
    path_params: GetTimezoneAreaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_json_response: Optional[Any] = dataclasses.field(default=None)
    list_json_response: Optional[list[str]] = dataclasses.field(default=None)
    
