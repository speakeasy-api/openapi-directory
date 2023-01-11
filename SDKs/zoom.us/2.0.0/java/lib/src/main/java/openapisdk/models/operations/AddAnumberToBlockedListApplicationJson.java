package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAnumberToBlockedListApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_type")
    public AddAnumberToBlockedListApplicationJsonBlockTypeEnum blockType;
    public AddAnumberToBlockedListApplicationJson withBlockType(AddAnumberToBlockedListApplicationJsonBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AddAnumberToBlockedListApplicationJson withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match_type")
    public AddAnumberToBlockedListApplicationJsonMatchTypeEnum matchType;
    public AddAnumberToBlockedListApplicationJson withMatchType(AddAnumberToBlockedListApplicationJsonMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AddAnumberToBlockedListApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AddAnumberToBlockedListApplicationJsonStatusEnum status;
    public AddAnumberToBlockedListApplicationJson withStatus(AddAnumberToBlockedListApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}