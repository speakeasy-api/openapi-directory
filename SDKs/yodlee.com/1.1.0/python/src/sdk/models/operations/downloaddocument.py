import dataclasses
from typing import Optional
from ..shared import documentdownloadresponse as shared_documentdownloadresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DownloadDocumentPathParams:
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadDocumentRequest:
    path_params: DownloadDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_download_response: Optional[shared_documentdownloadresponse.DocumentDownloadResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
