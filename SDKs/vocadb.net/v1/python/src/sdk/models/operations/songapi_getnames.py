import dataclasses
from typing import Optional
from enum import Enum

class SongAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class SongAPIGetNamesQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongAPIGetNamesNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetNamesRequest:
    query_params: SongAPIGetNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_api_get_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    song_api_get_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    song_api_get_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
