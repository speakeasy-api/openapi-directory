import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class UserAPIGetSongRatingPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    song_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    
class UserAPIGetSongRating200ApplicationJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRating200ApplicationJsonpEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRating200TextJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclasses.dataclass
class UserAPIGetSongRatingRequest:
    path_params: UserAPIGetSongRatingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetSongRatingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_api_get_song_rating_200_application_json_string_enum: Optional[UserAPIGetSongRating200ApplicationJSONEnum] = dataclasses.field(default=None)
    user_api_get_song_rating_200_application_jsonp_string_enum: Optional[UserAPIGetSongRating200ApplicationJsonpEnum] = dataclasses.field(default=None)
    user_api_get_song_rating_200_text_json_string_enum: Optional[UserAPIGetSongRating200TextJSONEnum] = dataclasses.field(default=None)
    
