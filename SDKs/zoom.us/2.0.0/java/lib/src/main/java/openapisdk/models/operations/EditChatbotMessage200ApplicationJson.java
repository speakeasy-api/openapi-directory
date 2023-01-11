package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EditChatbotMessage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_id")
    public String messageId;
    public EditChatbotMessage200ApplicationJson withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robot_jid")
    public String robotJid;
    public EditChatbotMessage200ApplicationJson withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("sent_time")
    public OffsetDateTime sentTime;
    public EditChatbotMessage200ApplicationJson withSentTime(OffsetDateTime sentTime) {
        this.sentTime = sentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_jid")
    public String toJid;
    public EditChatbotMessage200ApplicationJson withToJid(String toJid) {
        this.toJid = toJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_jid")
    public String userJid;
    public EditChatbotMessage200ApplicationJson withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}