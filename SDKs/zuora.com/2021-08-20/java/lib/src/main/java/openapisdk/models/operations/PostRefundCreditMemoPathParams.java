package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditmemoId")
    public String creditmemoId;
    public PostRefundCreditMemoPathParams withCreditmemoId(String creditmemoId) {
        this.creditmemoId = creditmemoId;
        return this;
    }
}