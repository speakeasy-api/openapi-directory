package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostAdminRecordingsSnapshotRequestBodyFilters
 * Filter requests for which to create stub mapping
**/
public class PostAdminRecordingsSnapshotRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials basicAuthCredentials;
    public PostAdminRecordingsSnapshotRequestBodyFilters withBasicAuthCredentials(PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyPatterns")
    public java.util.Map<String, Object>[] bodyPatterns;
    public PostAdminRecordingsSnapshotRequestBodyFilters withBodyPatterns(java.util.Map<String, Object>[] bodyPatterns) {
        this.bodyPatterns = bodyPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public PostAdminRecordingsSnapshotRequestBodyFilters withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public PostAdminRecordingsSnapshotRequestBodyFilters withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public PostAdminRecordingsSnapshotRequestBodyFilters withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PostAdminRecordingsSnapshotRequestBodyFilters withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public java.util.Map<String, Object> queryParameters;
    public PostAdminRecordingsSnapshotRequestBodyFilters withQueryParameters(java.util.Map<String, Object> queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostAdminRecordingsSnapshotRequestBodyFilters withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPath")
    public String urlPath;
    public PostAdminRecordingsSnapshotRequestBodyFilters withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPathPattern")
    public String urlPathPattern;
    public PostAdminRecordingsSnapshotRequestBodyFilters withUrlPathPattern(String urlPathPattern) {
        this.urlPathPattern = urlPathPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPattern")
    public String urlPattern;
    public PostAdminRecordingsSnapshotRequestBodyFilters withUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
        return this;
    }
}