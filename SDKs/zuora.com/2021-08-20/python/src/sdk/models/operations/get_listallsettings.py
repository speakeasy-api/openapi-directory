import dataclasses
from typing import Optional
from ..shared import listallsettingsresponse as shared_listallsettingsresponse


@dataclasses.dataclass
class GetListAllSettingsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListAllSettingsRequest:
    headers: GetListAllSettingsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetListAllSettingsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_all_settings_response: Optional[shared_listallsettingsresponse.ListAllSettingsResponse] = dataclasses.field(default=None)
    
