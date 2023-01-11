import dataclasses
from typing import Optional
from enum import Enum
from ..shared import songforapicontract as shared_songforapicontract

class SongAPIGetByPvFieldsEnum(str, Enum):
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

class SongAPIGetByPvLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetByPvPvServiceEnum(str, Enum):
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


@dataclasses.dataclass
class SongAPIGetByPvQueryParams:
    pv_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pvId', 'style': 'form', 'explode': True }})
    pv_service: SongAPIGetByPvPvServiceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'pvService', 'style': 'form', 'explode': True }})
    fields: Optional[SongAPIGetByPvFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetByPvLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetByPvRequest:
    query_params: SongAPIGetByPvQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetByPvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    song_for_api_contract: Optional[shared_songforapicontract.SongForAPIContract] = dataclasses.field(default=None)
    
