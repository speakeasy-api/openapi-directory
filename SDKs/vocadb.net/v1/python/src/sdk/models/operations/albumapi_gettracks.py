import dataclasses
from typing import Optional
from enum import Enum
from ..shared import songinalbumforapicontract as shared_songinalbumforapicontract


@dataclasses.dataclass
class AlbumAPIGetTracksPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetTracksFieldsEnum(str, Enum):
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

class AlbumAPIGetTracksLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class AlbumAPIGetTracksQueryParams:
    fields: Optional[AlbumAPIGetTracksFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetTracksLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetTracksRequest:
    path_params: AlbumAPIGetTracksPathParams = dataclasses.field()
    query_params: AlbumAPIGetTracksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_in_album_for_api_contracts: Optional[list[shared_songinalbumforapicontract.SongInAlbumForAPIContract]] = dataclasses.field(default=None)
    
