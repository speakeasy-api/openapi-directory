import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postorderrequesttype as shared_postorderrequesttype


@dataclasses.dataclass
class PostCreateOrderAsynchronouslyQueryParams:
    return_ids: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'returnIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCreateOrderAsynchronouslyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostCreateOrderAsynchronously202ApplicationJSON:
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class PostCreateOrderAsynchronouslyRequest:
    headers: PostCreateOrderAsynchronouslyHeaders = dataclasses.field()
    query_params: PostCreateOrderAsynchronouslyQueryParams = dataclasses.field()
    request: shared_postorderrequesttype.PostOrderRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCreateOrderAsynchronouslyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_create_order_asynchronously_202_application_json_object: Optional[PostCreateOrderAsynchronously202ApplicationJSON] = dataclasses.field(default=None)
    
