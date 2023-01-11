import dataclasses
from typing import Optional
from enum import Enum
from ..shared import albumforuserforapicontract as shared_albumforuserforapicontract


@dataclasses.dataclass
class AlbumAPIGetUserCollectionsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetUserCollectionsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class AlbumAPIGetUserCollectionsQueryParams:
    language_preference: Optional[AlbumAPIGetUserCollectionsLanguagePreferenceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetUserCollectionsRequest:
    path_params: AlbumAPIGetUserCollectionsPathParams = dataclasses.field()
    query_params: AlbumAPIGetUserCollectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetUserCollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_user_for_api_contracts: Optional[list[shared_albumforuserforapicontract.AlbumForUserForAPIContract]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
