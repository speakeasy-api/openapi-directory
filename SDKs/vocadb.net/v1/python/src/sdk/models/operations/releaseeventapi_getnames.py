import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReleaseEventAPIGetNamesQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventAPIGetNamesRequest:
    query_params: ReleaseEventAPIGetNamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventAPIGetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    release_event_api_get_names_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    release_event_api_get_names_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    release_event_api_get_names_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
