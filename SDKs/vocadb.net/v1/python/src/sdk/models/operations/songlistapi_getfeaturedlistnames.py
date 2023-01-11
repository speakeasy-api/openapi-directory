import dataclasses
from typing import Optional
from enum import Enum

class SongListAPIGetFeaturedListNamesFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class SongListAPIGetFeaturedListNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class SongListAPIGetFeaturedListNamesQueryParams:
    featured_category: Optional[SongListAPIGetFeaturedListNamesFeaturedCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featuredCategory', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongListAPIGetFeaturedListNamesNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongListAPIGetFeaturedListNamesRequest:
    query_params: SongListAPIGetFeaturedListNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongListAPIGetFeaturedListNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_list_api_get_featured_list_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    song_list_api_get_featured_list_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    song_list_api_get_featured_list_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
