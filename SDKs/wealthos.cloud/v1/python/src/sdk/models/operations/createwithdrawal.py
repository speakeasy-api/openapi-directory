import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateWithdrawalHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWithdrawalSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateWithdrawalRequest:
    headers: CreateWithdrawalHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateWithdrawalSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateWithdrawalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_withdrawal_creation_response: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_withdrawal_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
