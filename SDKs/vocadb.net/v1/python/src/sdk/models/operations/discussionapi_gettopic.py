import dataclasses
from typing import Optional
from enum import Enum
from ..shared import discussiontopiccontract as shared_discussiontopiccontract


@dataclasses.dataclass
class DiscussionAPIGetTopicPathParams:
    topic_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    
class DiscussionAPIGetTopicFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"


@dataclasses.dataclass
class DiscussionAPIGetTopicQueryParams:
    fields: Optional[DiscussionAPIGetTopicFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DiscussionAPIGetTopicRequest:
    path_params: DiscussionAPIGetTopicPathParams = dataclasses.field()
    query_params: DiscussionAPIGetTopicQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIGetTopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    discussion_topic_contract: Optional[shared_discussiontopiccontract.DiscussionTopicContract] = dataclasses.field(default=None)
    
