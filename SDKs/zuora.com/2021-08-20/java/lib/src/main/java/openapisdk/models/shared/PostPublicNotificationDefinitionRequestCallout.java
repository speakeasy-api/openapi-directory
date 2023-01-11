package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPublicNotificationDefinitionRequestCallout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PostPublicNotificationDefinitionRequestCallout withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutAuth")
    public CalloutAuth calloutAuth;
    public PostPublicNotificationDefinitionRequestCallout withCalloutAuth(CalloutAuth calloutAuth) {
        this.calloutAuth = calloutAuth;
        return this;
    }
    @JsonProperty("calloutBaseurl")
    public String calloutBaseurl;
    public PostPublicNotificationDefinitionRequestCallout withCalloutBaseurl(String calloutBaseurl) {
        this.calloutBaseurl = calloutBaseurl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutParams")
    public java.util.Map<String, String> calloutParams;
    public PostPublicNotificationDefinitionRequestCallout withCalloutParams(java.util.Map<String, String> calloutParams) {
        this.calloutParams = calloutParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutRetry")
    public Boolean calloutRetry;
    public PostPublicNotificationDefinitionRequestCallout withCalloutRetry(Boolean calloutRetry) {
        this.calloutRetry = calloutRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPublicNotificationDefinitionRequestCallout withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public PostPublicNotificationDefinitionRequestCallout withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonProperty("httpMethod")
    public PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum httpMethod;
    public PostPublicNotificationDefinitionRequestCallout withHttpMethod(PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostPublicNotificationDefinitionRequestCallout withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("requiredAuth")
    public Boolean requiredAuth;
    public PostPublicNotificationDefinitionRequestCallout withRequiredAuth(Boolean requiredAuth) {
        this.requiredAuth = requiredAuth;
        return this;
    }
}