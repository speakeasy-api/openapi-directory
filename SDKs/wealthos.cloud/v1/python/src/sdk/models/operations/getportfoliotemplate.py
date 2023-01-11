import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPortfolioTemplatePathParams:
    portfolio_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_template_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioTemplateHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioTemplateSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPortfolioTemplateRequest:
    headers: GetPortfolioTemplateHeaders = dataclasses.field()
    path_params: GetPortfolioTemplatePathParams = dataclasses.field()
    security: GetPortfolioTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_portfolio_template_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_portfolio_template_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_portfolio_template_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_portfolio_template_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_portfolio_template_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_portfolio_template_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
