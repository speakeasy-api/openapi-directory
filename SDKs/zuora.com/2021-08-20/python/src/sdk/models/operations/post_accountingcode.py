import dataclasses
from typing import Any,Optional
from ..shared import postaccountingcoderesponsetype as shared_postaccountingcoderesponsetype


@dataclasses.dataclass
class PostAccountingCodeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAccountingCodeRequest:
    headers: PostAccountingCodeHeaders = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAccountingCodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_accounting_code_response_type: Optional[shared_postaccountingcoderesponsetype.PostAccountingCodeResponseType] = dataclasses.field(default=None)
    
