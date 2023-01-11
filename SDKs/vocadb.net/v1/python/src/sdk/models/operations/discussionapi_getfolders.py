import dataclasses
from typing import Optional
from enum import Enum
from ..shared import discussionfoldercontract as shared_discussionfoldercontract

class DiscussionAPIGetFoldersFieldsEnum(str, Enum):
    NONE = "None"
    LAST_TOPIC = "LastTopic"
    TOPIC_COUNT = "TopicCount"


@dataclasses.dataclass
class DiscussionAPIGetFoldersQueryParams:
    fields: Optional[DiscussionAPIGetFoldersFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DiscussionAPIGetFoldersRequest:
    query_params: DiscussionAPIGetFoldersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIGetFoldersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    discussion_folder_contracts: Optional[list[shared_discussionfoldercontract.DiscussionFolderContract]] = dataclasses.field(default=None)
    
