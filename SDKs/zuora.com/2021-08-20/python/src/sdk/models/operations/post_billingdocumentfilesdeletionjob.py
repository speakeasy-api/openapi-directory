import dataclasses
from typing import Optional
from ..shared import postbillingdocumentfilesdeletionjobrequest as shared_postbillingdocumentfilesdeletionjobrequest
from ..shared import postbillingdocumentfilesdeletionjobresponse as shared_postbillingdocumentfilesdeletionjobresponse


@dataclasses.dataclass
class PostBillingDocumentFilesDeletionJobHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostBillingDocumentFilesDeletionJobRequest:
    headers: PostBillingDocumentFilesDeletionJobHeaders = dataclasses.field()
    request: shared_postbillingdocumentfilesdeletionjobrequest.PostBillingDocumentFilesDeletionJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingDocumentFilesDeletionJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_billing_document_files_deletion_job_response: Optional[shared_postbillingdocumentfilesdeletionjobresponse.PostBillingDocumentFilesDeletionJobResponse] = dataclasses.field(default=None)
    
