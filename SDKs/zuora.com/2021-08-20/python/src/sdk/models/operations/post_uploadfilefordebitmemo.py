import dataclasses
from typing import Optional
from ..shared import postuploadfileresponse as shared_postuploadfileresponse


@dataclasses.dataclass
class PostUploadFileForDebitMemoPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUploadFileForDebitMemoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUploadFileForDebitMemoRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostUploadFileForDebitMemoRequestBody:
    file: Optional[PostUploadFileForDebitMemoRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostUploadFileForDebitMemoRequest:
    headers: PostUploadFileForDebitMemoHeaders = dataclasses.field()
    path_params: PostUploadFileForDebitMemoPathParams = dataclasses.field()
    request: Optional[PostUploadFileForDebitMemoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUploadFileForDebitMemoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_upload_file_response: Optional[shared_postuploadfileresponse.PostUploadFileResponse] = dataclasses.field(default=None)
    
