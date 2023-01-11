package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreditMemoPdfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PostCreditMemoPdfPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}