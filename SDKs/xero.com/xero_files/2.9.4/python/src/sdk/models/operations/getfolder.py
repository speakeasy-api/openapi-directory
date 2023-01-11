import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFolderPathParams:
    folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFolderHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFolderSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFolderRequest:
    headers: GetFolderHeaders = dataclasses.field()
    path_params: GetFolderPathParams = dataclasses.field()
    security: GetFolderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    folder: Optional[Any] = dataclasses.field(default=None)
    
