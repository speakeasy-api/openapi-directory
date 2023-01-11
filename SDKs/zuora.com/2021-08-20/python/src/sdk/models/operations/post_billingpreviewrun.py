import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postbillingpreviewrunparam as shared_postbillingpreviewrunparam


@dataclasses.dataclass
class PostBillingPreviewRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostBillingPreviewRun200ApplicationJSON:
    billing_preview_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPreviewRunId') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class PostBillingPreviewRunRequest:
    headers: PostBillingPreviewRunHeaders = dataclasses.field()
    request: shared_postbillingpreviewrunparam.PostBillingPreviewRunParam = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingPreviewRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_billing_preview_run_200_application_json_object: Optional[PostBillingPreviewRun200ApplicationJSON] = dataclasses.field(default=None)
    
