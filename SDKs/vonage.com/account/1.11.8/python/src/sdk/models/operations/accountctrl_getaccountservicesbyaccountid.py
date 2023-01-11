import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounthalresponse as shared_accounthalresponse


@dataclasses.dataclass
class AccountCtrlGetAccountServicesByAccountIDPathParams:
    account_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountCtrlGetAccountServicesByAccountIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class AccountCtrlGetAccountServicesByAccountIDRequest:
    path_params: AccountCtrlGetAccountServicesByAccountIDPathParams = dataclasses.field()
    security: AccountCtrlGetAccountServicesByAccountIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCtrlGetAccountServicesByAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_hal_response: Optional[shared_accounthalresponse.AccountHalResponse] = dataclasses.field(default=None)
    
