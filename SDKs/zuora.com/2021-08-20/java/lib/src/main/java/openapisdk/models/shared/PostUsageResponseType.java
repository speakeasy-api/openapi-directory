package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostUsageResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkImportStatus")
    public String checkImportStatus;
    public PostUsageResponseType withCheckImportStatus(String checkImportStatus) {
        this.checkImportStatus = checkImportStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PostUsageResponseType withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostUsageResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}