import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetInvestorPathParams:
    investor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestorHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestorSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetInvestorRequest:
    headers: GetInvestorHeaders = dataclasses.field()
    path_params: GetInvestorPathParams = dataclasses.field()
    security: GetInvestorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInvestorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_investor: Optional[Any] = dataclasses.field(default=None)
    get_investor_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investor_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investor_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investor_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investor_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investor_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
