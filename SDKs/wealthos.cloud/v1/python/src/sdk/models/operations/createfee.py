import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateFeeHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFeeSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateFeeRequest:
    headers: CreateFeeHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFeeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateFeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_fee_creation_response: Optional[Any] = dataclasses.field(default=None)
    create_fee_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_fee_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
