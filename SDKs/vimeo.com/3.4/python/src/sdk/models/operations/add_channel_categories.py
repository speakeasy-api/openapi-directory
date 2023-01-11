import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class AddChannelCategoriesPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddChannelCategoriesRequestBody:
    channels: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    

@dataclasses.dataclass
class AddChannelCategoriesRequest:
    path_params: AddChannelCategoriesPathParams = dataclasses.field()
    request: AddChannelCategoriesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddChannelCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
