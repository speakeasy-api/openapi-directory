import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobresult as shared_jobresult


@dataclasses.dataclass
class GetJobStatusAndResponsePathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJobStatusAndResponseHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    
class GetJobStatusAndResponse200ApplicationJSONStatusEnum(str, Enum):
    PROCESSING = "Processing"
    FAILED = "Failed"
    COMPLETED = "Completed"


@dataclass_json
@dataclasses.dataclass
class GetJobStatusAndResponse200ApplicationJSON:
    errors: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    result: Optional[shared_jobresult.JobResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    status: Optional[GetJobStatusAndResponse200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class GetJobStatusAndResponseRequest:
    headers: GetJobStatusAndResponseHeaders = dataclasses.field()
    path_params: GetJobStatusAndResponsePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJobStatusAndResponseResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_job_status_and_response_200_application_json_object: Optional[GetJobStatusAndResponse200ApplicationJSON] = dataclasses.field(default=None)
    
