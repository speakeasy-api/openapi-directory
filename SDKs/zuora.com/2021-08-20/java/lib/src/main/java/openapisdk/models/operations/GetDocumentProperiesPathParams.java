package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentProperiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public GetDocumentProperiesPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentType")
    public openapisdk.models.shared.GlobalHeaderZuoraTrackIdEnum1 documentType;
    public GetDocumentProperiesPathParams withDocumentType(openapisdk.models.shared.GlobalHeaderZuoraTrackIdEnum1 documentType) {
        this.documentType = documentType;
        return this;
    }
}