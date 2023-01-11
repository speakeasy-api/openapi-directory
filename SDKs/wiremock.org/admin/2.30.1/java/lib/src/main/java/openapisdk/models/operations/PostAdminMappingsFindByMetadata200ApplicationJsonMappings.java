package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsFindByMetadata200ApplicationJsonMappings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newScenarioState")
    public String newScenarioState;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withNewScenarioState(String newScenarioState) {
        this.newScenarioState = newScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistent")
    public Boolean persistent;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withPersistent(Boolean persistent) {
        this.persistent = persistent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postServeActions")
    public java.util.Map<String, Object> postServeActions;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withPostServeActions(java.util.Map<String, Object> postServeActions) {
        this.postServeActions = postServeActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest request;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withRequest(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredScenarioState")
    public String requiredScenarioState;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withRequiredScenarioState(String requiredScenarioState) {
        this.requiredScenarioState = requiredScenarioState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse response;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withResponse(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioName")
    public String scenarioName;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withScenarioName(String scenarioName) {
        this.scenarioName = scenarioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}