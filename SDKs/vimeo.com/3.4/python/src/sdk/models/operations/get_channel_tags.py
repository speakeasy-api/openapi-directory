import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetChannelTagsPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelTagsRequest:
    path_params: GetChannelTagsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
