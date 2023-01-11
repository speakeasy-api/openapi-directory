import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import timesheet as shared_timesheet
from ..shared import timesheets as shared_timesheets


@dataclasses.dataclass
class UpdateTimesheetPathParams:
    timesheet_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTimesheetHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTimesheetSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateTimesheetRequest:
    headers: UpdateTimesheetHeaders = dataclasses.field()
    path_params: UpdateTimesheetPathParams = dataclasses.field()
    security: UpdateTimesheetSecurity = dataclasses.field()
    request: Optional[list[shared_timesheet.TimesheetInput]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTimesheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timesheets: Optional[shared_timesheets.Timesheets] = dataclasses.field(default=None)
    
