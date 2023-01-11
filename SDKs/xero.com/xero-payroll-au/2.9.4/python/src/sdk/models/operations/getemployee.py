import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import employees as shared_employees


@dataclasses.dataclass
class GetEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEmployeeRequest:
    headers: GetEmployeeHeaders = dataclasses.field()
    path_params: GetEmployeePathParams = dataclasses.field()
    security: GetEmployeeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employees: Optional[shared_employees.Employees] = dataclasses.field(default=None)
    
