package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMassUpdaterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bulk-key")
    public String bulkKey;
    public PutMassUpdaterPathParams withBulkKey(String bulkKey) {
        this.bulkKey = bulkKey;
        return this;
    }
}