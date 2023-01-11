import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiexception as shared_apiexception
from ..shared import superfundproducts as shared_superfundproducts


@dataclasses.dataclass
class GetSuperfundProductsQueryParams:
    abn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ABN', 'style': 'form', 'explode': True }})
    usi: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'USI', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSuperfundProductsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuperfundProductsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSuperfundProductsRequest:
    headers: GetSuperfundProductsHeaders = dataclasses.field()
    query_params: GetSuperfundProductsQueryParams = dataclasses.field()
    security: GetSuperfundProductsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSuperfundProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_exception: Optional[shared_apiexception.APIException] = dataclasses.field(default=None)
    super_fund_products: Optional[shared_superfundproducts.SuperFundProducts] = dataclasses.field(default=None)
    
