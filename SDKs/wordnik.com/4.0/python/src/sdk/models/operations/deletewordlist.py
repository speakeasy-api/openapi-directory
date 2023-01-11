import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteWordListPathParams:
    permalink: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWordListHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWordListRequest:
    headers: DeleteWordListHeaders = dataclasses.field()
    path_params: DeleteWordListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWordListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
