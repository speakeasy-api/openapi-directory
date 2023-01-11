package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforCreditMemoItemManualDistributionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cmi-id")
    public String cmiId;
    public PostRSforCreditMemoItemManualDistributionPathParams withCmiId(String cmiId) {
        this.cmiId = cmiId;
        return this;
    }
}