import dataclasses
from typing import Optional
from ..shared import useraccesstokensresponse as shared_useraccesstokensresponse


@dataclasses.dataclass
class GetAccessTokensQueryParams:
    app_ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'appIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccessTokensRequest:
    query_params: GetAccessTokensQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccessTokensResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_access_tokens_response: Optional[shared_useraccesstokensresponse.UserAccessTokensResponse] = dataclasses.field(default=None)
    
