import dataclasses
from typing import Optional
from ..shared import getaccounttype as shared_getaccounttype


@dataclasses.dataclass
class GetAccountPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountRequest:
    headers: GetAccountHeaders = dataclasses.field()
    path_params: GetAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_account_type: Optional[shared_getaccounttype.GetAccountType] = dataclasses.field(default=None)
    
