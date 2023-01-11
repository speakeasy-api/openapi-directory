package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailBillingDocumentsfromBillRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billRunId")
    public String billRunId;
    public PostEmailBillingDocumentsfromBillRunPathParams withBillRunId(String billRunId) {
        this.billRunId = billRunId;
        return this;
    }
}