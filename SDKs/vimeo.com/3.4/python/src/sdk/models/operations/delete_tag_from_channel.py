import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class DeleteTagFromChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTagFromChannelSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteTagFromChannelRequest:
    path_params: DeleteTagFromChannelPathParams = dataclasses.field()
    security: DeleteTagFromChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTagFromChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
