package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPostCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PutPostCreditMemoPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}