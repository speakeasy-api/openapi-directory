import dataclasses
from typing import Optional
from enum import Enum
from ..shared import global_header_zuora_track_id_enum1 as shared_global_header_zuora_track_id_enum1
from ..shared import getdocumentpropertiesresponsetype as shared_getdocumentpropertiesresponsetype


@dataclasses.dataclass
class GetDocumentProperiesPathParams:
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    document_type: shared_global_header_zuora_track_id_enum1.GlobalHeaderZuoraTrackIDEnum1 = dataclasses.field(metadata={'path_param': { 'field_name': 'documentType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocumentProperiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocumentProperiesRequest:
    headers: GetDocumentProperiesHeaders = dataclasses.field()
    path_params: GetDocumentProperiesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDocumentProperiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_document_properties_response_type: Optional[shared_getdocumentpropertiesresponsetype.GetDocumentPropertiesResponseType] = dataclasses.field(default=None)
    
