package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAdminMappingsStubMappingIdRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PutAdminMappingsStubMappingIdRequestBody withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public PutAdminMappingsStubMappingIdRequestBody withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutAdminMappingsStubMappingIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newScenarioState")
    public String newScenarioState;
    public PutAdminMappingsStubMappingIdRequestBody withNewScenarioState(String newScenarioState) {
        this.newScenarioState = newScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistent")
    public Boolean persistent;
    public PutAdminMappingsStubMappingIdRequestBody withPersistent(Boolean persistent) {
        this.persistent = persistent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postServeActions")
    public java.util.Map<String, Object> postServeActions;
    public PutAdminMappingsStubMappingIdRequestBody withPostServeActions(java.util.Map<String, Object> postServeActions) {
        this.postServeActions = postServeActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public PutAdminMappingsStubMappingIdRequestBody withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public PutAdminMappingsStubMappingIdRequestBodyRequest request;
    public PutAdminMappingsStubMappingIdRequestBody withRequest(PutAdminMappingsStubMappingIdRequestBodyRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredScenarioState")
    public String requiredScenarioState;
    public PutAdminMappingsStubMappingIdRequestBody withRequiredScenarioState(String requiredScenarioState) {
        this.requiredScenarioState = requiredScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public PutAdminMappingsStubMappingIdRequestBodyResponse response;
    public PutAdminMappingsStubMappingIdRequestBody withResponse(PutAdminMappingsStubMappingIdRequestBodyResponse response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioName")
    public String scenarioName;
    public PutAdminMappingsStubMappingIdRequestBody withScenarioName(String scenarioName) {
        this.scenarioName = scenarioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public PutAdminMappingsStubMappingIdRequestBody withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}