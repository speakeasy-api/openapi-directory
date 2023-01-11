import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import superfund as shared_superfund
from ..shared import superfunds as shared_superfunds


@dataclasses.dataclass
class UpdateSuperfundPathParams:
    super_fund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSuperfundHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSuperfundSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateSuperfundRequest:
    headers: UpdateSuperfundHeaders = dataclasses.field()
    path_params: UpdateSuperfundPathParams = dataclasses.field()
    security: UpdateSuperfundSecurity = dataclasses.field()
    request: Optional[list[shared_superfund.SuperFundInput]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSuperfundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    super_funds: Optional[shared_superfunds.SuperFunds] = dataclasses.field(default=None)
    
