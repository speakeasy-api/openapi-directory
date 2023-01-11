import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteSipTrunkPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    trunk_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trunkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSipTrunkRequest:
    path_params: DeleteSipTrunkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSipTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_sip_trunk_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
