package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABlockedList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_type")
    public GetABlockedList200ApplicationJsonBlockTypeEnum blockType;
    public GetABlockedList200ApplicationJson withBlockType(GetABlockedList200ApplicationJsonBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public GetABlockedList200ApplicationJson withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetABlockedList200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match_type")
    public GetABlockedList200ApplicationJsonMatchTypeEnum matchType;
    public GetABlockedList200ApplicationJson withMatchType(GetABlockedList200ApplicationJsonMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public GetABlockedList200ApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetABlockedList200ApplicationJsonStatusEnum status;
    public GetABlockedList200ApplicationJson withStatus(GetABlockedList200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}