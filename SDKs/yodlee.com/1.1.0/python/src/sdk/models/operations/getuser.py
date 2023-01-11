import dataclasses
from typing import Optional
from ..shared import userdetailresponse as shared_userdetailresponse


@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_detail_response: Optional[shared_userdetailresponse.UserDetailResponse] = dataclasses.field(default=None)
    
