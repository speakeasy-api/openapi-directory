import dataclasses
from enum import Enum

class UserAPIPostRefreshEntryEditEntryTypeEnum(str, Enum):
    UNDEFINED = "Undefined"
    ALBUM = "Album"
    ARTIST = "Artist"
    DISCUSSION_TOPIC = "DiscussionTopic"
    PV = "PV"
    RELEASE_EVENT = "ReleaseEvent"
    RELEASE_EVENT_SERIES = "ReleaseEventSeries"
    SONG = "Song"
    SONG_LIST = "SongList"
    TAG = "Tag"
    USER = "User"
    VENUE = "Venue"


@dataclasses.dataclass
class UserAPIPostRefreshEntryEditQueryParams:
    entry_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'entryId', 'style': 'form', 'explode': True }})
    entry_type: UserAPIPostRefreshEntryEditEntryTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIPostRefreshEntryEditRequest:
    query_params: UserAPIPostRefreshEntryEditQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIPostRefreshEntryEditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
