import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetConfiguredInvestmentProductsStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class GetConfiguredInvestmentProductsQueryParams:
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[GetConfiguredInvestmentProductsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetConfiguredInvestmentProducts200ApplicationJSON:
    investment_products: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_products') }})
    next_page_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductsRequest:
    headers: GetConfiguredInvestmentProductsHeaders = dataclasses.field()
    query_params: GetConfiguredInvestmentProductsQueryParams = dataclasses.field()
    security: GetConfiguredInvestmentProductsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetConfiguredInvestmentProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_configured_investment_products_200_application_json_object: Optional[GetConfiguredInvestmentProducts200ApplicationJSON] = dataclasses.field(default=None)
    get_configured_investment_products_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_products_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_products_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_products_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_configured_investment_products_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
