package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDeleteFromComputeNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileName")
    public String fileName;
    public FileDeleteFromComputeNodePathParams withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public FileDeleteFromComputeNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public FileDeleteFromComputeNodePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}