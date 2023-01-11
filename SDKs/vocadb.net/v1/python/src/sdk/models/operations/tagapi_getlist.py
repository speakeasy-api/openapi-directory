import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_tagforapicontract_ as shared_partialfindresult_tagforapicontract_

class TagAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALIASED_TO = "AliasedTo"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    PARENT = "Parent"
    RELATED_TAGS = "RelatedTags"
    TRANSLATED_DESCRIPTION = "TranslatedDescription"
    WEB_LINKS = "WebLinks"

class TagAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class TagAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class TagAPIGetListSortEnum(str, Enum):
    NOTHING = "Nothing"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    USAGE_COUNT = "UsageCount"

class TagAPIGetListTargetEnum(str, Enum):
    NOTHING = "Nothing"
    ALBUM = "Album"
    ARTIST = "Artist"
    ALBUM_ARTIST = "AlbumArtist"
    EVENT = "Event"
    SONG = "Song"
    ALBUM_SONG = "AlbumSong"
    ARTIST_SONG = "ArtistSong"
    ALL = "All"


@dataclasses.dataclass
class TagAPIGetListQueryParams:
    allow_children: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowChildren', 'style': 'form', 'explode': True }})
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryName', 'style': 'form', 'explode': True }})
    fields: Optional[TagAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[TagAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    prefer_accurate_matches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preferAccurateMatches', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[TagAPIGetListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    target: Optional[TagAPIGetListTargetEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetListRequest:
    query_params: TagAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_tag_for_api_contract_: Optional[shared_partialfindresult_tagforapicontract_.PartialFindResultTagForAPIContract] = dataclasses.field(default=None)
    
