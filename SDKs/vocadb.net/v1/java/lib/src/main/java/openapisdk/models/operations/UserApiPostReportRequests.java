package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostReportRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UserApiPostReportRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReportModel createReportModel;
    public UserApiPostReportRequests withCreateReportModel(openapisdk.models.shared.CreateReportModel createReportModel) {
        this.createReportModel = createReportModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.CreateReportModel createReportModel1;
    public UserApiPostReportRequests withCreateReportModel1(openapisdk.models.shared.CreateReportModel createReportModel1) {
        this.createReportModel1 = createReportModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateReportModel createReportModel2;
    public UserApiPostReportRequests withCreateReportModel2(openapisdk.models.shared.CreateReportModel createReportModel2) {
        this.createReportModel2 = createReportModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UserApiPostReportRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}