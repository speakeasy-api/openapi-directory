package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DeleteDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}