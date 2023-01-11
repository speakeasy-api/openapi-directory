import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class GetUserAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
