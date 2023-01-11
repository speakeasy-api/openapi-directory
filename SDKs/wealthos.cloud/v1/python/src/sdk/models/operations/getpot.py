import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPotPathParams:
    pot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPotRequest:
    headers: GetPotHeaders = dataclasses.field()
    path_params: GetPotPathParams = dataclasses.field()
    security: GetPotSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pot_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
