import dataclasses
from typing import Optional
from enum import Enum
from ..shared import albumforapicontract as shared_albumforapicontract

class AlbumAPIGetNewAlbumsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    DISCS = "Discs"
    IDENTIFIERS = "Identifiers"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    TRACKS = "Tracks"
    WEB_LINKS = "WebLinks"

class AlbumAPIGetNewAlbumsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class AlbumAPIGetNewAlbumsQueryParams:
    fields: Optional[AlbumAPIGetNewAlbumsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    language_preference: Optional[AlbumAPIGetNewAlbumsLanguagePreferenceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetNewAlbumsRequest:
    query_params: AlbumAPIGetNewAlbumsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetNewAlbumsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_api_contracts: Optional[list[shared_albumforapicontract.AlbumForAPIContract]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
