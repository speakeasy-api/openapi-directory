package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminMappingsStubMappingId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAdminMappingsStubMappingId200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public GetAdminMappingsStubMappingId200ApplicationJson withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAdminMappingsStubMappingId200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newScenarioState")
    public String newScenarioState;
    public GetAdminMappingsStubMappingId200ApplicationJson withNewScenarioState(String newScenarioState) {
        this.newScenarioState = newScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistent")
    public Boolean persistent;
    public GetAdminMappingsStubMappingId200ApplicationJson withPersistent(Boolean persistent) {
        this.persistent = persistent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postServeActions")
    public java.util.Map<String, Object> postServeActions;
    public GetAdminMappingsStubMappingId200ApplicationJson withPostServeActions(java.util.Map<String, Object> postServeActions) {
        this.postServeActions = postServeActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public GetAdminMappingsStubMappingId200ApplicationJson withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest request;
    public GetAdminMappingsStubMappingId200ApplicationJson withRequest(GetAdminMappingsStubMappingId200ApplicationJsonRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredScenarioState")
    public String requiredScenarioState;
    public GetAdminMappingsStubMappingId200ApplicationJson withRequiredScenarioState(String requiredScenarioState) {
        this.requiredScenarioState = requiredScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse response;
    public GetAdminMappingsStubMappingId200ApplicationJson withResponse(GetAdminMappingsStubMappingId200ApplicationJsonResponse response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioName")
    public String scenarioName;
    public GetAdminMappingsStubMappingId200ApplicationJson withScenarioName(String scenarioName) {
        this.scenarioName = scenarioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public GetAdminMappingsStubMappingId200ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}