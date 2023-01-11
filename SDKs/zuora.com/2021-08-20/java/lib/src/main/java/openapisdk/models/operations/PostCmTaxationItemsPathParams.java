package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCmTaxationItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PostCmTaxationItemsPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}