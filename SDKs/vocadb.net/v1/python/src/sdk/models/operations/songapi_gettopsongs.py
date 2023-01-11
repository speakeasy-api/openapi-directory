import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import songforapicontract as shared_songforapicontract

class SongAPIGetTopSongsFieldsEnum(str, Enum):
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

class SongAPIGetTopSongsFilterByEnum(str, Enum):
    CREATE_DATE = "CreateDate"
    PUBLISH_DATE = "PublishDate"
    POPULARITY = "Popularity"

class SongAPIGetTopSongsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetTopSongsVocalistEnum(str, Enum):
    NOTHING = "Nothing"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    OTHER = "Other"


@dataclasses.dataclass
class SongAPIGetTopSongsQueryParams:
    duration_hours: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'durationHours', 'style': 'form', 'explode': True }})
    fields: Optional[SongAPIGetTopSongsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter_by: Optional[SongAPIGetTopSongsFilterByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filterBy', 'style': 'form', 'explode': True }})
    language_preference: Optional[SongAPIGetTopSongsLanguagePreferenceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    vocalist: Optional[SongAPIGetTopSongsVocalistEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vocalist', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetTopSongsRequest:
    query_params: SongAPIGetTopSongsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetTopSongsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_for_api_contracts: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None)
    
