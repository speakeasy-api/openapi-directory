import dataclasses
from typing import Optional
from enum import Enum

class AlbumAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class AlbumAPIGetNamesQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[AlbumAPIGetNamesNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetNamesRequest:
    query_params: AlbumAPIGetNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_api_get_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    album_api_get_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    album_api_get_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
