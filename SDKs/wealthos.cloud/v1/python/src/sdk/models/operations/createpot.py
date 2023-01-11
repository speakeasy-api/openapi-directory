import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreatePotHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePotSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreatePotRequest:
    headers: CreatePotHeaders = dataclasses.field()
    security: CreatePotSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_pot_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_pot_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
