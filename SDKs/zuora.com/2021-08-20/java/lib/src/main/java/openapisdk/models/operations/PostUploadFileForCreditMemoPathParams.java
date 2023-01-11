package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PostUploadFileForCreditMemoPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}