import dataclasses
from typing import Optional
from ..shared import putdocumentpropertiestype as shared_putdocumentpropertiestype
from ..shared import getdocumentpropertiesresponsetype as shared_getdocumentpropertiesresponsetype


@dataclasses.dataclass
class PutDocumentPropertiesPathParams:
    document_properties_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentPropertiesId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDocumentPropertiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDocumentPropertiesRequest:
    headers: PutDocumentPropertiesHeaders = dataclasses.field()
    path_params: PutDocumentPropertiesPathParams = dataclasses.field()
    request: shared_putdocumentpropertiestype.PutDocumentPropertiesType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutDocumentPropertiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_document_properties_response_type: Optional[shared_getdocumentpropertiesresponsetype.GetDocumentPropertiesResponseType] = dataclasses.field(default=None)
    
