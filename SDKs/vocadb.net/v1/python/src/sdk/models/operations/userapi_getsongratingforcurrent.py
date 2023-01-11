import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class UserAPIGetSongRatingForCurrentPathParams:
    song_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    
class UserAPIGetSongRatingForCurrent200ApplicationJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRatingForCurrent200TextJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclasses.dataclass
class UserAPIGetSongRatingForCurrentRequest:
    path_params: UserAPIGetSongRatingForCurrentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetSongRatingForCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_api_get_song_rating_for_current_200_application_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJSONEnum] = dataclasses.field(default=None)
    user_api_get_song_rating_for_current_200_application_jsonp_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum] = dataclasses.field(default=None)
    user_api_get_song_rating_for_current_200_text_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200TextJSONEnum] = dataclasses.field(default=None)
    
