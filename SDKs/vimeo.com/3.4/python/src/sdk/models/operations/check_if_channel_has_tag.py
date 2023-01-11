import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfChannelHasTagPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfChannelHasTagRequest:
    path_params: CheckIfChannelHasTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfChannelHasTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
