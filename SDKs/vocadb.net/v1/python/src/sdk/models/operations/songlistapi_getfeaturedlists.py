import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_songlistforapicontract_ as shared_partialfindresult_songlistforapicontract_

class SongListAPIGetFeaturedListsFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class SongListAPIGetFeaturedListsFieldsEnum(str, Enum):
    NONE = "None"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    TAGS = "Tags"

class SongListAPIGetFeaturedListsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongListAPIGetFeaturedListsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class SongListAPIGetFeaturedListsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE = "Date"
    CREATE_DATE = "CreateDate"


@dataclasses.dataclass
class SongListAPIGetFeaturedListsQueryParams:
    child_tags: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    featured_category: Optional[SongListAPIGetFeaturedListsFeaturedCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featuredCategory', 'style': 'form', 'explode': True }})
    fields: Optional[SongListAPIGetFeaturedListsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[SongListAPIGetFeaturedListsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongListAPIGetFeaturedListsNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[SongListAPIGetFeaturedListsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongListAPIGetFeaturedListsRequest:
    query_params: SongListAPIGetFeaturedListsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongListAPIGetFeaturedListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_song_list_for_api_contract_: Optional[shared_partialfindresult_songlistforapicontract_.PartialFindResultSongListForAPIContract] = dataclasses.field(default=None)
    
