package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsSnapshotRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captureHeaders")
    public java.util.Map<String, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders> captureHeaders;
    public PostAdminRecordingsSnapshotRequestBody withCaptureHeaders(java.util.Map<String, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders> captureHeaders) {
        this.captureHeaders = captureHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractBodyCriteria")
    public PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extractBodyCriteria;
    public PostAdminRecordingsSnapshotRequestBody withExtractBodyCriteria(PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extractBodyCriteria) {
        this.extractBodyCriteria = extractBodyCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public PostAdminRecordingsSnapshotRequestBodyFilters filters;
    public PostAdminRecordingsSnapshotRequestBody withFilters(PostAdminRecordingsSnapshotRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persist")
    public Boolean persist;
    public PostAdminRecordingsSnapshotRequestBody withPersist(Boolean persist) {
        this.persist = persist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatsAsScenarios")
    public Boolean repeatsAsScenarios;
    public PostAdminRecordingsSnapshotRequestBody withRepeatsAsScenarios(Boolean repeatsAsScenarios) {
        this.repeatsAsScenarios = repeatsAsScenarios;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestBodyPattern")
    public java.util.Map<String, Object> requestBodyPattern;
    public PostAdminRecordingsSnapshotRequestBody withRequestBodyPattern(java.util.Map<String, Object> requestBodyPattern) {
        this.requestBodyPattern = requestBodyPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformerParameters")
    public java.util.Map<String, Object> transformerParameters;
    public PostAdminRecordingsSnapshotRequestBody withTransformerParameters(java.util.Map<String, Object> transformerParameters) {
        this.transformerParameters = transformerParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformers")
    public String[] transformers;
    public PostAdminRecordingsSnapshotRequestBody withTransformers(String[] transformers) {
        this.transformers = transformers;
        return this;
    }
}