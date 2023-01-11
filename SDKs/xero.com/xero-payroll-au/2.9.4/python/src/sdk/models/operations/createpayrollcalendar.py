import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payrollcalendar as shared_payrollcalendar
from ..shared import payrollcalendars as shared_payrollcalendars


@dataclasses.dataclass
class CreatePayrollCalendarHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePayrollCalendarSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePayrollCalendarRequest:
    headers: CreatePayrollCalendarHeaders = dataclasses.field()
    request: list[shared_payrollcalendar.PayrollCalendarInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayrollCalendarSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePayrollCalendarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payroll_calendars: Optional[shared_payrollcalendars.PayrollCalendars] = dataclasses.field(default=None)
    
