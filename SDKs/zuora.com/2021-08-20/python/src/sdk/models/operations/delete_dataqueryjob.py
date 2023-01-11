import dataclasses
from typing import Optional
from ..shared import dataqueryerrorresponse as shared_dataqueryerrorresponse
from ..shared import deletedataqueryjobresponse as shared_deletedataqueryjobresponse


@dataclasses.dataclass
class DeleteDataQueryJobPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDataQueryJobHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDataQueryJobRequest:
    headers: DeleteDataQueryJobHeaders = dataclasses.field()
    path_params: DeleteDataQueryJobPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDataQueryJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    data_query_error_response: Optional[shared_dataqueryerrorresponse.DataQueryErrorResponse] = dataclasses.field(default=None)
    delete_data_query_job_response: Optional[shared_deletedataqueryjobresponse.DeleteDataQueryJobResponse] = dataclasses.field(default=None)
    
