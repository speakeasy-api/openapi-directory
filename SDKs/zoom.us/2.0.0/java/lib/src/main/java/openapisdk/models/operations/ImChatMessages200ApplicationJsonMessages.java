package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImChatMessages200ApplicationJsonMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public ImChatMessages200ApplicationJsonMessages withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("action_time")
    public OffsetDateTime actionTime;
    public ImChatMessages200ApplicationJsonMessages withActionTime(OffsetDateTime actionTime) {
        this.actionTime = actionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public ImChatMessages200ApplicationJsonMessages withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ImChatMessages200ApplicationJsonMessages withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sender")
    public String sender;
    public ImChatMessages200ApplicationJsonMessages withSender(String sender) {
        this.sender = sender;
        return this;
    }
}