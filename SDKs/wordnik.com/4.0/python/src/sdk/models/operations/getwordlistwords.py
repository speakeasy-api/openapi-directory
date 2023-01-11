import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetWordListWordsPathParams:
    permalink: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    
class GetWordListWordsSortByEnum(str, Enum):
    CREATE_DATE = "createDate"
    ALPHA = "alpha"


@dataclasses.dataclass
class GetWordListWordsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetWordListWordsSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWordListWordsHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWordListWordsRequest:
    headers: GetWordListWordsHeaders = dataclasses.field()
    path_params: GetWordListWordsPathParams = dataclasses.field()
    query_params: GetWordListWordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWordListWordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
