import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ratedsongforuserforapicontract as shared_ratedsongforuserforapicontract


@dataclasses.dataclass
class SongAPIGetRatingsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetRatingsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetRatingsUserFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclasses.dataclass
class SongAPIGetRatingsQueryParams:
    user_fields: SongAPIGetRatingsUserFieldsEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'userFields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetRatingsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SongAPIGetRatingsRequest:
    path_params: SongAPIGetRatingsPathParams = dataclasses.field()
    query_params: SongAPIGetRatingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetRatingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    rated_song_for_user_for_api_contracts: Optional[list[shared_ratedsongforuserforapicontract.RatedSongForUserForAPIContract]] = dataclasses.field(default=None)
    
