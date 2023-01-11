import dataclasses
from typing import Optional
from ..shared import revproaccountingcodes as shared_revproaccountingcodes
from ..shared import putrevproacccoderesponse as shared_putrevproacccoderesponse


@dataclasses.dataclass
class PutRevProAccountingCodesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRevProAccountingCodesRequest:
    headers: PutRevProAccountingCodesHeaders = dataclasses.field()
    request: shared_revproaccountingcodes.RevproAccountingCodes = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRevProAccountingCodesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_revpro_acc_code_response: Optional[shared_putrevproacccoderesponse.PutRevproAccCodeResponse] = dataclasses.field(default=None)
    
