import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_discussiontopiccontract_ as shared_partialfindresult_discussiontopiccontract_

class DiscussionAPIGetTopicsFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"

class DiscussionAPIGetTopicsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE_CREATED = "DateCreated"
    LAST_COMMENT_DATE = "LastCommentDate"


@dataclasses.dataclass
class DiscussionAPIGetTopicsQueryParams:
    fields: Optional[DiscussionAPIGetTopicsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    folder_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'folderId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    sort: Optional[DiscussionAPIGetTopicsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DiscussionAPIGetTopicsRequest:
    query_params: DiscussionAPIGetTopicsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIGetTopicsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_discussion_topic_contract_: Optional[shared_partialfindresult_discussiontopiccontract_.PartialFindResultDiscussionTopicContract] = dataclasses.field(default=None)
    
