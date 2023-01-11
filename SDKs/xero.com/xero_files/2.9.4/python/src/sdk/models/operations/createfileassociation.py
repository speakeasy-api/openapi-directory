import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import association as shared_association


@dataclasses.dataclass
class CreateFileAssociationPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFileAssociationHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFileAssociationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateFileAssociationRequest:
    headers: CreateFileAssociationHeaders = dataclasses.field()
    path_params: CreateFileAssociationPathParams = dataclasses.field()
    security: CreateFileAssociationSecurity = dataclasses.field()
    request: Optional[shared_association.Association] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFileAssociationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association: Optional[shared_association.Association] = dataclasses.field(default=None)
    
