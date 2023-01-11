import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBankAccountPathParams:
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBankAccountHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBankAccountSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetBankAccountRequest:
    headers: GetBankAccountHeaders = dataclasses.field()
    path_params: GetBankAccountPathParams = dataclasses.field()
    security: GetBankAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_bank_account_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_bank_account_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
