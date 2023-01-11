import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postorderpreviewrequesttype as shared_postorderpreviewrequesttype


@dataclasses.dataclass
class PostPreviewOrderAsynchronouslyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostPreviewOrderAsynchronously202ApplicationJSON:
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    

@dataclasses.dataclass
class PostPreviewOrderAsynchronouslyRequest:
    headers: PostPreviewOrderAsynchronouslyHeaders = dataclasses.field()
    request: shared_postorderpreviewrequesttype.PostOrderPreviewRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPreviewOrderAsynchronouslyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_preview_order_asynchronously_202_application_json_object: Optional[PostPreviewOrderAsynchronously202ApplicationJSON] = dataclasses.field(default=None)
    
