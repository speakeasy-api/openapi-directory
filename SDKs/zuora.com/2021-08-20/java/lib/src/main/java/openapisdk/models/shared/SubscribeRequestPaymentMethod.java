package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SubscribeRequestPaymentMethod
 *  This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
 * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
 * Values: A valid electronic PaymentMethod.
**/
public class SubscribeRequestPaymentMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public SubscribeRequestPaymentMethod withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAbaCode")
    public String achAbaCode;
    public SubscribeRequestPaymentMethod withAchAbaCode(String achAbaCode) {
        this.achAbaCode = achAbaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountName")
    public String achAccountName;
    public SubscribeRequestPaymentMethod withAchAccountName(String achAccountName) {
        this.achAccountName = achAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountNumber")
    public String achAccountNumber;
    public SubscribeRequestPaymentMethod withAchAccountNumber(String achAccountNumber) {
        this.achAccountNumber = achAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountNumberMask")
    public String achAccountNumberMask;
    public SubscribeRequestPaymentMethod withAchAccountNumberMask(String achAccountNumberMask) {
        this.achAccountNumberMask = achAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAccountType")
    public String achAccountType;
    public SubscribeRequestPaymentMethod withAchAccountType(String achAccountType) {
        this.achAccountType = achAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAddress1")
    public String achAddress1;
    public SubscribeRequestPaymentMethod withAchAddress1(String achAddress1) {
        this.achAddress1 = achAddress1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchAddress2")
    public String achAddress2;
    public SubscribeRequestPaymentMethod withAchAddress2(String achAddress2) {
        this.achAddress2 = achAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AchBankName")
    public String achBankName;
    public SubscribeRequestPaymentMethod withAchBankName(String achBankName) {
        this.achBankName = achBankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public SubscribeRequestPaymentMethod withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankBranchCode")
    public String bankBranchCode;
    public SubscribeRequestPaymentMethod withBankBranchCode(String bankBranchCode) {
        this.bankBranchCode = bankBranchCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCheckDigit")
    public String bankCheckDigit;
    public SubscribeRequestPaymentMethod withBankCheckDigit(String bankCheckDigit) {
        this.bankCheckDigit = bankCheckDigit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCity")
    public String bankCity;
    public SubscribeRequestPaymentMethod withBankCity(String bankCity) {
        this.bankCity = bankCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankCode")
    public String bankCode;
    public SubscribeRequestPaymentMethod withBankCode(String bankCode) {
        this.bankCode = bankCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankIdentificationNumber")
    public String bankIdentificationNumber;
    public SubscribeRequestPaymentMethod withBankIdentificationNumber(String bankIdentificationNumber) {
        this.bankIdentificationNumber = bankIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankName")
    public String bankName;
    public SubscribeRequestPaymentMethod withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankPostalCode")
    public String bankPostalCode;
    public SubscribeRequestPaymentMethod withBankPostalCode(String bankPostalCode) {
        this.bankPostalCode = bankPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetName")
    public String bankStreetName;
    public SubscribeRequestPaymentMethod withBankStreetName(String bankStreetName) {
        this.bankStreetName = bankStreetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankStreetNumber")
    public String bankStreetNumber;
    public SubscribeRequestPaymentMethod withBankStreetNumber(String bankStreetNumber) {
        this.bankStreetNumber = bankStreetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountName")
    public String bankTransferAccountName;
    public SubscribeRequestPaymentMethod withBankTransferAccountName(String bankTransferAccountName) {
        this.bankTransferAccountName = bankTransferAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountNumber")
    public String bankTransferAccountNumber;
    public SubscribeRequestPaymentMethod withBankTransferAccountNumber(String bankTransferAccountNumber) {
        this.bankTransferAccountNumber = bankTransferAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountNumberMask")
    public String bankTransferAccountNumberMask;
    public SubscribeRequestPaymentMethod withBankTransferAccountNumberMask(String bankTransferAccountNumberMask) {
        this.bankTransferAccountNumberMask = bankTransferAccountNumberMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferAccountType")
    public String bankTransferAccountType;
    public SubscribeRequestPaymentMethod withBankTransferAccountType(String bankTransferAccountType) {
        this.bankTransferAccountType = bankTransferAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankTransferType")
    public String bankTransferType;
    public SubscribeRequestPaymentMethod withBankTransferType(String bankTransferType) {
        this.bankTransferType = bankTransferType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessIdentificationCode")
    public String businessIdentificationCode;
    public SubscribeRequestPaymentMethod withBusinessIdentificationCode(String businessIdentificationCode) {
        this.businessIdentificationCode = businessIdentificationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public SubscribeRequestPaymentMethod withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public SubscribeRequestPaymentMethod withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public SubscribeRequestPaymentMethod withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public SubscribeRequestPaymentMethod withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress1")
    public String creditCardAddress1;
    public SubscribeRequestPaymentMethod withCreditCardAddress1(String creditCardAddress1) {
        this.creditCardAddress1 = creditCardAddress1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardAddress2")
    public String creditCardAddress2;
    public SubscribeRequestPaymentMethod withCreditCardAddress2(String creditCardAddress2) {
        this.creditCardAddress2 = creditCardAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCity")
    public String creditCardCity;
    public SubscribeRequestPaymentMethod withCreditCardCity(String creditCardCity) {
        this.creditCardCity = creditCardCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardCountry")
    public String creditCardCountry;
    public SubscribeRequestPaymentMethod withCreditCardCountry(String creditCardCountry) {
        this.creditCardCountry = creditCardCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationMonth")
    public Integer creditCardExpirationMonth;
    public SubscribeRequestPaymentMethod withCreditCardExpirationMonth(Integer creditCardExpirationMonth) {
        this.creditCardExpirationMonth = creditCardExpirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardExpirationYear")
    public Integer creditCardExpirationYear;
    public SubscribeRequestPaymentMethod withCreditCardExpirationYear(Integer creditCardExpirationYear) {
        this.creditCardExpirationYear = creditCardExpirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardHolderName")
    public String creditCardHolderName;
    public SubscribeRequestPaymentMethod withCreditCardHolderName(String creditCardHolderName) {
        this.creditCardHolderName = creditCardHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardMaskNumber")
    public String creditCardMaskNumber;
    public SubscribeRequestPaymentMethod withCreditCardMaskNumber(String creditCardMaskNumber) {
        this.creditCardMaskNumber = creditCardMaskNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardNumber")
    public String creditCardNumber;
    public SubscribeRequestPaymentMethod withCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardPostalCode")
    public String creditCardPostalCode;
    public SubscribeRequestPaymentMethod withCreditCardPostalCode(String creditCardPostalCode) {
        this.creditCardPostalCode = creditCardPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardSecurityCode")
    public String creditCardSecurityCode;
    public SubscribeRequestPaymentMethod withCreditCardSecurityCode(String creditCardSecurityCode) {
        this.creditCardSecurityCode = creditCardSecurityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardState")
    public String creditCardState;
    public SubscribeRequestPaymentMethod withCreditCardState(String creditCardState) {
        this.creditCardState = creditCardState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditCardType")
    public String creditCardType;
    public SubscribeRequestPaymentMethod withCreditCardType(String creditCardType) {
        this.creditCardType = creditCardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceSessionId")
    public String deviceSessionId;
    public SubscribeRequestPaymentMethod withDeviceSessionId(String deviceSessionId) {
        this.deviceSessionId = deviceSessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public SubscribeRequestPaymentMethod withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExistingMandate")
    public String existingMandate;
    public SubscribeRequestPaymentMethod withExistingMandate(String existingMandate) {
        this.existingMandate = existingMandate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public SubscribeRequestPaymentMethod withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayOptionData")
    public SubscribeRequestPaymentMethodGatewayOptionData gatewayOptionData;
    public SubscribeRequestPaymentMethod withGatewayOptionData(SubscribeRequestPaymentMethodGatewayOptionData gatewayOptionData) {
        this.gatewayOptionData = gatewayOptionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IBAN")
    public String iban;
    public SubscribeRequestPaymentMethod withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPAddress")
    public String ipAddress;
    public SubscribeRequestPaymentMethod withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public SubscribeRequestPaymentMethod withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFailedSaleTransactionDate")
    public OffsetDateTime lastFailedSaleTransactionDate;
    public SubscribeRequestPaymentMethod withLastFailedSaleTransactionDate(OffsetDateTime lastFailedSaleTransactionDate) {
        this.lastFailedSaleTransactionDate = lastFailedSaleTransactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public SubscribeRequestPaymentMethod withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastTransactionDateTime")
    public OffsetDateTime lastTransactionDateTime;
    public SubscribeRequestPaymentMethod withLastTransactionDateTime(OffsetDateTime lastTransactionDateTime) {
        this.lastTransactionDateTime = lastTransactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastTransactionStatus")
    public String lastTransactionStatus;
    public SubscribeRequestPaymentMethod withLastTransactionStatus(String lastTransactionStatus) {
        this.lastTransactionStatus = lastTransactionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateCreationDate")
    public LocalDate mandateCreationDate;
    public SubscribeRequestPaymentMethod withMandateCreationDate(LocalDate mandateCreationDate) {
        this.mandateCreationDate = mandateCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateID")
    public String mandateID;
    public SubscribeRequestPaymentMethod withMandateId(String mandateID) {
        this.mandateID = mandateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateReceived")
    public String mandateReceived;
    public SubscribeRequestPaymentMethod withMandateReceived(String mandateReceived) {
        this.mandateReceived = mandateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MandateUpdateDate")
    public LocalDate mandateUpdateDate;
    public SubscribeRequestPaymentMethod withMandateUpdateDate(LocalDate mandateUpdateDate) {
        this.mandateUpdateDate = mandateUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConsecutivePaymentFailures")
    public Long maxConsecutivePaymentFailures;
    public SubscribeRequestPaymentMethod withMaxConsecutivePaymentFailures(Long maxConsecutivePaymentFailures) {
        this.maxConsecutivePaymentFailures = maxConsecutivePaymentFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SubscribeRequestPaymentMethod withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumConsecutiveFailures")
    public Integer numConsecutiveFailures;
    public SubscribeRequestPaymentMethod withNumConsecutiveFailures(Integer numConsecutiveFailures) {
        this.numConsecutiveFailures = numConsecutiveFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodStatus")
    public String paymentMethodStatus;
    public SubscribeRequestPaymentMethod withPaymentMethodStatus(String paymentMethodStatus) {
        this.paymentMethodStatus = paymentMethodStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentRetryWindow")
    public Long paymentRetryWindow;
    public SubscribeRequestPaymentMethod withPaymentRetryWindow(Long paymentRetryWindow) {
        this.paymentRetryWindow = paymentRetryWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalBaid")
    public String paypalBaid;
    public SubscribeRequestPaymentMethod withPaypalBaid(String paypalBaid) {
        this.paypalBaid = paypalBaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalEmail")
    public String paypalEmail;
    public SubscribeRequestPaymentMethod withPaypalEmail(String paypalEmail) {
        this.paypalEmail = paypalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalPreapprovalKey")
    public String paypalPreapprovalKey;
    public SubscribeRequestPaymentMethod withPaypalPreapprovalKey(String paypalPreapprovalKey) {
        this.paypalPreapprovalKey = paypalPreapprovalKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaypalType")
    public String paypalType;
    public SubscribeRequestPaymentMethod withPaypalType(String paypalType) {
        this.paypalType = paypalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public SubscribeRequestPaymentMethod withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public SubscribeRequestPaymentMethod withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondTokenId")
    public String secondTokenId;
    public SubscribeRequestPaymentMethod withSecondTokenId(String secondTokenId) {
        this.secondTokenId = secondTokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkipValidation")
    public Boolean skipValidation;
    public SubscribeRequestPaymentMethod withSkipValidation(Boolean skipValidation) {
        this.skipValidation = skipValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public SubscribeRequestPaymentMethod withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetName")
    public String streetName;
    public SubscribeRequestPaymentMethod withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreetNumber")
    public String streetNumber;
    public SubscribeRequestPaymentMethod withStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenId")
    public String tokenId;
    public SubscribeRequestPaymentMethod withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfErrorPayments")
    public Integer totalNumberOfErrorPayments;
    public SubscribeRequestPaymentMethod withTotalNumberOfErrorPayments(Integer totalNumberOfErrorPayments) {
        this.totalNumberOfErrorPayments = totalNumberOfErrorPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalNumberOfProcessedPayments")
    public Integer totalNumberOfProcessedPayments;
    public SubscribeRequestPaymentMethod withTotalNumberOfProcessedPayments(Integer totalNumberOfProcessedPayments) {
        this.totalNumberOfProcessedPayments = totalNumberOfProcessedPayments;
        return this;
    }
    @JsonProperty("Type")
    public SubscribeRequestPaymentMethodTypeEnum type;
    public SubscribeRequestPaymentMethod withType(SubscribeRequestPaymentMethodTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public SubscribeRequestPaymentMethod withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public SubscribeRequestPaymentMethod withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaultRetryRule")
    public Boolean useDefaultRetryRule;
    public SubscribeRequestPaymentMethod withUseDefaultRetryRule(Boolean useDefaultRetryRule) {
        this.useDefaultRetryRule = useDefaultRetryRule;
        return this;
    }
}