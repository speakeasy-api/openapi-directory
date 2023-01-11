import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fileobject as shared_fileobject


@dataclasses.dataclass
class GetFilePathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFileRequest:
    headers: GetFileHeaders = dataclasses.field()
    path_params: GetFilePathParams = dataclasses.field()
    security: GetFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_object: Optional[shared_fileobject.FileObject] = dataclasses.field(default=None)
    
