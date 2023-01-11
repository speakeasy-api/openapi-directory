import dataclasses
from typing import Optional
from enum import Enum
from ..shared import global_header_zuora_track_id_enum as shared_global_header_zuora_track_id_enum
from ..shared import getdataqueryjobsresponse as shared_getdataqueryjobsresponse


@dataclasses.dataclass
class GetDataQueryJobsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query_status: Optional[shared_global_header_zuora_track_id_enum.GlobalHeaderZuoraTrackIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'queryStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataQueryJobsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataQueryJobsRequest:
    headers: GetDataQueryJobsHeaders = dataclasses.field()
    query_params: GetDataQueryJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataQueryJobsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_data_query_jobs_response: Optional[shared_getdataqueryjobsresponse.GetDataQueryJobsResponse] = dataclasses.field(default=None)
    
