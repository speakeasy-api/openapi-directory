import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import superfund as shared_superfund
from ..shared import superfunds as shared_superfunds


@dataclasses.dataclass
class CreateSuperfundHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSuperfundSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateSuperfundRequest:
    headers: CreateSuperfundHeaders = dataclasses.field()
    request: list[shared_superfund.SuperFundInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSuperfundSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateSuperfundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    super_funds: Optional[shared_superfunds.SuperFunds] = dataclasses.field(default=None)
    
