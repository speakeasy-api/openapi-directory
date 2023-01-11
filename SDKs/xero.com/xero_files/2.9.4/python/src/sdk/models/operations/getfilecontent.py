import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFileContentPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileContentHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileContentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFileContentRequest:
    headers: GetFileContentHeaders = dataclasses.field()
    path_params: GetFileContentPathParams = dataclasses.field()
    security: GetFileContentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFileContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_file_content_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
