import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateBankAccountPathParams:
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBankAccountHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBankAccountSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateBankAccountRequest:
    headers: UpdateBankAccountHeaders = dataclasses.field()
    path_params: UpdateBankAccountPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBankAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_bank_account_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_bank_account_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
