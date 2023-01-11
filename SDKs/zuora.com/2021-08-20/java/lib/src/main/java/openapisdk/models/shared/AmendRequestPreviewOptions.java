package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmendRequestPreviewOptions
 * Use the `PreviewOptions` container to preview an amendment before committing its changes to a subscription. 
 * You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription. 
 * For example, make an Amend call with an Amendment object that removes an existing rate plan, 
 * another Amendment object that adds a new rate plan, and turn on the preview options.
 * 
**/
public class AmendRequestPreviewOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnablePreviewMode")
    public Boolean enablePreviewMode;
    public AmendRequestPreviewOptions withEnablePreviewMode(Boolean enablePreviewMode) {
        this.enablePreviewMode = enablePreviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeExistingDraftInvoiceItems")
    public Boolean includeExistingDraftInvoiceItems;
    public AmendRequestPreviewOptions withIncludeExistingDraftInvoiceItems(Boolean includeExistingDraftInvoiceItems) {
        this.includeExistingDraftInvoiceItems = includeExistingDraftInvoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPeriods")
    public Integer numberOfPeriods;
    public AmendRequestPreviewOptions withNumberOfPeriods(Integer numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewThroughTermEnd")
    public Boolean previewThroughTermEnd;
    public AmendRequestPreviewOptions withPreviewThroughTermEnd(Boolean previewThroughTermEnd) {
        this.previewThroughTermEnd = previewThroughTermEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewType")
    public String previewType;
    public AmendRequestPreviewOptions withPreviewType(String previewType) {
        this.previewType = previewType;
        return this;
    }
}