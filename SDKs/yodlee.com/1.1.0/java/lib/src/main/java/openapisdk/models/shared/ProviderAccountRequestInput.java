package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public ProviderAccountRequestAggregationSourceEnum aggregationSource;
    public ProviderAccountRequestInput withAggregationSource(ProviderAccountRequestAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentId")
    public Long consentId;
    public ProviderAccountRequestInput withConsentId(Long consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public ProvidersDatasetInput[] dataset;
    public ProviderAccountRequestInput withDataset(ProvidersDatasetInput[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetName")
    public ProviderAccountRequestDatasetNameEnum[] datasetName;
    public ProviderAccountRequestInput withDatasetName(ProviderAccountRequestDatasetNameEnum[] datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonProperty("field")
    public FieldInput[] field;
    public ProviderAccountRequestInput withField(FieldInput[] field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public ProviderAccountPreferences preferences;
    public ProviderAccountRequestInput withPreferences(ProviderAccountPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
}