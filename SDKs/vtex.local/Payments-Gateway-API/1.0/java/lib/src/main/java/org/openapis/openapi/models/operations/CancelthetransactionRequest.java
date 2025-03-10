/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CancelthetransactionRequest {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;

    public CancelthetransactionRequest withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.CancelthetransactionRequest cancelthetransactionRequest;

    public CancelthetransactionRequest withCancelthetransactionRequest(org.openapis.openapi.models.shared.CancelthetransactionRequest cancelthetransactionRequest) {
        this.cancelthetransactionRequest = cancelthetransactionRequest;
        return this;
    }
    
    /**
     * The Media type of the body of the request.  Default value for payment provider protocol is application/json
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;

    public CancelthetransactionRequest withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * The AppKey configured by the merchant (optional configuration)
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-PROVIDER-API-AppKey")
    public String xPROVIDERAPIAppKey;

    public CancelthetransactionRequest withXPROVIDERAPIAppKey(String xPROVIDERAPIAppKey) {
        this.xPROVIDERAPIAppKey = xPROVIDERAPIAppKey;
        return this;
    }
    
    /**
     * The AppToken configured by the merchant (optional configuration)
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-PROVIDER-API-AppToken")
    public String xPROVIDERAPIAppToken;

    public CancelthetransactionRequest withXPROVIDERAPIAppToken(String xPROVIDERAPIAppToken) {
        this.xPROVIDERAPIAppToken = xPROVIDERAPIAppToken;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;

    public CancelthetransactionRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    
    public CancelthetransactionRequest(@JsonProperty("Accept") String accept, @JsonProperty("CancelthetransactionRequest") org.openapis.openapi.models.shared.CancelthetransactionRequest cancelthetransactionRequest, @JsonProperty("Content-Type") String contentType, @JsonProperty("X-PROVIDER-API-AppKey") String xPROVIDERAPIAppKey, @JsonProperty("X-PROVIDER-API-AppToken") String xPROVIDERAPIAppToken, @JsonProperty("transactionId") String transactionId) {
        this.accept = accept;
        this.cancelthetransactionRequest = cancelthetransactionRequest;
        this.contentType = contentType;
        this.xPROVIDERAPIAppKey = xPROVIDERAPIAppKey;
        this.xPROVIDERAPIAppToken = xPROVIDERAPIAppToken;
        this.transactionId = transactionId;
  }
}
