package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoCollectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public PostDebitMemoCollectPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}