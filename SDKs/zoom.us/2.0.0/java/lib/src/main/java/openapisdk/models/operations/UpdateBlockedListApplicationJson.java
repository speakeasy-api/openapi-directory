package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBlockedListApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_type")
    public UpdateBlockedListApplicationJsonBlockTypeEnum blockType;
    public UpdateBlockedListApplicationJson withBlockType(UpdateBlockedListApplicationJsonBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateBlockedListApplicationJson withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match_type")
    public UpdateBlockedListApplicationJsonMatchTypeEnum matchType;
    public UpdateBlockedListApplicationJson withMatchType(UpdateBlockedListApplicationJsonMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public UpdateBlockedListApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateBlockedListApplicationJsonStatusEnum status;
    public UpdateBlockedListApplicationJson withStatus(UpdateBlockedListApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}