import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_commentforapicontract_ as shared_partialfindresult_commentforapicontract_

class CommentAPIGetCommentsEntryTypeEnum(str, Enum):
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
class CommentAPIGetCommentsPathParams:
    entry_type: CommentAPIGetCommentsEntryTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommentAPIGetCommentsQueryParams:
    entry_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'entryId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CommentAPIGetCommentsRequest:
    path_params: CommentAPIGetCommentsPathParams = dataclasses.field()
    query_params: CommentAPIGetCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CommentAPIGetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared_partialfindresult_commentforapicontract_.PartialFindResultCommentForAPIContract] = dataclasses.field(default=None)
    
