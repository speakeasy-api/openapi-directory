package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMultiNodeInventoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public UpdateMultiNodeInventoryHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE")
    public String wmCONSUMERCHANNELTYPE;
    public UpdateMultiNodeInventoryHeaders withWmConsumerChannelType(String wmCONSUMERCHANNELTYPE) {
        this.wmCONSUMERCHANNELTYPE = wmCONSUMERCHANNELTYPE;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_QOS.CORRELATION_ID")
    public String wmQOSCORRELATIONID;
    public UpdateMultiNodeInventoryHeaders withWmQosCorrelationId(String wmQOSCORRELATIONID) {
        this.wmQOSCORRELATIONID = wmQOSCORRELATIONID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN")
    public String wmSECACCESSTOKEN;
    public UpdateMultiNodeInventoryHeaders withWmSecAccessToken(String wmSECACCESSTOKEN) {
        this.wmSECACCESSTOKEN = wmSECACCESSTOKEN;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_SVC.NAME")
    public String wmSVCNAME;
    public UpdateMultiNodeInventoryHeaders withWmSvcName(String wmSVCNAME) {
        this.wmSVCNAME = wmSVCNAME;
        return this;
    }
}