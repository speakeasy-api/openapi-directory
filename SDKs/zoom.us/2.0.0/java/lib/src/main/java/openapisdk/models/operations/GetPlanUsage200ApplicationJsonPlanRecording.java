package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPlanUsage200ApplicationJsonPlanRecording
 * Recording Plan
**/
public class GetPlanUsage200ApplicationJsonPlanRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("free_storage")
    public String freeStorage;
    public GetPlanUsage200ApplicationJsonPlanRecording withFreeStorage(String freeStorage) {
        this.freeStorage = freeStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("free_storage_usage")
    public String freeStorageUsage;
    public GetPlanUsage200ApplicationJsonPlanRecording withFreeStorageUsage(String freeStorageUsage) {
        this.freeStorageUsage = freeStorageUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_storage")
    public String planStorage;
    public GetPlanUsage200ApplicationJsonPlanRecording withPlanStorage(String planStorage) {
        this.planStorage = planStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_storage_exceed")
    public String planStorageExceed;
    public GetPlanUsage200ApplicationJsonPlanRecording withPlanStorageExceed(String planStorageExceed) {
        this.planStorageExceed = planStorageExceed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_storage_usage")
    public String planStorageUsage;
    public GetPlanUsage200ApplicationJsonPlanRecording withPlanStorageUsage(String planStorageUsage) {
        this.planStorageUsage = planStorageUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetPlanUsage200ApplicationJsonPlanRecording withType(String type) {
        this.type = type;
        return this;
    }
}