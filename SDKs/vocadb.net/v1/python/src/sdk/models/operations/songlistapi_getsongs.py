import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import partialfindresult_songinlistforapicontract_ as shared_partialfindresult_songinlistforapicontract_


@dataclasses.dataclass
class SongListAPIGetSongsPathParams:
    list_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'listId', 'style': 'simple', 'explode': False }})
    
class SongListAPIGetSongsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALBUMS = "Albums"
    ARTISTS = "Artists"
    LYRICS = "Lyrics"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    THUMB_URL = "ThumbUrl"
    WEB_LINKS = "WebLinks"

class SongListAPIGetSongsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongListAPIGetSongsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class SongListAPIGetSongsPvServicesEnum(str, Enum):
    NOTHING = "Nothing"
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"

class SongListAPIGetSongsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    PUBLISH_DATE = "PublishDate"
    FAVORITED_TIMES = "FavoritedTimes"
    RATING_SCORE = "RatingScore"
    TAG_USAGE_COUNT = "TagUsageCount"


@dataclasses.dataclass
class SongListAPIGetSongsQueryParams:
    advanced_filters: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    artist_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[SongListAPIGetSongsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[SongListAPIGetSongsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongListAPIGetSongsNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    pv_services: Optional[SongListAPIGetSongsPvServicesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pvServices', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    song_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'songTypes', 'style': 'form', 'explode': True }})
    sort: Optional[SongListAPIGetSongsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongListAPIGetSongsRequest:
    path_params: SongListAPIGetSongsPathParams = dataclasses.field()
    query_params: SongListAPIGetSongsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongListAPIGetSongsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_song_in_list_for_api_contract_: Optional[shared_partialfindresult_songinlistforapicontract_.PartialFindResultSongInListForAPIContract] = dataclasses.field(default=None)
    
