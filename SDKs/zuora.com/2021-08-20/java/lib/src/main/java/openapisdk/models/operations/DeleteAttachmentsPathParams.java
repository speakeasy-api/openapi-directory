package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAttachmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachment-id")
    public String attachmentId;
    public DeleteAttachmentsPathParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
}