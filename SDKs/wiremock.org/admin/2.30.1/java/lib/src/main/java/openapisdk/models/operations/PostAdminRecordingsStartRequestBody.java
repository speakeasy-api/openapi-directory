package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsStartRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captureHeaders")
    public java.util.Map<String, PostAdminRecordingsStartRequestBodyCaptureHeaders> captureHeaders;
    public PostAdminRecordingsStartRequestBody withCaptureHeaders(java.util.Map<String, PostAdminRecordingsStartRequestBodyCaptureHeaders> captureHeaders) {
        this.captureHeaders = captureHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractBodyCriteria")
    public PostAdminRecordingsStartRequestBodyExtractBodyCriteria extractBodyCriteria;
    public PostAdminRecordingsStartRequestBody withExtractBodyCriteria(PostAdminRecordingsStartRequestBodyExtractBodyCriteria extractBodyCriteria) {
        this.extractBodyCriteria = extractBodyCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public PostAdminRecordingsStartRequestBodyFilters filters;
    public PostAdminRecordingsStartRequestBody withFilters(PostAdminRecordingsStartRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persist")
    public Boolean persist;
    public PostAdminRecordingsStartRequestBody withPersist(Boolean persist) {
        this.persist = persist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatsAsScenarios")
    public Boolean repeatsAsScenarios;
    public PostAdminRecordingsStartRequestBody withRepeatsAsScenarios(Boolean repeatsAsScenarios) {
        this.repeatsAsScenarios = repeatsAsScenarios;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestBodyPattern")
    public java.util.Map<String, Object> requestBodyPattern;
    public PostAdminRecordingsStartRequestBody withRequestBodyPattern(java.util.Map<String, Object> requestBodyPattern) {
        this.requestBodyPattern = requestBodyPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBaseUrl")
    public String targetBaseUrl;
    public PostAdminRecordingsStartRequestBody withTargetBaseUrl(String targetBaseUrl) {
        this.targetBaseUrl = targetBaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformerParameters")
    public java.util.Map<String, Object> transformerParameters;
    public PostAdminRecordingsStartRequestBody withTransformerParameters(java.util.Map<String, Object> transformerParameters) {
        this.transformerParameters = transformerParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformers")
    public String[] transformers;
    public PostAdminRecordingsStartRequestBody withTransformers(String[] transformers) {
        this.transformers = transformers;
        return this;
    }
}