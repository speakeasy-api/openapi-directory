import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DeleteDocumentPathParams:
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDocumentRequest:
    path_params: DeleteDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
