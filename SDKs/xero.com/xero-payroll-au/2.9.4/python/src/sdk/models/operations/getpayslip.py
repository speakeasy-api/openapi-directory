import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payslipobject as shared_payslipobject


@dataclasses.dataclass
class GetPayslipPathParams:
    payslip_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayslipHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayslipSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayslipRequest:
    headers: GetPayslipHeaders = dataclasses.field()
    path_params: GetPayslipPathParams = dataclasses.field()
    security: GetPayslipSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayslipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payslip_object: Optional[shared_payslipobject.PayslipObject] = dataclasses.field(default=None)
    
