import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import partialfindresult_ratedsongforuserforapicontract_ as shared_partialfindresult_ratedsongforuserforapicontract_


@dataclasses.dataclass
class UserAPIGetRatedSongsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetRatedSongsArtistGroupingEnum(str, Enum):
    AND = "And"
    OR = "Or"

class UserAPIGetRatedSongsFieldsEnum(str, Enum):
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

class UserAPIGetRatedSongsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class UserAPIGetRatedSongsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class UserAPIGetRatedSongsPvServicesEnum(str, Enum):
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

class UserAPIGetRatedSongsRatingEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetRatedSongsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    PUBLISH_DATE = "PublishDate"
    FAVORITED_TIMES = "FavoritedTimes"
    RATING_SCORE = "RatingScore"
    RATING_DATE = "RatingDate"


@dataclasses.dataclass
class UserAPIGetRatedSongsQueryParams:
    advanced_filters: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    artist_grouping: Optional[UserAPIGetRatedSongsArtistGroupingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistGrouping', 'style': 'form', 'explode': True }})
    artist_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[UserAPIGetRatedSongsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    group_by_rating: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupByRating', 'style': 'form', 'explode': True }})
    lang: Optional[UserAPIGetRatedSongsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetRatedSongsNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    pv_services: Optional[UserAPIGetRatedSongsPvServicesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pvServices', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    rating: Optional[UserAPIGetRatedSongsRatingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    song_list_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'songListId', 'style': 'form', 'explode': True }})
    sort: Optional[UserAPIGetRatedSongsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetRatedSongsRequest:
    path_params: UserAPIGetRatedSongsPathParams = dataclasses.field()
    query_params: UserAPIGetRatedSongsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetRatedSongsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_rated_song_for_user_for_api_contract_: Optional[shared_partialfindresult_ratedsongforuserforapicontract_.PartialFindResultRatedSongForUserForAPIContract] = dataclasses.field(default=None)
    
