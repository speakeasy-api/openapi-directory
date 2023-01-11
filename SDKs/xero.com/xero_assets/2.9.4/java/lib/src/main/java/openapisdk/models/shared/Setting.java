package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Setting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetNumberPrefix")
    public String assetNumberPrefix;
    public Setting withAssetNumberPrefix(String assetNumberPrefix) {
        this.assetNumberPrefix = assetNumberPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetNumberSequence")
    public String assetNumberSequence;
    public Setting withAssetNumberSequence(String assetNumberSequence) {
        this.assetNumberSequence = assetNumberSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetStartDate")
    public LocalDate assetStartDate;
    public Setting withAssetStartDate(LocalDate assetStartDate) {
        this.assetStartDate = assetStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCapitalGainOnDisposalAccountId")
    public String defaultCapitalGainOnDisposalAccountId;
    public Setting withDefaultCapitalGainOnDisposalAccountId(String defaultCapitalGainOnDisposalAccountId) {
        this.defaultCapitalGainOnDisposalAccountId = defaultCapitalGainOnDisposalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGainOnDisposalAccountId")
    public String defaultGainOnDisposalAccountId;
    public Setting withDefaultGainOnDisposalAccountId(String defaultGainOnDisposalAccountId) {
        this.defaultGainOnDisposalAccountId = defaultGainOnDisposalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLossOnDisposalAccountId")
    public String defaultLossOnDisposalAccountId;
    public Setting withDefaultLossOnDisposalAccountId(String defaultLossOnDisposalAccountId) {
        this.defaultLossOnDisposalAccountId = defaultLossOnDisposalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDepreciationDate")
    public LocalDate lastDepreciationDate;
    public Setting withLastDepreciationDate(LocalDate lastDepreciationDate) {
        this.lastDepreciationDate = lastDepreciationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optInForTax")
    public Boolean optInForTax;
    public Setting withOptInForTax(Boolean optInForTax) {
        this.optInForTax = optInForTax;
        return this;
    }
}