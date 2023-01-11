import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePortfolioTemplatePathParams:
    portfolio_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_template_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePortfolioTemplateHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePortfolioTemplateSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdatePortfolioTemplateRequest:
    headers: UpdatePortfolioTemplateHeaders = dataclasses.field()
    path_params: UpdatePortfolioTemplatePathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePortfolioTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdatePortfolioTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_portfolio_template_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_portfolio_template_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
