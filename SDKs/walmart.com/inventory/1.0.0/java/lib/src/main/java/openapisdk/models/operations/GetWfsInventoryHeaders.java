package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWfsInventoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetWfsInventoryHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE")
    public String wmCONSUMERCHANNELTYPE;
    public GetWfsInventoryHeaders withWmConsumerChannelType(String wmCONSUMERCHANNELTYPE) {
        this.wmCONSUMERCHANNELTYPE = wmCONSUMERCHANNELTYPE;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_QOS.CORRELATION_ID")
    public String wmQOSCORRELATIONID;
    public GetWfsInventoryHeaders withWmQosCorrelationId(String wmQOSCORRELATIONID) {
        this.wmQOSCORRELATIONID = wmQOSCORRELATIONID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN")
    public String wmSECACCESSTOKEN;
    public GetWfsInventoryHeaders withWmSecAccessToken(String wmSECACCESSTOKEN) {
        this.wmSECACCESSTOKEN = wmSECACCESSTOKEN;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=WM_SVC.NAME")
    public String wmSVCNAME;
    public GetWfsInventoryHeaders withWmSvcName(String wmSVCNAME) {
        this.wmSVCNAME = wmSVCNAME;
        return this;
    }
}