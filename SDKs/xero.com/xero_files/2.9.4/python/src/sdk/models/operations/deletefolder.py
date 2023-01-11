import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFolderPathParams:
    folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFolderHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFolderSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteFolderRequest:
    headers: DeleteFolderHeaders = dataclasses.field()
    path_params: DeleteFolderPathParams = dataclasses.field()
    security: DeleteFolderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
