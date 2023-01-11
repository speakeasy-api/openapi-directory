import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiexception as shared_apiexception
from ..shared import payrollcalendars as shared_payrollcalendars


@dataclasses.dataclass
class GetPayrollCalendarPathParams:
    payroll_calendar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayrollCalendarID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayrollCalendarHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayrollCalendarSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayrollCalendarRequest:
    headers: GetPayrollCalendarHeaders = dataclasses.field()
    path_params: GetPayrollCalendarPathParams = dataclasses.field()
    security: GetPayrollCalendarSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayrollCalendarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_exception: Optional[shared_apiexception.APIException] = dataclasses.field(default=None)
    payroll_calendars: Optional[shared_payrollcalendars.PayrollCalendars] = dataclasses.field(default=None)
    
