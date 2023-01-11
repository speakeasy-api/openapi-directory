import dataclasses
from typing import Optional
from ..shared import getbillingpreviewrunresponse as shared_getbillingpreviewrunresponse


@dataclasses.dataclass
class GetBillingPreviewRunPathParams:
    billing_preview_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billingPreviewRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingPreviewRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingPreviewRunRequest:
    headers: GetBillingPreviewRunHeaders = dataclasses.field()
    path_params: GetBillingPreviewRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBillingPreviewRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_billing_preview_run_response: Optional[shared_getbillingpreviewrunresponse.GetBillingPreviewRunResponse] = dataclasses.field(default=None)
    
