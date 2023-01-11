import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateFolderPathParams:
    folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFolderHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFolderSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateFolderRequest:
    headers: UpdateFolderHeaders = dataclasses.field()
    path_params: UpdateFolderPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFolderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    folder: Optional[Any] = dataclasses.field(default=None)
    
