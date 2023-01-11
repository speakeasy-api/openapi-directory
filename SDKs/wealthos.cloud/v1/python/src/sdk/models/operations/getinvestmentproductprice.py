import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetInvestmentProductPriceCategoryIDEnum(str, Enum):
    FUNDS = "funds"


@dataclasses.dataclass
class GetInvestmentProductPricePathParams:
    category_id: GetInvestmentProductPriceCategoryIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    investment_product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investment_product_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestmentProductPriceHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestmentProductPriceSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetInvestmentProductPriceRequest:
    headers: GetInvestmentProductPriceHeaders = dataclasses.field()
    path_params: GetInvestmentProductPricePathParams = dataclasses.field()
    security: GetInvestmentProductPriceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInvestmentProductPriceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_investment_product_price_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_price_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_price_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_price_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_price_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_price_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
