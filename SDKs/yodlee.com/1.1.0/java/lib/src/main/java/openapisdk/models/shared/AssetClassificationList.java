package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetClassificationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
    public String classificationType;
    public AssetClassificationList withClassificationType(String classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationValue")
    public String[] classificationValue;
    public AssetClassificationList withClassificationValue(String[] classificationValue) {
        this.classificationValue = classificationValue;
        return this;
    }
}