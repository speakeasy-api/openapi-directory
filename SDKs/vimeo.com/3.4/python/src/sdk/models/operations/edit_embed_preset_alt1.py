import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import legacy_error as shared_legacy_error
from ..shared import presets as shared_presets


@dataclasses.dataclass
class EditEmbedPresetAlt1PathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    
class EditEmbedPresetAlt1RequestBodyOutroEnum(str, Enum):
    NOTHING = "nothing"


@dataclass_json
@dataclasses.dataclass
class EditEmbedPresetAlt1RequestBody:
    outro: Optional[EditEmbedPresetAlt1RequestBodyOutroEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outro') }})
    

@dataclasses.dataclass
class EditEmbedPresetAlt1Request:
    path_params: EditEmbedPresetAlt1PathParams = dataclasses.field()
    request: Optional[EditEmbedPresetAlt1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.preset+json' }})
    

@dataclasses.dataclass
class EditEmbedPresetAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    presets: Optional[shared_presets.Presets] = dataclasses.field(default=None)
    
