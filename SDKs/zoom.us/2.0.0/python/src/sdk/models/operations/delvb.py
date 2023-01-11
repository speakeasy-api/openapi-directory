import dataclasses
from typing import Optional


@dataclasses.dataclass
class DelVbPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DelVbQueryParams:
    file_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DelVbRequest:
    path_params: DelVbPathParams = dataclasses.field()
    query_params: DelVbQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DelVbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
