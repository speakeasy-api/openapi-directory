import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import customobjectrecordbatchrequest as shared_customobjectrecordbatchrequest
from ..shared import customobjectrecordsbatchupdatepartialsuccessresponse as shared_customobjectrecordsbatchupdatepartialsuccessresponse
from ..shared import customobjectrecordserrorresponse as shared_customobjectrecordserrorresponse
from ..shared import customobjectrecordsthrottledresponse as shared_customobjectrecordsthrottledresponse
from ..shared import errorresponse401record as shared_errorresponse401record


@dataclasses.dataclass
class PostCustomObjectRecordsBatchUpdateOrDeletePathParams:
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCustomObjectRecordsBatchUpdateOrDeleteHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCustomObjectRecordsBatchUpdateOrDeleteRequest:
    headers: PostCustomObjectRecordsBatchUpdateOrDeleteHeaders = dataclasses.field()
    path_params: PostCustomObjectRecordsBatchUpdateOrDeletePathParams = dataclasses.field()
    request: shared_customobjectrecordbatchrequest.CustomObjectRecordBatchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCustomObjectRecordsBatchUpdateOrDeleteResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_object_records_batch_update_partial_success_response: Optional[shared_customobjectrecordsbatchupdatepartialsuccessresponse.CustomObjectRecordsBatchUpdatePartialSuccessResponse] = dataclasses.field(default=None)
    custom_object_records_error_response: Optional[shared_customobjectrecordserrorresponse.CustomObjectRecordsErrorResponse] = dataclasses.field(default=None)
    custom_object_records_throttled_response: Optional[shared_customobjectrecordsthrottledresponse.CustomObjectRecordsThrottledResponse] = dataclasses.field(default=None)
    error_response401_record: Optional[shared_errorresponse401record.ErrorResponse401Record] = dataclasses.field(default=None)
    
