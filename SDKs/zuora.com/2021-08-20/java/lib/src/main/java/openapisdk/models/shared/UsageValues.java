package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsageValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public Long taskCount;
    public UsageValues withTaskCount(Long taskCount) {
        this.taskCount = taskCount;
        return this;
    }
}