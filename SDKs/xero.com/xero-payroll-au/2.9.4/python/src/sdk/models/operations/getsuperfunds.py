import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiexception as shared_apiexception
from ..shared import superfunds as shared_superfunds


@dataclasses.dataclass
class GetSuperfundsQueryParams:
    order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSuperfundsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuperfundsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSuperfundsRequest:
    headers: GetSuperfundsHeaders = dataclasses.field()
    query_params: GetSuperfundsQueryParams = dataclasses.field()
    security: GetSuperfundsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSuperfundsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_exception: Optional[shared_apiexception.APIException] = dataclasses.field(default=None)
    super_funds: Optional[shared_superfunds.SuperFunds] = dataclasses.field(default=None)
    
