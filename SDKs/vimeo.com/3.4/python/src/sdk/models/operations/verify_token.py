import dataclasses
from typing import Optional
from ..shared import auth as shared_auth
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class VerifyTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth: Optional[shared_auth.Auth] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
