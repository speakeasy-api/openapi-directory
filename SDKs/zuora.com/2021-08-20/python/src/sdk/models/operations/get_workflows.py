import dataclasses
from typing import Optional
from ..shared import getworkflowsresponse as shared_getworkflowsresponse


@dataclasses.dataclass
class GetWorkflowsQueryParams:
    callout_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callout_trigger', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    ondemand_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ondemand_trigger', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_length', 'style': 'form', 'explode': True }})
    scheduled_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduled_trigger', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkflowsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowsRequest:
    headers: GetWorkflowsHeaders = dataclasses.field()
    query_params: GetWorkflowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkflowsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_workflows_response: Optional[shared_getworkflowsresponse.GetWorkflowsResponse] = dataclasses.field(default=None)
    
