import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPotValuePathParams:
    pot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotValueHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotValueSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPotValueRequest:
    headers: GetPotValueHeaders = dataclasses.field()
    path_params: GetPotValuePathParams = dataclasses.field()
    security: GetPotValueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPotValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pot_value_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_value_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
