package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailDebitMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public PostEmailDebitMemoPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}