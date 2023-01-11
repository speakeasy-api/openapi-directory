import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetInvestmentProductCategoryIDEnum(str, Enum):
    FUNDS = "funds"


@dataclasses.dataclass
class GetInvestmentProductPathParams:
    category_id: GetInvestmentProductCategoryIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    investment_product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investment_product_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestmentProductHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvestmentProductSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetInvestmentProductRequest:
    headers: GetInvestmentProductHeaders = dataclasses.field()
    path_params: GetInvestmentProductPathParams = dataclasses.field()
    security: GetInvestmentProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInvestmentProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_investment_product_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_investment_product_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
