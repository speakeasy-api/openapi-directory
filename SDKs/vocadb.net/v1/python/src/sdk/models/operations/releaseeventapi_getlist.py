import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_releaseeventforapicontract_ as shared_partialfindresult_releaseeventforapicontract_

class ReleaseEventAPIGetListCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    SERIES = "Series"
    SONG_LIST = "SongList"
    TAGS = "Tags"
    VENUE = "Venue"
    WEB_LINKS = "WebLinks"

class ReleaseEventAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ReleaseEventAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class ReleaseEventAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE = "Date"
    ADDITION_DATE = "AdditionDate"
    SERIES_NAME = "SeriesName"
    VENUE_NAME = "VenueName"

class ReleaseEventAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclasses.dataclass
class ReleaseEventAPIGetListQueryParams:
    after_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    artist_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    before_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beforeDate', 'style': 'form', 'explode': True }})
    category: Optional[ReleaseEventAPIGetListCategoryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[ReleaseEventAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    include_members: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeMembers', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ReleaseEventAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    series_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seriesId', 'style': 'form', 'explode': True }})
    sort: Optional[ReleaseEventAPIGetListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[ReleaseEventAPIGetListStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    user_collection_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userCollectionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventAPIGetListRequest:
    query_params: ReleaseEventAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_release_event_for_api_contract_: Optional[shared_partialfindresult_releaseeventforapicontract_.PartialFindResultReleaseEventForAPIContract] = dataclasses.field(default=None)
    
