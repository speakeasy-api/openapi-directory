import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorAddress extends SpeakeasyBase {
    addressLine?: string;
    city?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    country?: string;
    postalCode?: string;
    state?: string;
    streetName?: string;
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth extends SpeakeasyBase {
    /**
     * two digit string `DD`
     */
    day?: string;
    /**
     * two digit string `MM`
     */
    month?: string;
    /**
     * four digit string `YYYY`
     */
    year?: string;
}
export declare enum UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
/**
 * Status of an investor best describes their personal circumstances.
 */
export declare enum UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum {
    Employed = "employed",
    SelfEmployed = "self_employed",
    Pensioner = "pensioner",
    ChildUnder16 = "child_under_16",
    InFullTimeEducation = "in_full_time_education",
    Unemployed = "unemployed",
    CaringForAPersonOver16 = "caring_for_a_person_over_16",
    CaringForAPersonUnder16 = "caring_for_a_person_under_16",
    Other = "other"
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    /**
     * Percentage of assets that will be allocated to the beneficiary
     */
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    /**
     * Percentage of assets that will be allocated to the nominee
     */
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
/**
 * Beneficiary and nominee list of the expression of wish.
 */
export declare class UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish extends SpeakeasyBase {
    /**
     * Beneficiaries list of the expression of wish
     */
    sippBeneficiaries?: UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries[];
    /**
     * Nominees list of the expression of wish
     */
    sippNominees?: UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees[];
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorIdNumbers extends SpeakeasyBase {
    idNumber?: string;
    idType?: string;
}
export declare enum UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
/**
 * primary=Primary protection, enhanced=Enhanced protection, fp12=Fixed protection 2012, fp14=Fixed protection 2014, fp16=Fixed protection 2016, ip14=Individual protection 2014, ip16=Individual protection 2016
 */
export declare enum UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails extends SpeakeasyBase {
    /**
     * Protected lifetime allowance of the investor. Required when the lta_protection_type is ip14 or ip16.
     */
    ltaIndividualProtectionAmount?: string;
    /**
     * Primary protection factor of the investor. Required only when the lta_protection_type is primary.
     */
    ltaPrimaryProtectionFactor?: string;
    /**
     * Protection notification number issued by HMRC. Required for protection from 2016 onwards. Required when the lta_protection_type is fp16 or ip16.
     */
    ltaProtectionNotificationNumber?: string;
    /**
     * Scheme administrator reference issued by HMRC. Required for protection from 2016 onwards. Required when the lta_protection_type is fp16 or ip16.
     */
    ltaProtectionSchemeAdministratorReference?: string;
    /**
     * primary=Primary protection, enhanced=Enhanced protection, fp12=Fixed protection 2012, fp14=Fixed protection 2014, fp16=Fixed protection 2016, ip14=Individual protection 2014, ip16=Individual protection 2016
     */
    ltaProtectionType: UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
 */
export declare enum UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Update Investor resource type
 */
export declare class UpdateInvestorUpdateRequestBodyForInvestorInput extends SpeakeasyBase {
    address?: UpdateInvestorUpdateRequestBodyForInvestorAddress;
    dateOfBirth?: UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth;
    dealingStatus?: UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum;
    email?: string;
    /**
     * Status of an investor best describes their personal circumstances.
     */
    employmentStatus?: UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum;
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    expressionOfWish?: UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish;
    firstName?: string;
    gender?: string;
    homeNumber?: string;
    /**
     * Replaces the array in the server.
     */
    idNumbers?: UpdateInvestorUpdateRequestBodyForInvestorIdNumbers[];
    kycAmlStatus?: UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum;
    lastName?: string;
    /**
     * Additional details of the lifetime allowance protections of the investor.
     */
    ltaProtectionDetails?: UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails[];
    mifidTaxId?: string;
    mobileNumber?: string;
    /**
     * Whether the investor has triggered the Money Purchase Annual Allowance.
     */
    mpaaTriggered?: boolean;
    /**
     * Date of triggering the Money Purchase Annual Allowance. This is only required if mpaa_triggered is true.
     */
    mpaaTriggeredDate?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    nationality?: string;
    officeNumber?: string;
    referenceVersion: number;
    /**
     * Intended retirement age of the investor.
     */
    retirementAge?: number;
    taxId?: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    taxResidence?: UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum;
    taxResidencyCompliant?: boolean;
    title?: string;
}
export declare class UpdateInvestorRequest extends SpeakeasyBase {
    requestBody: UpdateInvestorUpdateRequestBodyForInvestorInput;
    /**
     * Investor Id
     */
    investorId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class UpdateInvestor500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class UpdateInvestor429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Current status of the original request
 */
export declare enum UpdateInvestor409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class UpdateInvestor409ApplicationJSON extends SpeakeasyBase {
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Stringified original response body if status is `COMPLETE`
     */
    response?: Record<string, any>;
    /**
     * Current status of the original request
     */
    status: UpdateInvestor409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class UpdateInvestor404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class UpdateInvestor403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class UpdateInvestor401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class UpdateInvestor400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class UpdateInvestorRootTypeForInvestorAddress extends SpeakeasyBase {
    addressLine?: string;
    city?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    country: string;
    postalCode: string;
    state?: string;
    streetName?: string;
}
export declare class UpdateInvestorRootTypeForInvestorDateOfBirth extends SpeakeasyBase {
    /**
     * two digit string `DD`
     */
    day?: string;
    /**
     * two digit string `MM`
     */
    month?: string;
    /**
     * four digit string `YYYY`
     */
    year?: string;
}
export declare enum UpdateInvestorRootTypeForInvestorDealingStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
/**
 * Status of an investor best describes their personal circumstances.
 */
export declare enum UpdateInvestorRootTypeForInvestorEmploymentStatusEnum {
    Employed = "employed",
    SelfEmployed = "self_employed",
    Pensioner = "pensioner",
    ChildUnder16 = "child_under_16",
    InFullTimeEducation = "in_full_time_education",
    Unemployed = "unemployed",
    CaringForAPersonOver16 = "caring_for_a_person_over_16",
    CaringForAPersonUnder16 = "caring_for_a_person_under_16",
    Other = "other"
}
export declare class UpdateInvestorRootTypeForInvestorExpressionOfWishSippBeneficiaries extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
export declare class UpdateInvestorRootTypeForInvestorExpressionOfWishSippNominees extends SpeakeasyBase {
    address: string;
    email?: string;
    firstName: string;
    lastName: string;
    percentage: string;
    phoneNumber?: string;
    taxId?: string;
    title?: string;
}
/**
 * Beneficiary and nominee list of the expression of wish.
 */
export declare class UpdateInvestorRootTypeForInvestorExpressionOfWish extends SpeakeasyBase {
    sippBeneficiaries?: UpdateInvestorRootTypeForInvestorExpressionOfWishSippBeneficiaries[];
    sippNominees?: UpdateInvestorRootTypeForInvestorExpressionOfWishSippNominees[];
}
export declare class UpdateInvestorRootTypeForInvestorIdNumbers extends SpeakeasyBase {
    idNumber: string;
    idType: string;
}
export declare enum UpdateInvestorRootTypeForInvestorKycAmlStatusEnum {
    Submitted = "submitted",
    KycFailedError = "kyc_failed_error",
    Pending = "pending",
    Clear = "clear",
    NotStarted = "not_started"
}
export declare enum UpdateInvestorRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum {
    Primary = "primary",
    Enhanced = "enhanced",
    Fp12 = "fp12",
    Fp14 = "fp14",
    Ip14 = "ip14",
    Fp16 = "fp16",
    Ip16 = "ip16"
}
export declare class UpdateInvestorRootTypeForInvestorLtaProtectionDetails extends SpeakeasyBase {
    /**
     * Required when the lta_protection_type is ip14 or ip16.
     */
    ltaIndividualProtectionAmount?: string;
    /**
     * Required only when the lta_protection_type is primary
     */
    ltaPrimaryProtectionFactor?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionNotificationNumber?: string;
    /**
     * Required when the lta_protection_type is fp14 or ip16.
     */
    ltaProtectionSchemeAdministratorReference?: string;
    ltaProtectionType: UpdateInvestorRootTypeForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
}
export declare enum UpdateInvestorRootTypeForInvestorStatusEnum {
    KycPending = "kyc_pending",
    KycFailed = "kyc_failed",
    Inactive = "inactive",
    Active = "active"
}
/**
 * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
 */
export declare enum UpdateInvestorRootTypeForInvestorTaxResidenceEnum {
    GbEng = "GB-ENG",
    GbNir = "GB-NIR",
    GbSct = "GB-SCT",
    GbWls = "GB-WLS"
}
/**
 * JSON for the Investor resource type
 */
export declare class UpdateInvestorRootTypeForInvestor extends SpeakeasyBase {
    address: UpdateInvestorRootTypeForInvestorAddress;
    /**
     * Array of bank account IDs
     */
    bankAccounts?: string[];
    createdAt?: Date;
    dateOfBirth: UpdateInvestorRootTypeForInvestorDateOfBirth;
    dealingStatus?: UpdateInvestorRootTypeForInvestorDealingStatusEnum;
    email?: string;
    /**
     * Status of an investor best describes their personal circumstances.
     */
    employmentStatus?: UpdateInvestorRootTypeForInvestorEmploymentStatusEnum;
    /**
     * Beneficiary and nominee list of the expression of wish.
     */
    expressionOfWish?: UpdateInvestorRootTypeForInvestorExpressionOfWish;
    firstName: string;
    gender?: string;
    homeNumber?: string;
    idNumbers?: UpdateInvestorRootTypeForInvestorIdNumbers[];
    investorId: string;
    kycAmlStatus?: UpdateInvestorRootTypeForInvestorKycAmlStatusEnum;
    kycAmlStatusLastUpdated?: Date;
    lastName: string;
    /**
     * Additional details of the lifetime allowance protections of the investor
     */
    ltaProtectionDetails?: UpdateInvestorRootTypeForInvestorLtaProtectionDetails[];
    mifidTaxId?: string;
    mobileNumber?: string;
    /**
     * Whether the investor has triggered the Money Purchase Annual Allowance.
     */
    mpaaTriggered?: boolean;
    /**
     * Date of triggering the Money Purchase Annual Allowance. It is required if mpaa_triggered is true.
     */
    mpaaTriggeredDate?: string;
    /**
     * 3 character country code inline with ISO 3166-1 alpha-3
     */
    nationality: string;
    officeNumber?: string;
    referenceVersion?: number;
    /**
     * Intended retirement age of the investor
     */
    retirementAge?: number;
    status?: UpdateInvestorRootTypeForInvestorStatusEnum;
    taxId: string;
    /**
     * Residence of the investor for tax purposes. (for example, to claim relief at source) GB-ENG=England GB-NIR=Northern Ireland GB-SCT=Scotland GB-WLS=Wales
     */
    taxResidence?: UpdateInvestorRootTypeForInvestorTaxResidenceEnum;
    taxResidencyCompliant: boolean;
    title?: string;
    updatedAt?: Date;
}
export declare class UpdateInvestorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    rootTypeForInvestor?: UpdateInvestorRootTypeForInvestor;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    updateInvestor400ApplicationJSONObject?: UpdateInvestor400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    updateInvestor401ApplicationJSONObject?: UpdateInvestor401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    updateInvestor403ApplicationJSONObject?: UpdateInvestor403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    updateInvestor404ApplicationJSONObject?: UpdateInvestor404ApplicationJSON;
    /**
     * Duplicate request
     */
    updateInvestor409ApplicationJSONObject?: UpdateInvestor409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    updateInvestor429ApplicationJSONObject?: UpdateInvestor429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    updateInvestor500ApplicationJSONObject?: UpdateInvestor500ApplicationJSON;
}
