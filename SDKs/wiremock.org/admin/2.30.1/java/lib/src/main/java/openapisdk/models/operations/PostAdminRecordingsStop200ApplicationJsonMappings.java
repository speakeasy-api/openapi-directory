package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsStop200ApplicationJsonMappings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostAdminRecordingsStop200ApplicationJsonMappings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public PostAdminRecordingsStop200ApplicationJsonMappings withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostAdminRecordingsStop200ApplicationJsonMappings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newScenarioState")
    public String newScenarioState;
    public PostAdminRecordingsStop200ApplicationJsonMappings withNewScenarioState(String newScenarioState) {
        this.newScenarioState = newScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistent")
    public Boolean persistent;
    public PostAdminRecordingsStop200ApplicationJsonMappings withPersistent(Boolean persistent) {
        this.persistent = persistent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postServeActions")
    public java.util.Map<String, Object> postServeActions;
    public PostAdminRecordingsStop200ApplicationJsonMappings withPostServeActions(java.util.Map<String, Object> postServeActions) {
        this.postServeActions = postServeActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public PostAdminRecordingsStop200ApplicationJsonMappings withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public PostAdminRecordingsStop200ApplicationJsonMappingsRequest request;
    public PostAdminRecordingsStop200ApplicationJsonMappings withRequest(PostAdminRecordingsStop200ApplicationJsonMappingsRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredScenarioState")
    public String requiredScenarioState;
    public PostAdminRecordingsStop200ApplicationJsonMappings withRequiredScenarioState(String requiredScenarioState) {
        this.requiredScenarioState = requiredScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public PostAdminRecordingsStop200ApplicationJsonMappingsResponse response;
    public PostAdminRecordingsStop200ApplicationJsonMappings withResponse(PostAdminRecordingsStop200ApplicationJsonMappingsResponse response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioName")
    public String scenarioName;
    public PostAdminRecordingsStop200ApplicationJsonMappings withScenarioName(String scenarioName) {
        this.scenarioName = scenarioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public PostAdminRecordingsStop200ApplicationJsonMappings withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}