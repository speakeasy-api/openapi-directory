import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFilePathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteFileRequest:
    headers: DeleteFileHeaders = dataclasses.field()
    path_params: DeleteFilePathParams = dataclasses.field()
    security: DeleteFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
