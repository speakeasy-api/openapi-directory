package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
public class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binarySizeThreshold")
    public String binarySizeThreshold;
    public PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria withBinarySizeThreshold(String binarySizeThreshold) {
        this.binarySizeThreshold = binarySizeThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textSizeThreshold")
    public String textSizeThreshold;
    public PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria withTextSizeThreshold(String textSizeThreshold) {
        this.textSizeThreshold = textSizeThreshold;
        return this;
    }
}