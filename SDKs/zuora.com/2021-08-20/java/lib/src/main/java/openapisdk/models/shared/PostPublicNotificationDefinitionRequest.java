package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPublicNotificationDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PostPublicNotificationDefinitionRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout")
    public PostPublicNotificationDefinitionRequestCallout callout;
    public PostPublicNotificationDefinitionRequest withCallout(PostPublicNotificationDefinitionRequestCallout callout) {
        this.callout = callout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutActive")
    public Boolean calloutActive;
    public PostPublicNotificationDefinitionRequest withCalloutActive(Boolean calloutActive) {
        this.calloutActive = calloutActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationProfileId")
    public String communicationProfileId;
    public PostPublicNotificationDefinitionRequest withCommunicationProfileId(String communicationProfileId) {
        this.communicationProfileId = communicationProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPublicNotificationDefinitionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailActive")
    public Boolean emailActive;
    public PostPublicNotificationDefinitionRequest withEmailActive(Boolean emailActive) {
        this.emailActive = emailActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailTemplateId")
    public String emailTemplateId;
    public PostPublicNotificationDefinitionRequest withEmailTemplateId(String emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
        return this;
    }
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public PostPublicNotificationDefinitionRequest withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeNamespace")
    public String eventTypeNamespace;
    public PostPublicNotificationDefinitionRequest withEventTypeNamespace(String eventTypeNamespace) {
        this.eventTypeNamespace = eventTypeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRule")
    public PostPublicNotificationDefinitionRequestFilterRule filterRule;
    public PostPublicNotificationDefinitionRequest withFilterRule(PostPublicNotificationDefinitionRequestFilterRule filterRule) {
        this.filterRule = filterRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRuleParams")
    public java.util.Map<String, String> filterRuleParams;
    public PostPublicNotificationDefinitionRequest withFilterRuleParams(java.util.Map<String, String> filterRuleParams) {
        this.filterRuleParams = filterRuleParams;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostPublicNotificationDefinitionRequest withName(String name) {
        this.name = name;
        return this;
    }
}