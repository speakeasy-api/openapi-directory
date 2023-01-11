package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPublicNotificationDefinitionRequestCallout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PutPublicNotificationDefinitionRequestCallout withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutAuth")
    public CalloutAuth calloutAuth;
    public PutPublicNotificationDefinitionRequestCallout withCalloutAuth(CalloutAuth calloutAuth) {
        this.calloutAuth = calloutAuth;
        return this;
    }
    @JsonProperty("calloutBaseurl")
    public String calloutBaseurl;
    public PutPublicNotificationDefinitionRequestCallout withCalloutBaseurl(String calloutBaseurl) {
        this.calloutBaseurl = calloutBaseurl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutParams")
    public java.util.Map<String, String> calloutParams;
    public PutPublicNotificationDefinitionRequestCallout withCalloutParams(java.util.Map<String, String> calloutParams) {
        this.calloutParams = calloutParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutRetry")
    public Boolean calloutRetry;
    public PutPublicNotificationDefinitionRequestCallout withCalloutRetry(Boolean calloutRetry) {
        this.calloutRetry = calloutRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPublicNotificationDefinitionRequestCallout withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("httpMethod")
    public PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum httpMethod;
    public PutPublicNotificationDefinitionRequestCallout withHttpMethod(PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutPublicNotificationDefinitionRequestCallout withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("requiredAuth")
    public Boolean requiredAuth;
    public PutPublicNotificationDefinitionRequestCallout withRequiredAuth(Boolean requiredAuth) {
        this.requiredAuth = requiredAuth;
        return this;
    }
}