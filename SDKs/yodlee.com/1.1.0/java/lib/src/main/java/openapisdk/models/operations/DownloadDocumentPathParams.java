package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DownloadDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}