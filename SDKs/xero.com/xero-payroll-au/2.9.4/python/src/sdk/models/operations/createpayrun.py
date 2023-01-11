import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payrun as shared_payrun
from ..shared import payruns as shared_payruns


@dataclasses.dataclass
class CreatePayRunHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePayRunSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePayRunRequest:
    headers: CreatePayRunHeaders = dataclasses.field()
    request: list[shared_payrun.PayRunInput] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayRunSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePayRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pay_runs: Optional[shared_payruns.PayRuns] = dataclasses.field(default=None)
    
