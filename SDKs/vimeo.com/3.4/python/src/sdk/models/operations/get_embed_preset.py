import dataclasses
from typing import Optional
from ..shared import presets as shared_presets


@dataclasses.dataclass
class GetEmbedPresetPathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmbedPresetRequest:
    path_params: GetEmbedPresetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmbedPresetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presets: Optional[shared_presets.Presets] = dataclasses.field(default=None)
    
