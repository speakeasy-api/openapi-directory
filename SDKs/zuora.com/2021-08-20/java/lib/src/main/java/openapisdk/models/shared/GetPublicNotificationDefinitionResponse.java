package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPublicNotificationDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GetPublicNotificationDefinitionResponse withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout")
    public GetPublicNotificationDefinitionResponseCallout callout;
    public GetPublicNotificationDefinitionResponse withCallout(GetPublicNotificationDefinitionResponseCallout callout) {
        this.callout = callout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutActive")
    public Boolean calloutActive;
    public GetPublicNotificationDefinitionResponse withCalloutActive(Boolean calloutActive) {
        this.calloutActive = calloutActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationProfileId")
    public String communicationProfileId;
    public GetPublicNotificationDefinitionResponse withCommunicationProfileId(String communicationProfileId) {
        this.communicationProfileId = communicationProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public GetPublicNotificationDefinitionResponse withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public GetPublicNotificationDefinitionResponse withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetPublicNotificationDefinitionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailActive")
    public Boolean emailActive;
    public GetPublicNotificationDefinitionResponse withEmailActive(Boolean emailActive) {
        this.emailActive = emailActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailTemplateId")
    public String emailTemplateId;
    public GetPublicNotificationDefinitionResponse withEmailTemplateId(String emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public GetPublicNotificationDefinitionResponse withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeNamespace")
    public String eventTypeNamespace;
    public GetPublicNotificationDefinitionResponse withEventTypeNamespace(String eventTypeNamespace) {
        this.eventTypeNamespace = eventTypeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRule")
    public GetPublicNotificationDefinitionResponseFilterRule filterRule;
    public GetPublicNotificationDefinitionResponse withFilterRule(GetPublicNotificationDefinitionResponseFilterRule filterRule) {
        this.filterRule = filterRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRuleParams")
    public java.util.Map<String, String> filterRuleParams;
    public GetPublicNotificationDefinitionResponse withFilterRuleParams(java.util.Map<String, String> filterRuleParams) {
        this.filterRuleParams = filterRuleParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPublicNotificationDefinitionResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPublicNotificationDefinitionResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public GetPublicNotificationDefinitionResponse withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public GetPublicNotificationDefinitionResponse withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}