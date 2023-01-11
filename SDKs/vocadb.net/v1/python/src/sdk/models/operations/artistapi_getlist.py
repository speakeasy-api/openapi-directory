import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import partialfindresult_artistforapicontract_ as shared_partialfindresult_artistforapicontract_

class ArtistAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTIST_LINKS = "ArtistLinks"
    ARTIST_LINKS_REVERSE = "ArtistLinksReverse"
    BASE_VOICEBANK = "BaseVoicebank"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ArtistAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class ArtistAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    ADDITION_DATE_ASC = "AdditionDateAsc"
    RELEASE_DATE = "ReleaseDate"
    SONG_COUNT = "SongCount"
    SONG_RATING = "SongRating"
    FOLLOWER_COUNT = "FollowerCount"

class ArtistAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclasses.dataclass
class ArtistAPIGetListQueryParams:
    advanced_filters: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    allow_base_voicebanks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowBaseVoicebanks', 'style': 'form', 'explode': True }})
    artist_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistTypes', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    fields: Optional[ArtistAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    followed_by_user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'followedByUserId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ArtistAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ArtistAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    prefer_accurate_matches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preferAccurateMatches', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[ArtistAPIGetListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[ArtistAPIGetListStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ArtistAPIGetListRequest:
    query_params: ArtistAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ArtistAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_artist_for_api_contract_: Optional[shared_partialfindresult_artistforapicontract_.PartialFindResultArtistForAPIContract] = dataclasses.field(default=None)
    
