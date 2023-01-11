package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscribeRequestPreviewOptions
 * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
 * 
**/
public class SubscribeRequestPreviewOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnablePreviewMode")
    public Boolean enablePreviewMode;
    public SubscribeRequestPreviewOptions withEnablePreviewMode(Boolean enablePreviewMode) {
        this.enablePreviewMode = enablePreviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPeriods")
    public Long numberOfPeriods;
    public SubscribeRequestPreviewOptions withNumberOfPeriods(Long numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewThroughTermEnd")
    public Boolean previewThroughTermEnd;
    public SubscribeRequestPreviewOptions withPreviewThroughTermEnd(Boolean previewThroughTermEnd) {
        this.previewThroughTermEnd = previewThroughTermEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewType")
    public SubscribeRequestPreviewOptionsPreviewTypeEnum previewType;
    public SubscribeRequestPreviewOptions withPreviewType(SubscribeRequestPreviewOptionsPreviewTypeEnum previewType) {
        this.previewType = previewType;
        return this;
    }
}