# investors

## Overview

The Investor endpoint allows you to create investors, update investors and retrieve investor records in bulk or individually. If a KYC/AML service has been set-up through WealthOS (e.g. Onfido), then the investor will be verified using this service. 

When retrieving the investor, the following fields will provide information regarding the investor’s status that can be used for deciding on what subsequent investor action must be permitted.
 
* dealing_status: Normally set to Active once KYC/AML passes, however may be independently set by administrators if required. 
 
* kyc_aml_status - the status of the KYC/AML check 
 
* Status - ultimate status of the investor derived from dealing_status and kcy_aml_status.

If WealthOS is not set-up to manage the KYC/AML service then the wealth manager must specify the `kyc_aml_status` and `dealing_status` on investor creation and update. The `status` of the investor will be consider active only when the `kyc_aml_status : "clear"` and `dealing_status : "active"`

### Available Operations

* [createInvestor](#createinvestor) - Create Investor
* [getAllInvestors](#getallinvestors) - Get All Investors
* [getInvestor](#getinvestor) - Get Investor
* [updateInvestor](#updateinvestor) - Update Investor

## createInvestor

Create a new investor in the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInvestorRequest;
import org.openapis.openapi.models.operations.CreateInvestorResponse;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestAddress;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestIdNumbers;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestInput;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum;
import org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum;
import org.openapis.openapi.models.operations.CreateInvestorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInvestorRequest req = new CreateInvestorRequest(                new CreateInvestorRootTypeForInvestorCreationRequestInput(                new CreateInvestorRootTypeForInvestorCreationRequestAddress("GBR", "S2 2DF") {{
                                                addressLine = "14";
                                                city = "London";
                                                state = "England";
                                                streetName = "Tottenham Court Road";
                                            }};,                 new CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth("9", "12", "1990");, "John", "john_doe", "Doe", "GBR", "AB123456C", true) {{
                                bankAccounts = new org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts[]{{
                                    add(new CreateInvestorRootTypeForInvestorCreationRequestBankAccounts("aliquid", "cupiditate", CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum.NO) {{
                                        accountName = "deserunt";
                                        accountStatus = CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnum.INACTIVE;
                                        bankAccountNumber = "quibusdam";
                                        buildingSocietyRollNumber = "labore";
                                        defaultAccount = CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum.YES;
                                        sortCode = "qui";
                                    }}),
                                }};
                                dealingStatus = CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum.INACTIVE;
                                email = "johndoe@gmail.com";
                                employmentStatus = CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum.EMPLOYED;
                                expressionOfWish = new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish() {{
                                    sippBeneficiaries = new org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries[]{{
                                        add(new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries("officia", "dolor", "debitis", "a") {{
                                            address = "83016 Glover Ranch";
                                            email = "Edwardo.Windler@hotmail.com";
                                            firstName = "Nigel";
                                            lastName = "Mayer";
                                            percentage = "aliquid";
                                            phoneNumber = "provident";
                                            taxId = "necessitatibus";
                                            title = "Ms.";
                                        }}),
                                    }};
                                    sippNominees = new org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees[]{{
                                        add(new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees("nam", "id", "blanditiis", "deleniti") {{
                                            address = "4896 Elfrieda Run";
                                            email = "Hans_Hyatt24@hotmail.com";
                                            firstName = "Kristian";
                                            lastName = "Haley";
                                            percentage = "accusamus";
                                            phoneNumber = "delectus";
                                            taxId = "quidem";
                                            title = "Ms.";
                                        }}),
                                        add(new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees("eum", "vero", "aspernatur", "architecto") {{
                                            address = "263 Libby Parkway";
                                            email = "Aileen71@yahoo.com";
                                            firstName = "Maggie";
                                            lastName = "Green";
                                            percentage = "labore";
                                            phoneNumber = "suscipit";
                                            taxId = "natus";
                                            title = "Miss";
                                        }}),
                                        add(new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees("debitis", "eius", "maxime", "deleniti") {{
                                            address = "05355 Bartoletti Plain";
                                            email = "Mack.Hammes@hotmail.com";
                                            firstName = "Sophie";
                                            lastName = "Connelly";
                                            percentage = "nemo";
                                            phoneNumber = "quasi";
                                            taxId = "iure";
                                            title = "Dr.";
                                        }}),
                                    }};
                                }};;
                                gender = "male";
                                homeNumber = "+94776789543";
                                idNumbers = new org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestIdNumbers[]{{
                                    add(new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers("architecto", "repudiandae") {{
                                        idNumber = "in";
                                        idType = "architecto";
                                    }}),
                                    add(new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers("nihil", "repellat") {{
                                        idNumber = "ullam";
                                        idType = "expedita";
                                    }}),
                                    add(new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers("saepe", "pariatur") {{
                                        idNumber = "quibusdam";
                                        idType = "sed";
                                    }}),
                                }};
                                kycAmlStatus = CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum.NOT_STARTED;
                                ltaProtectionDetails = new org.openapis.openapi.models.operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails[]{{
                                    add(new CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails(CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum.FP16) {{
                                        ltaIndividualProtectionAmount = "consequuntur";
                                        ltaPrimaryProtectionFactor = "praesentium";
                                        ltaProtectionNotificationNumber = "natus";
                                        ltaProtectionSchemeAdministratorReference = "magni";
                                        ltaProtectionType = CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum.PRIMARY;
                                    }}),
                                }};
                                mifidTaxId = "2382392274";
                                mobileNumber = "+94716759546";
                                mpaaTriggered = true;
                                mpaaTriggeredDate = "2021-12-05";
                                officeNumber = "+94336789543";
                                retirementAge = 60;
                                taxResidence = CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum.GB_ENG;
                                title = "Mr.";
                            }};, "illum");            

            CreateInvestorResponse res = sdk.investors.createInvestor(req, new CreateInvestorSecurity("pariatur") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForInvestorCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllInvestors

Returns all the investors in an array

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllInvestorsRequest;
import org.openapis.openapi.models.operations.GetAllInvestorsResponse;
import org.openapis.openapi.models.operations.GetAllInvestorsSecurity;
import org.openapis.openapi.models.operations.GetAllInvestorsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllInvestorsRequest req = new GetAllInvestorsRequest("maxime") {{
                pageNumber = "ea";
                pageSize = "excepturi";
                sort = GetAllInvestorsSortEnum.ASC;
            }};            

            GetAllInvestorsResponse res = sdk.investors.getAllInvestors(req, new GetAllInvestorsSecurity("ea") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllInvestors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvestor

Get details of an investor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvestorRequest;
import org.openapis.openapi.models.operations.GetInvestorResponse;
import org.openapis.openapi.models.operations.GetInvestorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvestorRequest req = new GetInvestorRequest("accusantium", "ab");            

            GetInvestorResponse res = sdk.investors.getInvestor(req, new GetInvestorSecurity("maiores") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForInvestor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInvestor

Update an existing investor. WealthOS will update only the fields sent in the request. Field mentioned as Nullable can be deleted by updating those values with null.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInvestorRequest;
import org.openapis.openapi.models.operations.UpdateInvestorResponse;
import org.openapis.openapi.models.operations.UpdateInvestorSecurity;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorAddress;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorIdNumbers;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorInput;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
import org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInvestorRequest req = new UpdateInvestorRequest(                new UpdateInvestorUpdateRequestBodyForInvestorInput(1L) {{
                                address = new UpdateInvestorUpdateRequestBodyForInvestorAddress() {{
                                    addressLine = "14";
                                    city = "London";
                                    country = "GBR";
                                    postalCode = "S2 2DF";
                                    state = "England";
                                    streetName = "Tottenham Court Road";
                                }};;
                                dateOfBirth = new UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth() {{
                                    day = "9";
                                    month = "12";
                                    year = "1990";
                                }};;
                                dealingStatus = UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum.INACTIVE;
                                email = "johndoe@gmail.com";
                                employmentStatus = UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum.EMPLOYED;
                                expressionOfWish = new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish() {{
                                    sippBeneficiaries = new org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries[]{{
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries("totam", "dignissimos", "eaque", "quis") {{
                                            address = "4470 Hickle Wall";
                                            email = "Russ76@gmail.com";
                                            firstName = "Floyd";
                                            lastName = "Welch";
                                            percentage = "libero";
                                            phoneNumber = "nobis";
                                            taxId = "dolores";
                                            title = "Mrs.";
                                        }}),
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries("rerum", "adipisci", "asperiores", "earum") {{
                                            address = "10174 Seamus Grove";
                                            email = "Timothy_Mohr3@hotmail.com";
                                            firstName = "Ottilie";
                                            lastName = "Cruickshank";
                                            percentage = "blanditiis";
                                            phoneNumber = "error";
                                            taxId = "eaque";
                                            title = "Ms.";
                                        }}),
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries("voluptate", "dignissimos", "reiciendis", "amet") {{
                                            address = "66585 Renner Walk";
                                            email = "Kayden20@gmail.com";
                                            firstName = "Dameon";
                                            lastName = "Dibbert";
                                            percentage = "ipsum";
                                            phoneNumber = "hic";
                                            taxId = "excepturi";
                                            title = "Miss";
                                        }}),
                                    }};
                                    sippNominees = new org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees[]{{
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees("voluptate", "dolorum", "deleniti", "omnis") {{
                                            address = "00044 Shaniya Radial";
                                            email = "Gayle54@hotmail.com";
                                            firstName = "Albin";
                                            lastName = "Steuber";
                                            percentage = "ab";
                                            phoneNumber = "soluta";
                                            taxId = "dolorum";
                                            title = "Ms.";
                                        }}),
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees("provident", "minima", "repellendus", "totam") {{
                                            address = "794 Jacky Plaza";
                                            email = "Diamond22@hotmail.com";
                                            firstName = "Nils";
                                            lastName = "Thompson";
                                            percentage = "ad";
                                            phoneNumber = "saepe";
                                            taxId = "suscipit";
                                            title = "Miss";
                                        }}),
                                        add(new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees("accusamus", "numquam", "enim", "dolorem") {{
                                            address = "0832 Pierre Trail";
                                            email = "Marilou_Wilderman@gmail.com";
                                            firstName = "Jayne";
                                            lastName = "Emard";
                                            percentage = "quisquam";
                                            phoneNumber = "tenetur";
                                            taxId = "amet";
                                            title = "Miss";
                                        }}),
                                    }};
                                }};;
                                firstName = "John";
                                gender = "male";
                                homeNumber = "+94112956325";
                                idNumbers = new org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorIdNumbers[]{{
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers() {{
                                        idNumber = "totam";
                                        idType = "nihil";
                                    }}),
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers() {{
                                        idNumber = "sit";
                                        idType = "expedita";
                                    }}),
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers() {{
                                        idNumber = "neque";
                                        idType = "sed";
                                    }}),
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers() {{
                                        idNumber = "vel";
                                        idType = "libero";
                                    }}),
                                }};
                                kycAmlStatus = UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum.NOT_STARTED;
                                lastName = "Doe";
                                ltaProtectionDetails = new org.openapis.openapi.models.operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails[]{{
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails(UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum.IP14) {{
                                        ltaIndividualProtectionAmount = "deserunt";
                                        ltaPrimaryProtectionFactor = "quam";
                                        ltaProtectionNotificationNumber = "ipsum";
                                        ltaProtectionSchemeAdministratorReference = "incidunt";
                                        ltaProtectionType = UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum.ENHANCED;
                                    }}),
                                    add(new UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails(UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum.FP14) {{
                                        ltaIndividualProtectionAmount = "maxime";
                                        ltaPrimaryProtectionFactor = "pariatur";
                                        ltaProtectionNotificationNumber = "soluta";
                                        ltaProtectionSchemeAdministratorReference = "dicta";
                                        ltaProtectionType = UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum.IP14;
                                    }}),
                                }};
                                mifidTaxId = "2382392274";
                                mobileNumber = "+94773216598";
                                mpaaTriggered = true;
                                mpaaTriggeredDate = "2021-12-05";
                                nationality = "GBR";
                                officeNumber = "+94332659632";
                                retirementAge = 60;
                                taxId = "QW123456E";
                                taxResidence = UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum.GB_ENG;
                                taxResidencyCompliant = true;
                                title = "Mr.";
                            }};, "incidunt", "aspernatur");            

            UpdateInvestorResponse res = sdk.investors.updateInvestor(req, new UpdateInvestorSecurity("dolores") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForInvestor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
