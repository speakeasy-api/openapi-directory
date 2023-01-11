import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpublicemailtemplateresponse as shared_getpublicemailtemplateresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetQueryEmailTemplatesQueryParams:
    event_type_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventTypeName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQueryEmailTemplatesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetQueryEmailTemplates200ApplicationJSON:
    data: Optional[list[shared_getpublicemailtemplateresponse.GetPublicEmailTemplateResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclasses.dataclass
class GetQueryEmailTemplatesRequest:
    headers: GetQueryEmailTemplatesHeaders = dataclasses.field()
    query_params: GetQueryEmailTemplatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryEmailTemplatesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_query_email_templates_200_application_json_object: Optional[GetQueryEmailTemplates200ApplicationJSON] = dataclasses.field(default=None)
    
