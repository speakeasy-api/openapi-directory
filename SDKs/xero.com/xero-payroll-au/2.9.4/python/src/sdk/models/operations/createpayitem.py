import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payitem as shared_payitem
from ..shared import payitems as shared_payitems


@dataclasses.dataclass
class CreatePayItemHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePayItemSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePayItemRequest:
    headers: CreatePayItemHeaders = dataclasses.field()
    request: shared_payitem.PayItemInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayItemSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePayItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pay_items: Optional[shared_payitems.PayItems] = dataclasses.field(default=None)
    
