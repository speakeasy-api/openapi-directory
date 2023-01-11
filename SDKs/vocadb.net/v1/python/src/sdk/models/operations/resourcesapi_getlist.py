import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResourcesAPIGetListPathParams:
    culture_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cultureCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResourcesAPIGetListQueryParams:
    set_names: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'setNames', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ResourcesAPIGetListRequest:
    path_params: ResourcesAPIGetListPathParams = dataclasses.field()
    query_params: ResourcesAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ResourcesAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resources_api_get_list_200_application_json_object: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None)
    resources_api_get_list_200_text_json_object: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None)
    
