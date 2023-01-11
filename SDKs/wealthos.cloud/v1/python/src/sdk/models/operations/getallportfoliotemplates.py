import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAllPortfolioTemplatesHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllPortfolioTemplatesSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllPortfolioTemplates200ApplicationJSON:
    r"""GetAllPortfolioTemplates200ApplicationJSON
    Array of all portfolio templates applicable to the investor
    """
    
    portfolio_templates: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_templates') }})
    

@dataclasses.dataclass
class GetAllPortfolioTemplatesRequest:
    headers: GetAllPortfolioTemplatesHeaders = dataclasses.field()
    security: GetAllPortfolioTemplatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllPortfolioTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_portfolio_templates_200_application_json_object: Optional[GetAllPortfolioTemplates200ApplicationJSON] = dataclasses.field(default=None)
    get_all_portfolio_templates_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_portfolio_templates_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_portfolio_templates_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_portfolio_templates_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_portfolio_templates_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
