import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import employee as shared_employee
from ..shared import employees as shared_employees


@dataclasses.dataclass
class UpdateEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEmployeeHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEmployeeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateEmployeeRequest:
    headers: UpdateEmployeeHeaders = dataclasses.field()
    path_params: UpdateEmployeePathParams = dataclasses.field()
    security: UpdateEmployeeSecurity = dataclasses.field()
    request: Optional[list[shared_employee.EmployeeInput]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employees: Optional[shared_employees.Employees] = dataclasses.field(default=None)
    
