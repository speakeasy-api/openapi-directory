import dataclasses
from typing import Optional
from enum import Enum
from ..shared import discussiontopiccontract as shared_discussiontopiccontract


@dataclasses.dataclass
class DiscussionAPIGetTopicsForFolderPathParams:
    folder_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    
class DiscussionAPIGetTopicsForFolderFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"


@dataclasses.dataclass
class DiscussionAPIGetTopicsForFolderQueryParams:
    fields: Optional[DiscussionAPIGetTopicsForFolderFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DiscussionAPIGetTopicsForFolderRequest:
    path_params: DiscussionAPIGetTopicsForFolderPathParams = dataclasses.field()
    query_params: DiscussionAPIGetTopicsForFolderQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIGetTopicsForFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    discussion_topic_contracts: Optional[list[shared_discussiontopiccontract.DiscussionTopicContract]] = dataclasses.field(default=None)
    
