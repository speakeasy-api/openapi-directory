import dataclasses
from typing import Optional
from enum import Enum
from ..shared import relatedsongscontract as shared_relatedsongscontract


@dataclasses.dataclass
class SongAPIGetRelatedPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetRelatedFieldsEnum(str, Enum):
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

class SongAPIGetRelatedLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class SongAPIGetRelatedQueryParams:
    fields: Optional[SongAPIGetRelatedFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetRelatedLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetRelatedRequest:
    path_params: SongAPIGetRelatedPathParams = dataclasses.field()
    query_params: SongAPIGetRelatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetRelatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    related_songs_contract: Optional[shared_relatedsongscontract.RelatedSongsContract] = dataclasses.field(default=None)
    
