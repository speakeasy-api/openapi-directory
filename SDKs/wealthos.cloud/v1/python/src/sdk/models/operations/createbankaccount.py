import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateBankAccountHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBankAccountSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateBankAccountRequest:
    headers: CreateBankAccountHeaders = dataclasses.field()
    security: CreateBankAccountSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_bank_account_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_bank_account_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
