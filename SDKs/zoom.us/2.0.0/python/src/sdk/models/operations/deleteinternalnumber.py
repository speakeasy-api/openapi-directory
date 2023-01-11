import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteInternalNumberPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteInternalNumberRequest:
    path_params: DeleteInternalNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteInternalNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_internal_number_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
