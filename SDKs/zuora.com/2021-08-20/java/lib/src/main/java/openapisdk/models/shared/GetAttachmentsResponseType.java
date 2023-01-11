package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAttachmentsResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public GetAttachmentResponseWithoutSuccessType[] attachments;
    public GetAttachmentsResponseType withAttachments(GetAttachmentResponseWithoutSuccessType[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetAttachmentsResponseType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAttachmentsResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}