package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublicNotificationDefinitionResponseCallout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GetPublicNotificationDefinitionResponseCallout withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutAuth")
    public CalloutAuth calloutAuth;
    public GetPublicNotificationDefinitionResponseCallout withCalloutAuth(CalloutAuth calloutAuth) {
        this.calloutAuth = calloutAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutBaseurl")
    public String calloutBaseurl;
    public GetPublicNotificationDefinitionResponseCallout withCalloutBaseurl(String calloutBaseurl) {
        this.calloutBaseurl = calloutBaseurl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutParams")
    public java.util.Map<String, String> calloutParams;
    public GetPublicNotificationDefinitionResponseCallout withCalloutParams(java.util.Map<String, String> calloutParams) {
        this.calloutParams = calloutParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutRetry")
    public Boolean calloutRetry;
    public GetPublicNotificationDefinitionResponseCallout withCalloutRetry(Boolean calloutRetry) {
        this.calloutRetry = calloutRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetPublicNotificationDefinitionResponseCallout withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public GetPublicNotificationDefinitionResponseCallout withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum httpMethod;
    public GetPublicNotificationDefinitionResponseCallout withHttpMethod(GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPublicNotificationDefinitionResponseCallout withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPublicNotificationDefinitionResponseCallout withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredAuth")
    public Boolean requiredAuth;
    public GetPublicNotificationDefinitionResponseCallout withRequiredAuth(Boolean requiredAuth) {
        this.requiredAuth = requiredAuth;
        return this;
    }
}