import dataclasses
from typing import Optional
from enum import Enum

class UserAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class UserAPIGetNamesQueryParams:
    include_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeDisabled', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetNamesNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetNamesRequest:
    query_params: UserAPIGetNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_api_get_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    user_api_get_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    user_api_get_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
