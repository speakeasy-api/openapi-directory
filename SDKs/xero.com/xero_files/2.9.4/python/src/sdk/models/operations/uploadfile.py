import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fileobject as shared_fileobject


@dataclasses.dataclass
class UploadFileQueryParams:
    folder_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FolderId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UploadFileHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadFileRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mimeType' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class UploadFileSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UploadFileRequest:
    headers: UploadFileHeaders = dataclasses.field()
    query_params: UploadFileQueryParams = dataclasses.field()
    security: UploadFileSecurity = dataclasses.field()
    request: Optional[UploadFileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_object: Optional[shared_fileobject.FileObject] = dataclasses.field(default=None)
    
