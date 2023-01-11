import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetConfiguredInvestmentProductPricesStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class GetConfiguredInvestmentProductPricesQueryParams:
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[GetConfiguredInvestmentProductPricesStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductPricesHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductPricesSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetConfiguredInvestmentProductPrices200ApplicationJSON:
    investment_product_unit_prices: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_unit_prices') }})
    next_page_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductPricesRequest:
    headers: GetConfiguredInvestmentProductPricesHeaders = dataclasses.field()
    query_params: GetConfiguredInvestmentProductPricesQueryParams = dataclasses.field()
    security: GetConfiguredInvestmentProductPricesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductPricesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_configured_investment_product_prices_200_application_json_object: Optional[GetConfiguredInvestmentProductPrices200ApplicationJSON] = dataclasses.field(default=None)
    get_configured_investment_product_prices_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_product_prices_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_product_prices_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_product_prices_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_product_prices_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
