package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAnumberToBlockedListMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=block_type")
    public AddAnumberToBlockedListMultipartFormDataBlockTypeEnum blockType;
    public AddAnumberToBlockedListMultipartFormData withBlockType(AddAnumberToBlockedListMultipartFormDataBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comment")
    public String comment;
    public AddAnumberToBlockedListMultipartFormData withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=match_type")
    public AddAnumberToBlockedListMultipartFormDataMatchTypeEnum matchType;
    public AddAnumberToBlockedListMultipartFormData withMatchType(AddAnumberToBlockedListMultipartFormDataMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_number")
    public String phoneNumber;
    public AddAnumberToBlockedListMultipartFormData withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public AddAnumberToBlockedListMultipartFormDataStatusEnum status;
    public AddAnumberToBlockedListMultipartFormData withStatus(AddAnumberToBlockedListMultipartFormDataStatusEnum status) {
        this.status = status;
        return this;
    }
}