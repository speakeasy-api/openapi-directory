import dataclasses
from typing import Optional
from ..shared import presets as shared_presets


@dataclasses.dataclass
class GetEmbedPresetsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmbedPresetsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmbedPresetsRequest:
    path_params: GetEmbedPresetsPathParams = dataclasses.field()
    query_params: GetEmbedPresetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmbedPresetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presets: Optional[list[shared_presets.Presets]] = dataclasses.field(default=None)
    
