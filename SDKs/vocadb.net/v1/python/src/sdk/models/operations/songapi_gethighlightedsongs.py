import dataclasses
from typing import Optional
from enum import Enum
from ..shared import songforapicontract as shared_songforapicontract

class SongAPIGetHighlightedSongsFieldsEnum(str, Enum):
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

class SongAPIGetHighlightedSongsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class SongAPIGetHighlightedSongsQueryParams:
    fields: Optional[SongAPIGetHighlightedSongsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    language_preference: Optional[SongAPIGetHighlightedSongsLanguagePreferenceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetHighlightedSongsRequest:
    query_params: SongAPIGetHighlightedSongsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetHighlightedSongsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_for_api_contracts: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None)
    
