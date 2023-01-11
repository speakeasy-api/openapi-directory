import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateInvestorHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInvestorSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateInvestorRequest:
    headers: CreateInvestorHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInvestorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateInvestorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    root_type_for_investor_creation_response: Optional[Any] = dataclasses.field(default=None)
    create_investor_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_investor_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_investor_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_investor_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_investor_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
