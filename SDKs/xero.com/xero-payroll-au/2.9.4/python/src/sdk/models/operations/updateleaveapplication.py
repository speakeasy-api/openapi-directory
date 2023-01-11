import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import leaveapplication as shared_leaveapplication
from ..shared import leaveapplications as shared_leaveapplications


@dataclasses.dataclass
class UpdateLeaveApplicationPathParams:
    leave_application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLeaveApplicationHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLeaveApplicationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateLeaveApplicationRequest:
    headers: UpdateLeaveApplicationHeaders = dataclasses.field()
    path_params: UpdateLeaveApplicationPathParams = dataclasses.field()
    request: list[shared_leaveapplication.LeaveApplicationInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLeaveApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateLeaveApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    leave_applications: Optional[shared_leaveapplications.LeaveApplications] = dataclasses.field(default=None)
    
