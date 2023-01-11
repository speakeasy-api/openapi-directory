package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCalloutHistoryVoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptedNum")
    public String attemptedNum;
    public GetCalloutHistoryVoType withAttemptedNum(String attemptedNum) {
        this.attemptedNum = attemptedNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GetCalloutHistoryVoType withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategory")
    public String eventCategory;
    public GetCalloutHistoryVoType withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventContext")
    public String eventContext;
    public GetCalloutHistoryVoType withEventContext(String eventContext) {
        this.eventContext = eventContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public String notification;
    public GetCalloutHistoryVoType withNotification(String notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMethod")
    public String requestMethod;
    public GetCalloutHistoryVoType withRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestUrl")
    public String requestUrl;
    public GetCalloutHistoryVoType withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseCode")
    public String responseCode;
    public GetCalloutHistoryVoType withResponseCode(String responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseContent")
    public String responseContent;
    public GetCalloutHistoryVoType withResponseContent(String responseContent) {
        this.responseContent = responseContent;
        return this;
    }
}