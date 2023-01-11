import dataclasses
from typing import Optional
from ..shared import postuploadfileresponse as shared_postuploadfileresponse


@dataclasses.dataclass
class PostUploadFileForInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUploadFileForInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUploadFileForInvoiceRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostUploadFileForInvoiceRequestBody:
    file: Optional[PostUploadFileForInvoiceRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostUploadFileForInvoiceRequest:
    headers: PostUploadFileForInvoiceHeaders = dataclasses.field()
    path_params: PostUploadFileForInvoicePathParams = dataclasses.field()
    request: Optional[PostUploadFileForInvoiceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUploadFileForInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_upload_file_response: Optional[shared_postuploadfileresponse.PostUploadFileResponse] = dataclasses.field(default=None)
    
