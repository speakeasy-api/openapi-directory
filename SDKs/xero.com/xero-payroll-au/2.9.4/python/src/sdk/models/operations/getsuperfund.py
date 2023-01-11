import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import superfunds as shared_superfunds


@dataclasses.dataclass
class GetSuperfundPathParams:
    super_fund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuperfundHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuperfundSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSuperfundRequest:
    headers: GetSuperfundHeaders = dataclasses.field()
    path_params: GetSuperfundPathParams = dataclasses.field()
    security: GetSuperfundSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSuperfundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    super_funds: Optional[shared_superfunds.SuperFunds] = dataclasses.field(default=None)
    
