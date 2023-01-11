import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import files as shared_files

class GetFilesSortEnum(str, Enum):
    NAME = "Name"
    SIZE = "Size"
    CREATED_DATE_UTC = "CreatedDateUTC"


@dataclasses.dataclass
class GetFilesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sort: Optional[GetFilesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFilesHeaders:
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFilesSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFilesRequest:
    headers: GetFilesHeaders = dataclasses.field()
    query_params: GetFilesQueryParams = dataclasses.field()
    security: GetFilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    files: Optional[shared_files.Files] = dataclasses.field(default=None)
    
