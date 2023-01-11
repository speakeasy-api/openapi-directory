import dataclasses
from typing import Optional
from enum import Enum
from ..shared import proxy_enum as shared_proxy_enum
from ..shared import error as shared_error
from ..shared import pageerror as shared_pageerror


@dataclasses.dataclass
class GetHTMLQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'headers', 'style': 'form', 'explode': True }})
    js: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'js', 'style': 'form', 'explode': True }})
    proxy: Optional[shared_proxy_enum.ProxyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHTMLRequest:
    query_params: GetHTMLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHTMLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    page_error: Optional[shared_pageerror.PageError] = dataclasses.field(default=None)
    get_html_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
