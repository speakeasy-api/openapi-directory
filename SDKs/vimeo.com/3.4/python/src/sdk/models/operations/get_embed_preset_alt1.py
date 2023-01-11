import dataclasses
from typing import Optional
from ..shared import presets as shared_presets


@dataclasses.dataclass
class GetEmbedPresetAlt1PathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmbedPresetAlt1Request:
    path_params: GetEmbedPresetAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmbedPresetAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presets: Optional[shared_presets.Presets] = dataclasses.field(default=None)
    
