import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteVoicemailPathParams:
    voicemail_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'voicemailId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVoicemailRequest:
    path_params: DeleteVoicemailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVoicemailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_voicemail_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
