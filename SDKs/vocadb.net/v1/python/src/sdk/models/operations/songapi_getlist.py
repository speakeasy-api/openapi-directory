import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import partialfindresult_songforapicontract_ as shared_partialfindresult_songforapicontract_

class SongAPIGetListArtistParticipationStatusEnum(str, Enum):
    EVERYTHING = "Everything"
    ONLY_MAIN_ALBUMS = "OnlyMainAlbums"
    ONLY_COLLABORATIONS = "OnlyCollaborations"

class SongAPIGetListFieldsEnum(str, Enum):
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

class SongAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class SongAPIGetListPvServicesEnum(str, Enum):
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

class SongAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    PUBLISH_DATE = "PublishDate"
    FAVORITED_TIMES = "FavoritedTimes"
    RATING_SCORE = "RatingScore"
    TAG_USAGE_COUNT = "TagUsageCount"

class SongAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclasses.dataclass
class SongAPIGetListQueryParams:
    advanced_filters: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    after_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    artist_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    artist_participation_status: Optional[SongAPIGetListArtistParticipationStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistParticipationStatus', 'style': 'form', 'explode': True }})
    before_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beforeDate', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[SongAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    include_members: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeMembers', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_score: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minScore', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    only_with_pvs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyWithPvs', 'style': 'form', 'explode': True }})
    parent_song_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parentSongId', 'style': 'form', 'explode': True }})
    prefer_accurate_matches: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preferAccurateMatches', 'style': 'form', 'explode': True }})
    pv_services: Optional[SongAPIGetListPvServicesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pvServices', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    release_event_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'releaseEventId', 'style': 'form', 'explode': True }})
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    song_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'songTypes', 'style': 'form', 'explode': True }})
    sort: Optional[SongAPIGetListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[SongAPIGetListStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    unify_types_and_tags: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unifyTypesAndTags', 'style': 'form', 'explode': True }})
    user_collection_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userCollectionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetListRequest:
    query_params: SongAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_song_for_api_contract_: Optional[shared_partialfindresult_songforapicontract_.PartialFindResultSongForAPIContract] = dataclasses.field(default=None)
    
