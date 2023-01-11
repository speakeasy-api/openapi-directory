import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class AddVideoEmbedPresetPathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoEmbedPresetSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoEmbedPresetRequest:
    path_params: AddVideoEmbedPresetPathParams = dataclasses.field()
    security: AddVideoEmbedPresetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoEmbedPresetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
