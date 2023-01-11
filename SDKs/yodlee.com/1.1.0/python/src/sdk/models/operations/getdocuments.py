import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import documentresponse as shared_documentresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetDocumentsQueryParams:
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Keyword', 'style': 'form', 'explode': True }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    doc_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'docType', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDocumentsRequest:
    query_params: GetDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_response: Optional[shared_documentresponse.DocumentResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
