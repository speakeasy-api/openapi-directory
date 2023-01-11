import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import paysliplines as shared_paysliplines
from ..shared import payslips as shared_payslips


@dataclasses.dataclass
class UpdatePayslipPathParams:
    payslip_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePayslipHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePayslipSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePayslipRequest:
    headers: UpdatePayslipHeaders = dataclasses.field()
    path_params: UpdatePayslipPathParams = dataclasses.field()
    security: UpdatePayslipSecurity = dataclasses.field()
    request: Optional[list[shared_paysliplines.PayslipLines]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePayslipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payslips: Optional[shared_payslips.Payslips] = dataclasses.field(default=None)
    
