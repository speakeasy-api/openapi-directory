package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingItemWithOperationsInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public SettingItemWithOperationsInformationContextEnum context;
    public SettingItemWithOperationsInformation withContext(SettingItemWithOperationsInformationContextEnum context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SettingItemWithOperationsInformation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpOperations")
    public SettingItemHttpOperation[] httpOperations;
    public SettingItemWithOperationsInformation withHttpOperations(SettingItemHttpOperation[] httpOperations) {
        this.httpOperations = httpOperations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingItemWithOperationsInformation withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathPattern")
    public String pathPattern;
    public SettingItemWithOperationsInformation withPathPattern(String pathPattern) {
        this.pathPattern = pathPattern;
        return this;
    }
}