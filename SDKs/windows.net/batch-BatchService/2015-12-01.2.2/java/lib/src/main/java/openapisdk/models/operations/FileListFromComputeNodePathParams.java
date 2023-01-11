package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileListFromComputeNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public FileListFromComputeNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public FileListFromComputeNodePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}