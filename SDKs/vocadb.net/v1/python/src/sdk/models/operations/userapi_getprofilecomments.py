import dataclasses
from typing import Optional
from ..shared import partialfindresult_commentforapicontract_ as shared_partialfindresult_commentforapicontract_


@dataclasses.dataclass
class UserAPIGetProfileCommentsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIGetProfileCommentsQueryParams:
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetProfileCommentsRequest:
    path_params: UserAPIGetProfileCommentsPathParams = dataclasses.field()
    query_params: UserAPIGetProfileCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetProfileCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared_partialfindresult_commentforapicontract_.PartialFindResultCommentForAPIContract] = dataclasses.field(default=None)
    
