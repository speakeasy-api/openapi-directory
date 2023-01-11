package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Event {
    @JsonProperty("accountId")
    public Long accountId;
    public Event withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answerTime")
    public LocalDate answerTime;
    public Event withAnswerTime(LocalDate answerTime) {
        this.answerTime = answerTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerId")
    public String callerId;
    public Event withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @JsonProperty("direction")
    public EventDirectionEnum direction;
    public Event withDirection(EventDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Event withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public LocalDate endTime;
    public Event withEndTime(LocalDate endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Event withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Event withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Event withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsData")
    public String smsData;
    public Event withSmsData(String smsData) {
        this.smsData = smsData;
        return this;
    }
    @JsonProperty("startTime")
    public LocalDate startTime;
    public Event withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("state")
    public EventStateEnum state;
    public Event withState(EventStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("type")
    public EventTypeEnum type;
    public Event withType(EventTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uciId")
    public Long uciId;
    public Event withUciId(Long uciId) {
        this.uciId = uciId;
        return this;
    }
    @JsonProperty("userId")
    public Long userId;
    public Event withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}