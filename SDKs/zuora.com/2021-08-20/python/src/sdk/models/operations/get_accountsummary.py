import dataclasses
from typing import Optional
from ..shared import getaccountsummarytype as shared_getaccountsummarytype


@dataclasses.dataclass
class GetAccountSummaryPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountSummaryHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountSummaryRequest:
    headers: GetAccountSummaryHeaders = dataclasses.field()
    path_params: GetAccountSummaryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountSummaryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_account_summary_type: Optional[shared_getaccountsummarytype.GetAccountSummaryType] = dataclasses.field(default=None)
    
