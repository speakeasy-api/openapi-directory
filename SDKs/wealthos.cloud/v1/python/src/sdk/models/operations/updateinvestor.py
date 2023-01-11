import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateInvestorPathParams:
    investor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInvestorHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInvestorSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateInvestorRequest:
    headers: UpdateInvestorHeaders = dataclasses.field()
    path_params: UpdateInvestorPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateInvestorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateInvestorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_investor: Optional[Any] = dataclasses.field(default=None)
    update_investor_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_investor_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
