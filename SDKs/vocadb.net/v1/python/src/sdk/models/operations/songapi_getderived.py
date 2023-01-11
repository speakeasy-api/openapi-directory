import dataclasses
from typing import Optional
from enum import Enum
from ..shared import songforapicontract as shared_songforapicontract


@dataclasses.dataclass
class SongAPIGetDerivedPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetDerivedFieldsEnum(str, Enum):
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

class SongAPIGetDerivedLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class SongAPIGetDerivedQueryParams:
    fields: Optional[SongAPIGetDerivedFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetDerivedLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetDerivedRequest:
    path_params: SongAPIGetDerivedPathParams = dataclasses.field()
    query_params: SongAPIGetDerivedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetDerivedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_for_api_contracts: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None)
    
