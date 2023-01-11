import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import fileobject as shared_fileobject


@dataclasses.dataclass
class UpdateFilePathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFileHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFileSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateFileRequest:
    headers: UpdateFileHeaders = dataclasses.field()
    path_params: UpdateFilePathParams = dataclasses.field()
    security: UpdateFileSecurity = dataclasses.field()
    request: Optional[shared_fileobject.FileObject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_object: Optional[shared_fileobject.FileObject] = dataclasses.field(default=None)
    
