package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatMessages200ApplicationJsonMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public GetChatMessages200ApplicationJsonMessages withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetChatMessages200ApplicationJsonMessages withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetChatMessages200ApplicationJsonMessages withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reply_main_message_id")
    public String replyMainMessageId;
    public GetChatMessages200ApplicationJsonMessages withReplyMainMessageId(String replyMainMessageId) {
        this.replyMainMessageId = replyMainMessageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reply_main_message_timestamp")
    public Long replyMainMessageTimestamp;
    public GetChatMessages200ApplicationJsonMessages withReplyMainMessageTimestamp(Long replyMainMessageTimestamp) {
        this.replyMainMessageTimestamp = replyMainMessageTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sender")
    public String sender;
    public GetChatMessages200ApplicationJsonMessages withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetChatMessages200ApplicationJsonMessagesStatusEnum status;
    public GetChatMessages200ApplicationJsonMessages withStatus(GetChatMessages200ApplicationJsonMessagesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public GetChatMessages200ApplicationJsonMessages withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}