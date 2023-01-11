package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForDebitMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public PostUploadFileForDebitMemoPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}