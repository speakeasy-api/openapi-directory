import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import proxypostimport as shared_proxypostimport
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectPostImportQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectPostImportHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPostImportRequestBodyFile:
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'File' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    
class ObjectPostImportRequestBodyImportTypeEnum(str, Enum):
    USAGE = "Usage"
    PAYMENT = "Payment"
    QUOTE = "Quote"
    TAXATION_DETAIL = "TaxationDetail"
    UPDATE_ACCOUNTING_CODE = "UpdateAccountingCode"
    CREATE_REVENUE_SCHEDULE = "CreateRevenueSchedule"
    UPDATE_REVENUE_SCHEDULE = "UpdateRevenueSchedule"
    DELETE_REVENUE_SCHEDULE = "DeleteRevenueSchedule"
    IMPORT_FX_RATE = "ImportFXRate"


@dataclasses.dataclass
class ObjectPostImportRequestBody:
    file: ObjectPostImportRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    import_type: ObjectPostImportRequestBodyImportTypeEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'ImportType' }})
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'Name' }})
    

@dataclasses.dataclass
class ObjectPostImportRequest:
    headers: ObjectPostImportHeaders = dataclasses.field()
    query_params: ObjectPostImportQueryParams = dataclasses.field()
    request: ObjectPostImportRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ObjectPostImportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_post_import: Optional[shared_proxypostimport.ProxyPostImport] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
