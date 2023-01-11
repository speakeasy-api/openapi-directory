import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFileAssociationPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ObjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileAssociationHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileAssociationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteFileAssociationRequest:
    headers: DeleteFileAssociationHeaders = dataclasses.field()
    path_params: DeleteFileAssociationPathParams = dataclasses.field()
    security: DeleteFileAssociationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFileAssociationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
