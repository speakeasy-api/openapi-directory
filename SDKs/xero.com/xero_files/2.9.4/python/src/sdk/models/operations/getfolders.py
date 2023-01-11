import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetFoldersSortEnum(str, Enum):
    NAME = "Name"
    SIZE = "Size"
    CREATED_DATE_UTC = "CreatedDateUTC"


@dataclasses.dataclass
class GetFoldersQueryParams:
    sort: Optional[GetFoldersSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFoldersHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFoldersSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFoldersRequest:
    headers: GetFoldersHeaders = dataclasses.field()
    query_params: GetFoldersQueryParams = dataclasses.field()
    security: GetFoldersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFoldersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    folders: Optional[list[Any]] = dataclasses.field(default=None)
    
