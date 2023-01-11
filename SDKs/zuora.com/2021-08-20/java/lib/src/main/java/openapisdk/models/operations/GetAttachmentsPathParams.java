package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachment-id")
    public String attachmentId;
    public GetAttachmentsPathParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
}