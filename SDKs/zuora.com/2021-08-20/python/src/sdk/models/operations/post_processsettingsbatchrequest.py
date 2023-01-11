import dataclasses
from typing import Optional
from ..shared import settingsbatchrequest as shared_settingsbatchrequest
from ..shared import settingsbatchresponse as shared_settingsbatchresponse


@dataclasses.dataclass
class PostProcessSettingsBatchRequestHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostProcessSettingsBatchRequestRequest:
    headers: PostProcessSettingsBatchRequestHeaders = dataclasses.field()
    request: shared_settingsbatchrequest.SettingsBatchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProcessSettingsBatchRequestResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    settings_batch_response: Optional[shared_settingsbatchresponse.SettingsBatchResponse] = dataclasses.field(default=None)
    
