import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import association as shared_association


@dataclasses.dataclass
class GetFileAssociationsPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileAssociationsHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileAssociationsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFileAssociationsRequest:
    headers: GetFileAssociationsHeaders = dataclasses.field()
    path_params: GetFileAssociationsPathParams = dataclasses.field()
    security: GetFileAssociationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFileAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
