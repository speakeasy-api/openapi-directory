import dataclasses
from typing import Optional
from enum import Enum
from ..shared import albumforapicontract as shared_albumforapicontract


@dataclasses.dataclass
class ReleaseEventAPIGetAlbumsPathParams:
    event_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIGetAlbumsFieldsEnum(str, Enum):
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

class ReleaseEventAPIGetAlbumsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class ReleaseEventAPIGetAlbumsQueryParams:
    fields: Optional[ReleaseEventAPIGetAlbumsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetAlbumsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventAPIGetAlbumsRequest:
    path_params: ReleaseEventAPIGetAlbumsPathParams = dataclasses.field()
    query_params: ReleaseEventAPIGetAlbumsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventAPIGetAlbumsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_api_contracts: Optional[list[shared_albumforapicontract.AlbumForAPIContract]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
