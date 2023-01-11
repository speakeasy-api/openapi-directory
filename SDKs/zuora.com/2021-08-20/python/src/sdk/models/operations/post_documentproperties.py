import dataclasses
from typing import Optional
from ..shared import postdocumentpropertiestype as shared_postdocumentpropertiestype
from ..shared import getdocumentpropertiesresponsetype as shared_getdocumentpropertiesresponsetype


@dataclasses.dataclass
class PostDocumentPropertiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDocumentPropertiesRequest:
    headers: PostDocumentPropertiesHeaders = dataclasses.field()
    request: shared_postdocumentpropertiestype.PostDocumentPropertiesType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDocumentPropertiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_document_properties_response_type: Optional[shared_getdocumentpropertiesresponsetype.GetDocumentPropertiesResponseType] = dataclasses.field(default=None)
    
