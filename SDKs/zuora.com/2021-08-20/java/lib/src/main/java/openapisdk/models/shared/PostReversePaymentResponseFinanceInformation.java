package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostReversePaymentResponseFinanceInformation
 * Container for the finance information related to the refund.
 * 
**/
public class PostReversePaymentResponseFinanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCode")
    public String bankAccountAccountingCode;
    public PostReversePaymentResponseFinanceInformation withBankAccountAccountingCode(String bankAccountAccountingCode) {
        this.bankAccountAccountingCode = bankAccountAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCodeType")
    public String bankAccountAccountingCodeType;
    public PostReversePaymentResponseFinanceInformation withBankAccountAccountingCodeType(String bankAccountAccountingCodeType) {
        this.bankAccountAccountingCodeType = bankAccountAccountingCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredToAccounting")
    public PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting;
    public PostReversePaymentResponseFinanceInformation withTransferredToAccounting(PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCode")
    public String unappliedPaymentAccountingCode;
    public PostReversePaymentResponseFinanceInformation withUnappliedPaymentAccountingCode(String unappliedPaymentAccountingCode) {
        this.unappliedPaymentAccountingCode = unappliedPaymentAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCodeType")
    public String unappliedPaymentAccountingCodeType;
    public PostReversePaymentResponseFinanceInformation withUnappliedPaymentAccountingCodeType(String unappliedPaymentAccountingCodeType) {
        this.unappliedPaymentAccountingCodeType = unappliedPaymentAccountingCodeType;
        return this;
    }
}