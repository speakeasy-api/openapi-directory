package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBlockedList200ApplicationJsonBlockedList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_type")
    public ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum blockType;
    public ListBlockedList200ApplicationJsonBlockedList withBlockType(ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public ListBlockedList200ApplicationJsonBlockedList withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListBlockedList200ApplicationJsonBlockedList withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match_type")
    public ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum matchType;
    public ListBlockedList200ApplicationJsonBlockedList withMatchType(ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ListBlockedList200ApplicationJsonBlockedList withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListBlockedList200ApplicationJsonBlockedListStatusEnum status;
    public ListBlockedList200ApplicationJsonBlockedList withStatus(ListBlockedList200ApplicationJsonBlockedListStatusEnum status) {
        this.status = status;
        return this;
    }
}