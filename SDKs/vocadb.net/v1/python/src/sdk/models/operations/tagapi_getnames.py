import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagAPIGetNamesQueryParams:
    allow_aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowAliases', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetNamesRequest:
    query_params: TagAPIGetNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_api_get_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    tag_api_get_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    tag_api_get_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
