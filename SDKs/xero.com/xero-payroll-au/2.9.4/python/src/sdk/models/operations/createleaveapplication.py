import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import leaveapplication as shared_leaveapplication
from ..shared import leaveapplications as shared_leaveapplications


@dataclasses.dataclass
class CreateLeaveApplicationHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLeaveApplicationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateLeaveApplicationRequest:
    headers: CreateLeaveApplicationHeaders = dataclasses.field()
    request: list[shared_leaveapplication.LeaveApplicationInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLeaveApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateLeaveApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    leave_applications: Optional[shared_leaveapplications.LeaveApplications] = dataclasses.field(default=None)
    
