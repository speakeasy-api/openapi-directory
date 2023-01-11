import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import payrun as shared_payrun
from ..shared import payruns as shared_payruns


@dataclasses.dataclass
class UpdatePayRunPathParams:
    pay_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePayRunHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePayRunSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePayRunRequest:
    headers: UpdatePayRunHeaders = dataclasses.field()
    path_params: UpdatePayRunPathParams = dataclasses.field()
    security: UpdatePayRunSecurity = dataclasses.field()
    request: Optional[list[shared_payrun.PayRunInput]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePayRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pay_runs: Optional[shared_payruns.PayRuns] = dataclasses.field(default=None)
    
