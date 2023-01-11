import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpublicnotificationdefinitionresponse as shared_getpublicnotificationdefinitionresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetQueryNotificationDefinitionsQueryParams:
    email_template_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'emailTemplateId', 'style': 'form', 'explode': True }})
    event_type_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventTypeName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    profile_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profileId', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQueryNotificationDefinitionsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetQueryNotificationDefinitions200ApplicationJSON:
    data: Optional[list[shared_getpublicnotificationdefinitionresponse.GetPublicNotificationDefinitionResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclasses.dataclass
class GetQueryNotificationDefinitionsRequest:
    headers: GetQueryNotificationDefinitionsHeaders = dataclasses.field()
    query_params: GetQueryNotificationDefinitionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryNotificationDefinitionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_query_notification_definitions_200_application_json_object: Optional[GetQueryNotificationDefinitions200ApplicationJSON] = dataclasses.field(default=None)
    
