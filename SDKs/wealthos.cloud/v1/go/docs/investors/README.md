# Investors

## Overview

The Investor endpoint allows you to create investors, update investors and retrieve investor records in bulk or individually. If a KYC/AML service has been set-up through WealthOS (e.g. Onfido), then the investor will be verified using this service. 

When retrieving the investor, the following fields will provide information regarding the investor’s status that can be used for deciding on what subsequent investor action must be permitted.
 
* dealing_status: Normally set to Active once KYC/AML passes, however may be independently set by administrators if required. 
 
* kyc_aml_status - the status of the KYC/AML check 
 
* Status - ultimate status of the investor derived from dealing_status and kcy_aml_status.

If WealthOS is not set-up to manage the KYC/AML service then the wealth manager must specify the `kyc_aml_status` and `dealing_status` on investor creation and update. The `status` of the investor will be consider active only when the `kyc_aml_status : "clear"` and `dealing_status : "active"`

### Available Operations

* [CreateInvestor](#createinvestor) - Create Investor
* [GetAllInvestors](#getallinvestors) - Get All Investors
* [GetInvestor](#getinvestor) - Get Investor
* [UpdateInvestor](#updateinvestor) - Update Investor

## CreateInvestor

Create a new investor in the system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Investors.CreateInvestor(ctx, operations.CreateInvestorRequest{
        RequestBody: operations.CreateInvestorRootTypeForInvestorCreationRequestInput{
            Address: operations.CreateInvestorRootTypeForInvestorCreationRequestAddress{
                AddressLine: sdk.String("14"),
                City: sdk.String("London"),
                Country: "GBR",
                PostalCode: "S2 2DF",
                State: sdk.String("England"),
                StreetName: sdk.String("Tottenham Court Road"),
            },
            BankAccounts: []CreateInvestorRootTypeForInvestorCreationRequestBankAccounts{
                operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts{
                    AccountName: "quae",
                    AccountStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnumActive.ToPointer(),
                    BankAccountNumber: "quidem",
                    BuildingSocietyRollNumber: sdk.String("molestias"),
                    DefaultAccount: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnumNo,
                    SortCode: sdk.String("pariatur"),
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts{
                    AccountName: "modi",
                    AccountStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnumInactive.ToPointer(),
                    BankAccountNumber: "rem",
                    BuildingSocietyRollNumber: sdk.String("voluptates"),
                    DefaultAccount: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnumYes,
                    SortCode: sdk.String("repudiandae"),
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts{
                    AccountName: "sint",
                    AccountStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnumActive.ToPointer(),
                    BankAccountNumber: "itaque",
                    BuildingSocietyRollNumber: sdk.String("incidunt"),
                    DefaultAccount: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnumYes,
                    SortCode: sdk.String("consequatur"),
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccounts{
                    AccountName: "est",
                    AccountStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnumInactive.ToPointer(),
                    BankAccountNumber: "explicabo",
                    BuildingSocietyRollNumber: sdk.String("deserunt"),
                    DefaultAccount: operations.CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnumNo,
                    SortCode: sdk.String("quibusdam"),
                },
            },
            DateOfBirth: operations.CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth{
                Day: "9",
                Month: "12",
                Year: "1990",
            },
            DealingStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnumInactive.ToPointer(),
            Email: sdk.String("johndoe@gmail.com"),
            EmploymentStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnumEmployed.ToPointer(),
            ExpressionOfWish: &operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish{
                SippBeneficiaries: []CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries{
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries{
                        Address: "13550 Rhoda Heights",
                        Email: sdk.String("Caden.Pagac@gmail.com"),
                        FirstName: "Mckayla",
                        LastName: "Rice",
                        Percentage: "labore",
                        PhoneNumber: sdk.String("delectus"),
                        TaxID: sdk.String("eum"),
                        Title: sdk.String("Mrs."),
                    },
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries{
                        Address: "535 Marquardt Pine",
                        Email: sdk.String("Sim.Wilderman44@gmail.com"),
                        FirstName: "Rose",
                        LastName: "Wolff",
                        Percentage: "rerum",
                        PhoneNumber: sdk.String("dicta"),
                        TaxID: sdk.String("magnam"),
                        Title: sdk.String("Miss"),
                    },
                },
                SippNominees: []CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees{
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees{
                        Address: "3682 Haley Trafficway",
                        Email: sdk.String("Matilda_McKenzie50@hotmail.com"),
                        FirstName: "Kacie",
                        LastName: "Will",
                        Percentage: "amet",
                        PhoneNumber: sdk.String("deserunt"),
                        TaxID: sdk.String("nisi"),
                        Title: sdk.String("Ms."),
                    },
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees{
                        Address: "6404 Michele Plains",
                        Email: sdk.String("Effie_Hoppe@gmail.com"),
                        FirstName: "Hildegard",
                        LastName: "Thiel",
                        Percentage: "aspernatur",
                        PhoneNumber: sdk.String("architecto"),
                        TaxID: sdk.String("magnam"),
                        Title: sdk.String("Mr."),
                    },
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees{
                        Address: "3555 Madaline Walk",
                        Email: sdk.String("Emmie89@yahoo.com"),
                        FirstName: "Brown",
                        LastName: "Hilll",
                        Percentage: "quasi",
                        PhoneNumber: sdk.String("iure"),
                        TaxID: sdk.String("doloribus"),
                        Title: sdk.String("Dr."),
                    },
                    operations.CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees{
                        Address: "85741 Tevin Groves",
                        Email: sdk.String("Janessa.Zulauf90@hotmail.com"),
                        FirstName: "Sanford",
                        LastName: "Bashirian",
                        Percentage: "consequuntur",
                        PhoneNumber: sdk.String("praesentium"),
                        TaxID: sdk.String("natus"),
                        Title: sdk.String("Mr."),
                    },
                },
            },
            FirstName: "John",
            Gender: sdk.String("male"),
            HomeNumber: sdk.String("+94776789543"),
            IDNumbers: []CreateInvestorRootTypeForInvestorCreationRequestIDNumbers{
                operations.CreateInvestorRootTypeForInvestorCreationRequestIDNumbers{
                    IDNumber: "quo",
                    IDType: "illum",
                },
            },
            InvestorID: "john_doe",
            KycAmlStatus: operations.CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnumNotStarted.ToPointer(),
            LastName: "Doe",
            LtaProtectionDetails: []CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails{
                operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("maxime"),
                    LtaPrimaryProtectionFactor: sdk.String("ea"),
                    LtaProtectionNotificationNumber: sdk.String("excepturi"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("odit"),
                    LtaProtectionType: operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnumFp12,
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("accusantium"),
                    LtaPrimaryProtectionFactor: sdk.String("ab"),
                    LtaProtectionNotificationNumber: sdk.String("maiores"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("quidem"),
                    LtaProtectionType: operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnumFp12,
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("voluptate"),
                    LtaPrimaryProtectionFactor: sdk.String("autem"),
                    LtaProtectionNotificationNumber: sdk.String("nam"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("eaque"),
                    LtaProtectionType: operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnumIp16,
                },
                operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("nemo"),
                    LtaPrimaryProtectionFactor: sdk.String("voluptatibus"),
                    LtaProtectionNotificationNumber: sdk.String("perferendis"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("fugiat"),
                    LtaProtectionType: operations.CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnumEnhanced,
                },
            },
            MifidTaxID: sdk.String("2382392274"),
            MobileNumber: sdk.String("+94716759546"),
            MpaaTriggered: sdk.Bool(true),
            MpaaTriggeredDate: sdk.String("2021-12-05"),
            Nationality: "GBR",
            OfficeNumber: sdk.String("+94336789543"),
            RetirementAge: sdk.Float64(60),
            TaxID: "AB123456C",
            TaxResidence: operations.CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnumGbEng.ToPointer(),
            TaxResidencyCompliant: true,
            Title: sdk.String("Mr."),
        },
        XAPIKey: "aut",
    }, operations.CreateInvestorSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForInvestorCreationResponse != nil {
        // handle response
    }
}
```

## GetAllInvestors

Returns all the investors in an array

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Investors.GetAllInvestors(ctx, operations.GetAllInvestorsRequest{
        PageNumber: sdk.String("cumque"),
        PageSize: sdk.String("corporis"),
        Sort: operations.GetAllInvestorsSortEnumDesc.ToPointer(),
        XAPIKey: "libero",
    }, operations.GetAllInvestorsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllInvestors200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetInvestor

Get details of an investor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Investors.GetInvestor(ctx, operations.GetInvestorRequest{
        InvestorID: "nobis",
        XAPIKey: "dolores",
    }, operations.GetInvestorSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForInvestor != nil {
        // handle response
    }
}
```

## UpdateInvestor

Update an existing investor. WealthOS will update only the fields sent in the request. Field mentioned as Nullable can be deleted by updating those values with null.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Investors.UpdateInvestor(ctx, operations.UpdateInvestorRequest{
        RequestBody: operations.UpdateInvestorUpdateRequestBodyForInvestorInput{
            Address: &operations.UpdateInvestorUpdateRequestBodyForInvestorAddress{
                AddressLine: sdk.String("14"),
                City: sdk.String("London"),
                Country: sdk.String("GBR"),
                PostalCode: sdk.String("S2 2DF"),
                State: sdk.String("England"),
                StreetName: sdk.String("Tottenham Court Road"),
            },
            DateOfBirth: &operations.UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth{
                Day: sdk.String("9"),
                Month: sdk.String("12"),
                Year: sdk.String("1990"),
            },
            DealingStatus: operations.UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnumInactive.ToPointer(),
            Email: sdk.String("johndoe@gmail.com"),
            EmploymentStatus: operations.UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnumEmployed.ToPointer(),
            ExpressionOfWish: &operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish{
                SippBeneficiaries: []UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries{
                    operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries{
                        Address: "4031 Aidan Curve",
                        Email: sdk.String("Jalyn.Fadel94@hotmail.com"),
                        FirstName: "Timothy",
                        LastName: "Mohr",
                        Percentage: "facilis",
                        PhoneNumber: sdk.String("perspiciatis"),
                        TaxID: sdk.String("voluptatem"),
                        Title: sdk.String("Miss"),
                    },
                    operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries{
                        Address: "56056 Zachery View",
                        Email: sdk.String("Lessie_Parisian@gmail.com"),
                        FirstName: "Lambert",
                        LastName: "Rolfson",
                        Percentage: "libero",
                        PhoneNumber: sdk.String("delectus"),
                        TaxID: sdk.String("quaerat"),
                        Title: sdk.String("Ms."),
                    },
                },
                SippNominees: []UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees{
                    operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees{
                        Address: "22129 Ritchie Lakes",
                        Email: sdk.String("Waldo.Farrell8@yahoo.com"),
                        FirstName: "Anderson",
                        LastName: "Bednar",
                        Percentage: "iure",
                        PhoneNumber: sdk.String("odio"),
                        TaxID: sdk.String("quaerat"),
                        Title: sdk.String("Dr."),
                    },
                    operations.UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees{
                        Address: "936 Kari Brook",
                        Email: sdk.String("Annamae.Roberts45@hotmail.com"),
                        FirstName: "Marianna",
                        LastName: "Leuschke",
                        Percentage: "omnis",
                        PhoneNumber: sdk.String("necessitatibus"),
                        TaxID: sdk.String("distinctio"),
                        Title: sdk.String("Dr."),
                    },
                },
            },
            FirstName: sdk.String("John"),
            Gender: sdk.String("male"),
            HomeNumber: sdk.String("+94112956325"),
            IDNumbers: []UpdateInvestorUpdateRequestBodyForInvestorIDNumbers{
                operations.UpdateInvestorUpdateRequestBodyForInvestorIDNumbers{
                    IDNumber: sdk.String("ipsum"),
                    IDType: sdk.String("voluptate"),
                },
                operations.UpdateInvestorUpdateRequestBodyForInvestorIDNumbers{
                    IDNumber: sdk.String("id"),
                    IDType: sdk.String("saepe"),
                },
            },
            KycAmlStatus: operations.UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnumNotStarted.ToPointer(),
            LastName: sdk.String("Doe"),
            LtaProtectionDetails: []UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails{
                operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("aspernatur"),
                    LtaPrimaryProtectionFactor: sdk.String("perferendis"),
                    LtaProtectionNotificationNumber: sdk.String("amet"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("optio"),
                    LtaProtectionType: operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnumIp16,
                },
                operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails{
                    LtaIndividualProtectionAmount: sdk.String("ad"),
                    LtaPrimaryProtectionFactor: sdk.String("saepe"),
                    LtaProtectionNotificationNumber: sdk.String("suscipit"),
                    LtaProtectionSchemeAdministratorReference: sdk.String("deserunt"),
                    LtaProtectionType: operations.UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnumIp14,
                },
            },
            MifidTaxID: sdk.String("2382392274"),
            MobileNumber: sdk.String("+94773216598"),
            MpaaTriggered: sdk.Bool(true),
            MpaaTriggeredDate: sdk.String("2021-12-05"),
            Nationality: sdk.String("GBR"),
            OfficeNumber: sdk.String("+94332659632"),
            ReferenceVersion: 1,
            RetirementAge: sdk.Float64(60),
            TaxID: sdk.String("QW123456E"),
            TaxResidence: operations.UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnumGbEng.ToPointer(),
            TaxResidencyCompliant: sdk.Bool(true),
            Title: sdk.String("Mr."),
        },
        InvestorID: "minima",
        XAPIKey: "repellendus",
    }, operations.UpdateInvestorSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForInvestor != nil {
        // handle response
    }
}
```
