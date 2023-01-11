import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import employee as shared_employee
from ..shared import employees as shared_employees


@dataclasses.dataclass
class CreateEmployeeHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEmployeeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateEmployeeRequest:
    headers: CreateEmployeeHeaders = dataclasses.field()
    request: list[shared_employee.EmployeeInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEmployeeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employees: Optional[shared_employees.Employees] = dataclasses.field(default=None)
    
