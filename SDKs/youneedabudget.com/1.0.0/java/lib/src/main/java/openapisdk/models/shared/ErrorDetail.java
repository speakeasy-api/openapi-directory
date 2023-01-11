package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorDetail {
    @JsonProperty("detail")
    public String detail;
    public ErrorDetail withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ErrorDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ErrorDetail withName(String name) {
        this.name = name;
        return this;
    }
}