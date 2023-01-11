import dataclasses
from typing import Optional
from ..shared import presets as shared_presets


@dataclasses.dataclass
class GetEmbedPresetsAlt1QueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmbedPresetsAlt1Request:
    query_params: GetEmbedPresetsAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmbedPresetsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presets: Optional[list[shared_presets.Presets]] = dataclasses.field(default=None)
    
