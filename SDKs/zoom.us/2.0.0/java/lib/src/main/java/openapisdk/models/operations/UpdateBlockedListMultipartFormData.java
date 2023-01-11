package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBlockedListMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=block_type")
    public UpdateBlockedListMultipartFormDataBlockTypeEnum blockType;
    public UpdateBlockedListMultipartFormData withBlockType(UpdateBlockedListMultipartFormDataBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comment")
    public String comment;
    public UpdateBlockedListMultipartFormData withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=match_type")
    public UpdateBlockedListMultipartFormDataMatchTypeEnum matchType;
    public UpdateBlockedListMultipartFormData withMatchType(UpdateBlockedListMultipartFormDataMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_number")
    public String phoneNumber;
    public UpdateBlockedListMultipartFormData withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public UpdateBlockedListMultipartFormDataStatusEnum status;
    public UpdateBlockedListMultipartFormData withStatus(UpdateBlockedListMultipartFormDataStatusEnum status) {
        this.status = status;
        return this;
    }
}