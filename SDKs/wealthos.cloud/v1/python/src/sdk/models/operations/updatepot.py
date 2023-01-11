import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePotPathParams:
    pot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePotHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePotSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdatePotRequest:
    headers: UpdatePotHeaders = dataclasses.field()
    path_params: UpdatePotPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePotSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdatePotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_pot_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_pot_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
