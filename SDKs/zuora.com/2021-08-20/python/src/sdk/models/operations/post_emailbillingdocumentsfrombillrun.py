import dataclasses
from typing import Optional
from ..shared import postemailbillingdocfrombillruntype as shared_postemailbillingdocfrombillruntype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PostEmailBillingDocumentsfromBillRunPathParams:
    bill_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailBillingDocumentsfromBillRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmailBillingDocumentsfromBillRunRequest:
    headers: PostEmailBillingDocumentsfromBillRunHeaders = dataclasses.field()
    path_params: PostEmailBillingDocumentsfromBillRunPathParams = dataclasses.field()
    request: shared_postemailbillingdocfrombillruntype.PostEmailBillingDocfromBillRunType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEmailBillingDocumentsfromBillRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
