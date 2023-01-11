import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetInboxHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInboxSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetInboxRequest:
    headers: GetInboxHeaders = dataclasses.field()
    security: GetInboxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInboxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    folder: Optional[Any] = dataclasses.field(default=None)
    
