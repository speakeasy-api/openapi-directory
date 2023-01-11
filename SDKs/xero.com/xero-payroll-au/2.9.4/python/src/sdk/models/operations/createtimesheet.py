import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import timesheet as shared_timesheet
from ..shared import timesheets as shared_timesheets


@dataclasses.dataclass
class CreateTimesheetHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTimesheetSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateTimesheetRequest:
    headers: CreateTimesheetHeaders = dataclasses.field()
    request: list[shared_timesheet.TimesheetInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTimesheetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateTimesheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timesheets: Optional[shared_timesheets.Timesheets] = dataclasses.field(default=None)
    
