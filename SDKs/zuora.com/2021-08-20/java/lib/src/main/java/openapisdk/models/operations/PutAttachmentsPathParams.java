package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAttachmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachment-id")
    public String attachmentId;
    public PutAttachmentsPathParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
}