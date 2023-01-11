import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreatePortfolioTemplateHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePortfolioTemplateSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreatePortfolioTemplateRequest:
    headers: CreatePortfolioTemplateHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePortfolioTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePortfolioTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_portfolio_template_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_portfolio_template_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
