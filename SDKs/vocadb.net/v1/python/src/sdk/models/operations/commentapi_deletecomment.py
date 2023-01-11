import dataclasses
from enum import Enum

class CommentAPIDeleteCommentEntryTypeEnum(str, Enum):
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
class CommentAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    entry_type: CommentAPIDeleteCommentEntryTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommentAPIDeleteCommentRequest:
    path_params: CommentAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CommentAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
