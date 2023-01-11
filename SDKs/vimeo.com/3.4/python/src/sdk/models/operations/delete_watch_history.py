import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteWatchHistorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteWatchHistoryRequest:
    security: DeleteWatchHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWatchHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
