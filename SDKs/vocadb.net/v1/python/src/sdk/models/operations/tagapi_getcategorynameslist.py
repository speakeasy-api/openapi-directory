import dataclasses
from typing import Optional
from enum import Enum

class TagAPIGetCategoryNamesListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class TagAPIGetCategoryNamesListQueryParams:
    name_match_mode: Optional[TagAPIGetCategoryNamesListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetCategoryNamesListRequest:
    query_params: TagAPIGetCategoryNamesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetCategoryNamesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_api_get_category_names_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    tag_api_get_category_names_list_200_application_jsonp_strings: Optional[list[str]] = dataclasses.field(default=None)
    tag_api_get_category_names_list_200_text_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
