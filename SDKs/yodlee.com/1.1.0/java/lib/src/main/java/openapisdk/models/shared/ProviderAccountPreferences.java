package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoRefreshEnabled")
    public Boolean isAutoRefreshEnabled;
    public ProviderAccountPreferences withIsAutoRefreshEnabled(Boolean isAutoRefreshEnabled) {
        this.isAutoRefreshEnabled = isAutoRefreshEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDataExtractsEnabled")
    public Boolean isDataExtractsEnabled;
    public ProviderAccountPreferences withIsDataExtractsEnabled(Boolean isDataExtractsEnabled) {
        this.isDataExtractsEnabled = isDataExtractsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedProviderAccountId")
    public Long linkedProviderAccountId;
    public ProviderAccountPreferences withLinkedProviderAccountId(Long linkedProviderAccountId) {
        this.linkedProviderAccountId = linkedProviderAccountId;
        return this;
    }
}