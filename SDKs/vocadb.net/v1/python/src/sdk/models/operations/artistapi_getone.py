import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artistforapicontract as shared_artistforapicontract


@dataclasses.dataclass
class ArtistAPIGetOnePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class ArtistAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTIST_LINKS = "ArtistLinks"
    ARTIST_LINKS_REVERSE = "ArtistLinksReverse"
    BASE_VOICEBANK = "BaseVoicebank"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ArtistAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistAPIGetOneRelationsEnum(str, Enum):
    NONE = "None"
    LATEST_ALBUMS = "LatestAlbums"
    LATEST_EVENTS = "LatestEvents"
    LATEST_SONGS = "LatestSongs"
    POPULAR_ALBUMS = "PopularAlbums"
    POPULAR_SONGS = "PopularSongs"
    ALL = "All"


@dataclasses.dataclass
class ArtistAPIGetOneQueryParams:
    fields: Optional[ArtistAPIGetOneFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ArtistAPIGetOneLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    relations: Optional[ArtistAPIGetOneRelationsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ArtistAPIGetOneRequest:
    path_params: ArtistAPIGetOnePathParams = dataclasses.field()
    query_params: ArtistAPIGetOneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ArtistAPIGetOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artist_for_api_contract: Optional[shared_artistforapicontract.ArtistForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
