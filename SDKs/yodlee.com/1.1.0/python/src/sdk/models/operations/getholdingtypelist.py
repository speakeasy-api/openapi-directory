import dataclasses
from typing import Optional
from ..shared import holdingtypelistresponse as shared_holdingtypelistresponse


@dataclasses.dataclass
class GetHoldingTypeListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    holding_type_list_response: Optional[shared_holdingtypelistresponse.HoldingTypeListResponse] = dataclasses.field(default=None)
    
