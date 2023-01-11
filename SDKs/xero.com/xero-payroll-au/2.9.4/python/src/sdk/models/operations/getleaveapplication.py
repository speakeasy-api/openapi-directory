import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import leaveapplications as shared_leaveapplications


@dataclasses.dataclass
class GetLeaveApplicationPathParams:
    leave_application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLeaveApplicationHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLeaveApplicationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetLeaveApplicationRequest:
    headers: GetLeaveApplicationHeaders = dataclasses.field()
    path_params: GetLeaveApplicationPathParams = dataclasses.field()
    security: GetLeaveApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLeaveApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    leave_applications: Optional[shared_leaveapplications.LeaveApplications] = dataclasses.field(default=None)
    
