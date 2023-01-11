package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetClassification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocation")
    public Double allocation;
    public AssetClassification withAllocation(Double allocation) {
        this.allocation = allocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
    public String classificationType;
    public AssetClassification withClassificationType(String classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationValue")
    public String classificationValue;
    public AssetClassification withClassificationValue(String classificationValue) {
        this.classificationValue = classificationValue;
        return this;
    }
}