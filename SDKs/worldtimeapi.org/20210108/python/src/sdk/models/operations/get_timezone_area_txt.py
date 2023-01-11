import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTimezoneAreaTxtPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaTxtRequest:
    path_params: GetTimezoneAreaTxtPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaTxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_text_response: Optional[str] = dataclasses.field(default=None)
    list_text_response: Optional[str] = dataclasses.field(default=None)
    
