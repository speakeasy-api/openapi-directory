import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class AlbumAPIGetTracksFieldsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetTracksFieldsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class AlbumAPIGetTracksFieldsQueryParams:
    disc_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'discNumber', 'style': 'form', 'explode': True }})
    field: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetTracksFieldsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetTracksFieldsRequest:
    path_params: AlbumAPIGetTracksFieldsPathParams = dataclasses.field()
    query_params: AlbumAPIGetTracksFieldsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetTracksFieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_api_get_tracks_fields_200_application_json_objects: Optional[list[dict[str, str]]] = dataclasses.field(default=None)
    album_api_get_tracks_fields_200_application_jsonp_objects: Optional[list[dict[str, str]]] = dataclasses.field(default=None)
    album_api_get_tracks_fields_200_text_json_objects: Optional[list[dict[str, str]]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
