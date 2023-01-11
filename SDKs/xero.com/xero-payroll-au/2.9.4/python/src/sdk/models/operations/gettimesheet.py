import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import timesheetobject as shared_timesheetobject


@dataclasses.dataclass
class GetTimesheetPathParams:
    timesheet_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimesheetHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimesheetSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTimesheetRequest:
    headers: GetTimesheetHeaders = dataclasses.field()
    path_params: GetTimesheetPathParams = dataclasses.field()
    security: GetTimesheetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTimesheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timesheet_object: Optional[shared_timesheetobject.TimesheetObject] = dataclasses.field(default=None)
    
