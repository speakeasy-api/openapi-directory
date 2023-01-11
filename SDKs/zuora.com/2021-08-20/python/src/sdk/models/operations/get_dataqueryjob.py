import dataclasses
from typing import Optional
from ..shared import dataqueryerrorresponse as shared_dataqueryerrorresponse
from ..shared import getdataqueryjobresponse as shared_getdataqueryjobresponse


@dataclasses.dataclass
class GetDataQueryJobPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataQueryJobHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataQueryJobRequest:
    headers: GetDataQueryJobHeaders = dataclasses.field()
    path_params: GetDataQueryJobPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataQueryJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    data_query_error_response: Optional[shared_dataqueryerrorresponse.DataQueryErrorResponse] = dataclasses.field(default=None)
    get_data_query_job_response: Optional[shared_getdataqueryjobresponse.GetDataQueryJobResponse] = dataclasses.field(default=None)
    
