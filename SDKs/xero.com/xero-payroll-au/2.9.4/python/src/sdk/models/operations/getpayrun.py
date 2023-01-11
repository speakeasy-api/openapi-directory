import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payruns as shared_payruns


@dataclasses.dataclass
class GetPayRunPathParams:
    pay_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayRunHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayRunSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayRunRequest:
    headers: GetPayRunHeaders = dataclasses.field()
    path_params: GetPayRunPathParams = dataclasses.field()
    security: GetPayRunSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pay_runs: Optional[shared_payruns.PayRuns] = dataclasses.field(default=None)
    
