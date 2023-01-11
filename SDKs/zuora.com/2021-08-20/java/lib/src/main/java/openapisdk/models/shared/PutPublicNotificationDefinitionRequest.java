package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPublicNotificationDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PutPublicNotificationDefinitionRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout")
    public PutPublicNotificationDefinitionRequestCallout callout;
    public PutPublicNotificationDefinitionRequest withCallout(PutPublicNotificationDefinitionRequestCallout callout) {
        this.callout = callout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutActive")
    public Boolean calloutActive;
    public PutPublicNotificationDefinitionRequest withCalloutActive(Boolean calloutActive) {
        this.calloutActive = calloutActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationProfileId")
    public String communicationProfileId;
    public PutPublicNotificationDefinitionRequest withCommunicationProfileId(String communicationProfileId) {
        this.communicationProfileId = communicationProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPublicNotificationDefinitionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailActive")
    public Boolean emailActive;
    public PutPublicNotificationDefinitionRequest withEmailActive(Boolean emailActive) {
        this.emailActive = emailActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailTemplateId")
    public String emailTemplateId;
    public PutPublicNotificationDefinitionRequest withEmailTemplateId(String emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRule")
    public PutPublicNotificationDefinitionRequestFilterRule filterRule;
    public PutPublicNotificationDefinitionRequest withFilterRule(PutPublicNotificationDefinitionRequestFilterRule filterRule) {
        this.filterRule = filterRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRuleParams")
    public java.util.Map<String, String> filterRuleParams;
    public PutPublicNotificationDefinitionRequest withFilterRuleParams(java.util.Map<String, String> filterRuleParams) {
        this.filterRuleParams = filterRuleParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutPublicNotificationDefinitionRequest withName(String name) {
        this.name = name;
        return this;
    }
}