import dataclasses
from typing import Optional
from enum import Enum
from ..shared import albumforapicontract as shared_albumforapicontract


@dataclasses.dataclass
class AlbumAPIGetOnePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetOneFieldsEnum(str, Enum):
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

class AlbumAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class AlbumAPIGetOneSongFieldsEnum(str, Enum):
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


@dataclasses.dataclass
class AlbumAPIGetOneQueryParams:
    fields: Optional[AlbumAPIGetOneFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetOneLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    song_fields: Optional[AlbumAPIGetOneSongFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'songFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetOneRequest:
    path_params: AlbumAPIGetOnePathParams = dataclasses.field()
    query_params: AlbumAPIGetOneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_api_contract: Optional[shared_albumforapicontract.AlbumForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
