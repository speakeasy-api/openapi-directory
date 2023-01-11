import dataclasses
from typing import Optional
from ..shared import submitdataqueryrequest as shared_submitdataqueryrequest
from ..shared import dataqueryerrorresponse as shared_dataqueryerrorresponse
from ..shared import submitdataqueryresponse as shared_submitdataqueryresponse


@dataclasses.dataclass
class PostDataQueryJobHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDataQueryJobRequest:
    headers: PostDataQueryJobHeaders = dataclasses.field()
    request: shared_submitdataqueryrequest.SubmitDataQueryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDataQueryJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    data_query_error_response: Optional[shared_dataqueryerrorresponse.DataQueryErrorResponse] = dataclasses.field(default=None)
    submit_data_query_response: Optional[shared_submitdataqueryresponse.SubmitDataQueryResponse] = dataclasses.field(default=None)
    
