import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetinvestorAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetinvestorAccountHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetinvestorAccountSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetinvestorAccountRequest:
    headers: GetinvestorAccountHeaders = dataclasses.field()
    path_params: GetinvestorAccountPathParams = dataclasses.field()
    security: GetinvestorAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetinvestorAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getinvestor_account_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    getinvestor_account_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
