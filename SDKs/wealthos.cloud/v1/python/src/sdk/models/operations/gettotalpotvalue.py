import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTotalPotValuePathParams:
    investor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTotalPotValueHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTotalPotValueSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTotalPotValueRequest:
    headers: GetTotalPotValueHeaders = dataclasses.field()
    path_params: GetTotalPotValuePathParams = dataclasses.field()
    security: GetTotalPotValueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTotalPotValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_total_pot_value_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_value_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
