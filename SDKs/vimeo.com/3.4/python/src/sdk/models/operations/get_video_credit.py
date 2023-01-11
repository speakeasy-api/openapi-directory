import dataclasses
from typing import Optional
from ..shared import credit as shared_credit
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetVideoCreditPathParams:
    credit_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoCreditRequest:
    path_params: GetVideoCreditPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoCreditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit: Optional[shared_credit.Credit] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
