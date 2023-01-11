package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostSettlePaymentResponseFinanceInformation
 * Container for the finance information related to the refund.
 * 
**/
public class PostSettlePaymentResponseFinanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCode")
    public String bankAccountAccountingCode;
    public PostSettlePaymentResponseFinanceInformation withBankAccountAccountingCode(String bankAccountAccountingCode) {
        this.bankAccountAccountingCode = bankAccountAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCodeType")
    public String bankAccountAccountingCodeType;
    public PostSettlePaymentResponseFinanceInformation withBankAccountAccountingCodeType(String bankAccountAccountingCodeType) {
        this.bankAccountAccountingCodeType = bankAccountAccountingCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredToAccounting")
    public PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting;
    public PostSettlePaymentResponseFinanceInformation withTransferredToAccounting(PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCode")
    public String unappliedPaymentAccountingCode;
    public PostSettlePaymentResponseFinanceInformation withUnappliedPaymentAccountingCode(String unappliedPaymentAccountingCode) {
        this.unappliedPaymentAccountingCode = unappliedPaymentAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCodeType")
    public String unappliedPaymentAccountingCodeType;
    public PostSettlePaymentResponseFinanceInformation withUnappliedPaymentAccountingCodeType(String unappliedPaymentAccountingCodeType) {
        this.unappliedPaymentAccountingCodeType = unappliedPaymentAccountingCodeType;
        return this;
    }
}