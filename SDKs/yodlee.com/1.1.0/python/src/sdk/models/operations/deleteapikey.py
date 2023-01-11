import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DeleteAPIKeyPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPIKeyRequest:
    path_params: DeleteAPIKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
