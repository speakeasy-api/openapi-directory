import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiexception as shared_apiexception
from ..shared import payitems as shared_payitems


@dataclasses.dataclass
class GetPayItemsQueryParams:
    order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayItemsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayItemsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayItemsRequest:
    headers: GetPayItemsHeaders = dataclasses.field()
    query_params: GetPayItemsQueryParams = dataclasses.field()
    security: GetPayItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_exception: Optional[shared_apiexception.APIException] = dataclasses.field(default=None)
    pay_items: Optional[shared_payitems.PayItems] = dataclasses.field(default=None)
    
