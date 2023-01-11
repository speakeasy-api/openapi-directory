import dataclasses
from typing import Optional
from ..shared import proxygetexport as shared_proxygetexport
from ..shared import proxynodataresponse as shared_proxynodataresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectGetExportPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetExportQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectGetExportHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetExportRequest:
    headers: ObjectGetExportHeaders = dataclasses.field()
    path_params: ObjectGetExportPathParams = dataclasses.field()
    query_params: ObjectGetExportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ObjectGetExportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_get_export: Optional[shared_proxygetexport.ProxyGetExport] = dataclasses.field(default=None)
    proxy_no_data_response: Optional[shared_proxynodataresponse.ProxyNoDataResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
