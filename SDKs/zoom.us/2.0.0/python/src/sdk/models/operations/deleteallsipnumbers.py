import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAllSipNumbersPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAllSipNumbersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAllSipNumbersRequest:
    path_params: DeleteAllSipNumbersPathParams = dataclasses.field()
    security: DeleteAllSipNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAllSipNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_all_sip_numbers_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
