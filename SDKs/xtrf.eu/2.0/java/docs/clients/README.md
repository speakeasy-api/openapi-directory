# clients

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [create2](#create2) - Creates a new person.
* [create3](#create3) - Creates a new client.
* [delete3](#delete3) - Removes a person.
* [delete4](#delete4) - Removes a customer price list.
* [delete5](#delete5) - Removes a client.
* [generateSingleUseSignInToken](#generatesingleusesignintoken) - Generates a single use sign-in token.
* [getAddress](#getaddress) - Returns address of a given client.
* [getAllIds1](#getallids1) - Returns persons' internal identifiers.
* [getAllIds2](#getallids2) - Returns clients' internal identifiers.
* [getAllNamesWithIds](#getallnameswithids) - Returns list of simple clients representations
* [getById1](#getbyid1) - Returns person details.
* [getById2](#getbyid2) - Returns client details.
* [getCategories](#getcategories) - Returns categories of a given client.
* [getContact](#getcontact) - Returns contact of a given person.
* [getContact1](#getcontact1) - Returns contact of a given client.
* [getCorrespondenceAddress](#getcorrespondenceaddress) - Returns correspondence address of a given client.
* [getCustomField](#getcustomfield) - Returns custom field of a given client.
* [getCustomFields](#getcustomfields) - Returns custom fields of a given person.
* [getCustomFields1](#getcustomfields1) - Returns custom fields of a given client.
* [getIndustries](#getindustries) - Returns industries of a given client.
* [updateAddress](#updateaddress) - Updates address of a given client.
* [updateCategories](#updatecategories) - Updates categories of a given client.
* [updateContact](#updatecontact) - Updates contact of a given person.
* [updateContact1](#updatecontact1) - Updates contact of a given client.
* [updateCorrespondenceAddress](#updatecorrespondenceaddress) - Updates correspondence address of a given client.
* [updateCustomField](#updatecustomfield) - Updates given custom field of a given client.
* [updateCustomFields](#updatecustomfields) - Updates custom fields of a given person.
* [updateCustomFields1](#updatecustomfields1) - Updates custom fields of a given client.
* [updateIndustries](#updateindustries) - Updates industries of a given client.
* [update1](#update1) - Updates an existing person.
* [update2](#update2) - Updates an existing client.

## create2

Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create2Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.CustomerPersonDTO;
import org.openapis.openapi.models.shared.CustomerPersonDTOGenderEnum;
import org.openapis.openapi.models.shared.PersonContactDTO;
import org.openapis.openapi.models.shared.PersonContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CustomerPersonDTO req = new CustomerPersonDTO() {{
                active = false;
                contact = new PersonContactDTO() {{
                    emails = new PersonContactEmailsDTO("facilis") {{
                        additional = new String[]{{
                            add("architecto"),
                            add("architecto"),
                        }};
                    }};;
                    fax = "repudiandae";
                    phones = new String[]{{
                        add("expedita"),
                        add("nihil"),
                    }};
                    sms = "repellat";
                }};;
                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                    add(new CustomFieldDTO() {{
                        key = "sed";
                        name = "Al Bashirian";
                        type = CustomFieldDTOTypeEnum.CHECKBOX;
                        value = new java.util.HashMap<String, Object>() {{
                            put("sunt", "quo");
                        }};
                    }}),
                    add(new CustomFieldDTO() {{
                        key = "illum";
                        name = "Simon Jenkins";
                        type = CustomFieldDTOTypeEnum.DATE_AND_TIME;
                        value = new java.util.HashMap<String, Object>() {{
                            put("ab", "maiores");
                        }};
                    }}),
                    add(new CustomFieldDTO() {{
                        key = "quidem";
                        name = "Colleen Johnston PhD";
                        type = CustomFieldDTOTypeEnum.DATE_AND_TIME;
                        value = new java.util.HashMap<String, Object>() {{
                            put("perferendis", "fugiat");
                            put("amet", "aut");
                            put("cumque", "corporis");
                            put("hic", "libero");
                        }};
                    }}),
                    add(new CustomFieldDTO() {{
                        key = "nobis";
                        name = "Beatrice Lebsack II";
                        type = CustomFieldDTOTypeEnum.DATE;
                        value = new java.util.HashMap<String, Object>() {{
                            put("perferendis", "dolores");
                        }};
                    }}),
                }};
                customerId = 793698L;
                firstProjectDate = OffsetDateTime.parse("2022-10-11T06:25:10.430Z");
                firstQuoteDate = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                gender = CustomerPersonDTOGenderEnum.MALE;
                id = 928082L;
                lastName = "Mohr";
                lastProjectDate = OffsetDateTime.parse("2021-10-22T10:35:49.400Z");
                lastQuoteDate = OffsetDateTime.parse("2022-03-20T23:16:34.777Z");
                motherTonguesIds = new Long[]{{
                    add(500026L),
                }};
                name = "Gary Mayert";
                numberOfProjects = 992397;
                numberOfQuotes = 934214;
                positionId = 267262L;
            }};            

            Create2Response res = sdk.clients.create2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create3

Creates a new client. All available fields are presented in PUT request.<p>
  Required fields:
  <ul>
    <li>name</li>
    <li>fullName</li>
    <li>contact -> emails -> primary</li>
  </ul>
</p>


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create3Response;
import org.openapis.openapi.models.shared.AddressDTO;
import org.openapis.openapi.models.shared.ContactDTO;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.CustomerAccountingDTO;
import org.openapis.openapi.models.shared.CustomerContactEmailsDTO;
import org.openapis.openapi.models.shared.CustomerDTO;
import org.openapis.openapi.models.shared.CustomerDTOStatusEnum;
import org.openapis.openapi.models.shared.CustomerPersonDTO;
import org.openapis.openapi.models.shared.CustomerPersonDTOGenderEnum;
import org.openapis.openapi.models.shared.CustomerResponsiblePersonsDTO;
import org.openapis.openapi.models.shared.CustomerTaxNoDTO;
import org.openapis.openapi.models.shared.PersonContactDTO;
import org.openapis.openapi.models.shared.PersonContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CustomerDTO req = new CustomerDTO() {{
                accountOnCustomerServer = "iste";
                accounting = new CustomerAccountingDTO() {{
                    taxNumbers = new org.openapis.openapi.models.shared.CustomerTaxNoDTO[]{{
                        add(new CustomerTaxNoDTO() {{
                            number = "deleniti";
                            type = "pariatur";
                        }}),
                        add(new CustomerTaxNoDTO() {{
                            number = "provident";
                            type = "nobis";
                        }}),
                        add(new CustomerTaxNoDTO() {{
                            number = "libero";
                            type = "delectus";
                        }}),
                    }};
                }};;
                billingAddress = new AddressDTO() {{
                    addressLine1 = "quaerat";
                    addressLine2 = "quos";
                    city = "East Cornelius";
                    countryId = 222443L;
                    postalCode = "29574";
                    provinceId = 490459L;
                    sameAsBillingAddress = false;
                }};;
                branchId = 970237L;
                categoriesIds = new Long[]{{
                    add(680545L),
                }};
                clientFirstProjectDate = OffsetDateTime.parse("2022-11-30T20:48:38.083Z");
                clientFirstQuoteDate = OffsetDateTime.parse("2022-12-11T09:46:30.457Z");
                clientLastProjectDate = OffsetDateTime.parse("2022-07-06T22:32:29.592Z");
                clientLastQuoteDate = OffsetDateTime.parse("2022-02-13T10:24:00.119Z");
                clientNumberOfProjects = 696344;
                clientNumberOfQuotes = 976405;
                contact = new ContactDTO() {{
                    emails = new CustomerContactEmailsDTO("voluptas") {{
                        additional = new String[]{{
                            add("eos"),
                            add("atque"),
                            add("sit"),
                        }};
                        cc = new String[]{{
                            add("ab"),
                            add("soluta"),
                            add("dolorum"),
                            add("iusto"),
                        }};
                    }};;
                    fax = "voluptate";
                    phones = new String[]{{
                        add("deleniti"),
                        add("omnis"),
                        add("necessitatibus"),
                    }};
                    sms = "distinctio";
                    websites = new String[]{{
                        add("nihil"),
                        add("ipsum"),
                        add("voluptate"),
                        add("id"),
                    }};
                }};;
                contractNumber = "saepe";
                correspondenceAddress = new AddressDTO() {{
                    addressLine1 = "eius";
                    addressLine2 = "aspernatur";
                    city = "East Nilsside";
                    countryId = 320017L;
                    postalCode = "36538-5608";
                    provinceId = 311860L;
                    sameAsBillingAddress = false;
                }};;
                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                    add(new CustomFieldDTO() {{
                        key = "vel";
                        name = "Erick Denesik";
                        type = CustomFieldDTOTypeEnum.NUMBER;
                        value = new java.util.HashMap<String, Object>() {{
                            put("iusto", "ipsum");
                            put("quisquam", "tenetur");
                            put("amet", "tempore");
                        }};
                    }}),
                    add(new CustomFieldDTO() {{
                        key = "accusamus";
                        name = "Darlene Effertz";
                        type = CustomFieldDTOTypeEnum.NUMBER;
                        value = new java.util.HashMap<String, Object>() {{
                            put("expedita", "neque");
                        }};
                    }}),
                }};
                fullName = "sed";
                id = 424685L;
                idNumber = "libero";
                industriesIds = new Long[]{{
                    add(646265L),
                    add(463575L),
                }};
                leadSourceId = 214880L;
                limitAccessToPeopleResponsible = false;
                name = "Norma McGlynn";
                notes = "soluta";
                persons = new org.openapis.openapi.models.shared.CustomerPersonDTO[]{{
                    add(new CustomerPersonDTO() {{
                        active = false;
                        contact = new PersonContactDTO() {{
                            emails = new PersonContactEmailsDTO("distinctio") {{
                                additional = new String[]{{
                                    add("totam"),
                                    add("incidunt"),
                                    add("aspernatur"),
                                }};
                                primary = "dolores";
                            }};
                            fax = "facilis";
                            phones = new String[]{{
                                add("quam"),
                                add("molestias"),
                            }};
                            sms = "temporibus";
                        }};
                        customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                            add(new CustomFieldDTO() {{
                                key = "neque";
                                name = "Mrs. Louise Kuhlman";
                                type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                value = new java.util.HashMap<String, Object>() {{
                                    put("cumque", "soluta");
                                }};
                            }}),
                        }};
                        customerId = 748664L;
                        firstProjectDate = OffsetDateTime.parse("2022-02-05T03:24:54.198Z");
                        firstQuoteDate = OffsetDateTime.parse("2022-12-01T13:13:09.182Z");
                        gender = CustomerPersonDTOGenderEnum.MALE;
                        id = 552193L;
                        lastName = "Reynolds";
                        lastProjectDate = OffsetDateTime.parse("2022-11-28T16:49:52.722Z");
                        lastQuoteDate = OffsetDateTime.parse("2022-05-16T23:21:11.104Z");
                        motherTonguesIds = new Long[]{{
                            add(286915L),
                            add(240829L),
                        }};
                        name = "Ms. Joe Berge";
                        numberOfProjects = 9240;
                        numberOfQuotes = 669917;
                        positionId = 833038L;
                    }}),
                }};
                responsiblePersons = new CustomerResponsiblePersonsDTO(785153L, 984330L) {{
                    accountManagerId = 281730L;
                    projectCoordinatorId = 703495L;
                }};;
                salesNotes = "cupiditate";
                status = CustomerDTOStatusEnum.ACTIVE;
            }};            

            Create3Response res = sdk.clients.create3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete3

Removes a person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete3Request;
import org.openapis.openapi.models.operations.Delete3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete3Request req = new Delete3Request(63955L);            

            Delete3Response res = sdk.clients.delete3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete4

Removes a customer price list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete4Request;
import org.openapis.openapi.models.operations.Delete4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete4Request req = new Delete4Request(512393L);            

            Delete4Response res = sdk.clients.delete4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete5

Removes a client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete5Request;
import org.openapis.openapi.models.operations.Delete5Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete5Request req = new Delete5Request(485628L);            

            Delete5Response res = sdk.clients.delete5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateSingleUseSignInToken

Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href="/api-doc/customer-api/authentication">authentication</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateSingleUseSignInTokenResponse;
import org.openapis.openapi.models.shared.AccessTokenRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccessTokenRequestDTO req = new AccessTokenRequestDTO() {{
                loginOrEmail = "occaecati";
            }};            

            GenerateSingleUseSignInTokenResponse res = sdk.clients.generateSingleUseSignInToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddress

Returns address of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressRequest req = new GetAddressRequest(977496L);            

            GetAddressResponse res = sdk.clients.getAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds1

Returns persons' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds1Request;
import org.openapis.openapi.models.operations.GetAllIds1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds1Request req = new GetAllIds1Request() {{
                updatedSince = 787542L;
            }};            

            GetAllIds1Response res = sdk.clients.getAllIds1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds2

Returns clients' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds2Request;
import org.openapis.openapi.models.operations.GetAllIds2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds2Request req = new GetAllIds2Request() {{
                emailEquals = "vero";
                nameEquals = "omnis";
                updatedSince = 338159L;
            }};            

            GetAllIds2Response res = sdk.clients.getAllIds2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllNamesWithIds

Returns list of simple clients representations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllNamesWithIdsRequest;
import org.openapis.openapi.models.operations.GetAllNamesWithIdsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllNamesWithIdsRequest req = new GetAllNamesWithIdsRequest() {{
                updatedSince = 218403L;
            }};            

            GetAllNamesWithIdsResponse res = sdk.clients.getAllNamesWithIds(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById1

Returns person details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById1Request;
import org.openapis.openapi.models.operations.GetById1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById1Request req = new GetById1Request(961571L);            

            GetById1Response res = sdk.clients.getById1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById2

Returns client details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById2Request;
import org.openapis.openapi.models.operations.GetById2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById2Request req = new GetById2Request(455169L) {{
                embed = "consectetur";
            }};            

            GetById2Response res = sdk.clients.getById2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategories

Returns categories of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesRequest;
import org.openapis.openapi.models.operations.GetCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCategoriesRequest req = new GetCategoriesRequest(878870L);            

            GetCategoriesResponse res = sdk.clients.getCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact

Returns contact of a given person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactRequest req = new GetContactRequest(949319L);            

            GetContactResponse res = sdk.clients.getContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact1

Returns contact of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContact1Request;
import org.openapis.openapi.models.operations.GetContact1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContact1Request req = new GetContact1Request(492268L);            

            GetContact1Response res = sdk.clients.getContact1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorrespondenceAddress

Returns correspondence address of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorrespondenceAddressRequest;
import org.openapis.openapi.models.operations.GetCorrespondenceAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCorrespondenceAddressRequest req = new GetCorrespondenceAddressRequest(941378L);            

            GetCorrespondenceAddressResponse res = sdk.clients.getCorrespondenceAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomField

Returns custom field of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldRequest;
import org.openapis.openapi.models.operations.GetCustomFieldResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFieldRequest req = new GetCustomFieldRequest("distinctio", 799203L);            

            GetCustomFieldResponse res = sdk.clients.getCustomField(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields

Returns custom fields of a given person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldsRequest;
import org.openapis.openapi.models.operations.GetCustomFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFieldsRequest req = new GetCustomFieldsRequest(486160L);            

            GetCustomFieldsResponse res = sdk.clients.getCustomFields(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields1

Returns custom fields of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields1Request;
import org.openapis.openapi.models.operations.GetCustomFields1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields1Request req = new GetCustomFields1Request(630448L);            

            GetCustomFields1Response res = sdk.clients.getCustomFields1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndustries

Returns industries of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndustriesRequest;
import org.openapis.openapi.models.operations.GetIndustriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIndustriesRequest req = new GetIndustriesRequest(708548L);            

            GetIndustriesResponse res = sdk.clients.getIndustries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAddress

Updates address of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAddressRequest;
import org.openapis.openapi.models.operations.UpdateAddressResponse;
import org.openapis.openapi.models.shared.AddressDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAddressRequest req = new UpdateAddressRequest(                new AddressDTO() {{
                                addressLine1 = "vero";
                                addressLine2 = "ducimus";
                                city = "Port Rosina";
                                countryId = 194342L;
                                postalCode = "70938-1799";
                                provinceId = 478370L;
                                sameAsBillingAddress = false;
                            }};, 753570L);            

            UpdateAddressResponse res = sdk.clients.updateAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCategories

Updates categories of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCategoriesRequest;
import org.openapis.openapi.models.operations.UpdateCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCategoriesRequest req = new UpdateCategoriesRequest(                new Long[]{{
                                add(4048L),
                                add(639473L),
                            }}, 269479L);            

            UpdateCategoriesResponse res = sdk.clients.updateCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContact

Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactRequest;
import org.openapis.openapi.models.operations.UpdateContactResponse;
import org.openapis.openapi.models.shared.PersonContactDTO;
import org.openapis.openapi.models.shared.PersonContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContactRequest req = new UpdateContactRequest(                new PersonContactDTO() {{
                                emails = new PersonContactEmailsDTO("ipsam") {{
                                    additional = new String[]{{
                                        add("aspernatur"),
                                        add("vel"),
                                    }};
                                }};;
                                fax = "possimus";
                                phones = new String[]{{
                                    add("ratione"),
                                    add("ex"),
                                }};
                                sms = "laudantium";
                            }};, 120657L);            

            UpdateContactResponse res = sdk.clients.updateContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContact1

Updates contact of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContact1Request;
import org.openapis.openapi.models.operations.UpdateContact1Response;
import org.openapis.openapi.models.shared.ContactDTO;
import org.openapis.openapi.models.shared.CustomerContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContact1Request req = new UpdateContact1Request(                new ContactDTO() {{
                                emails = new CustomerContactEmailsDTO("dolor") {{
                                    additional = new String[]{{
                                        add("quasi"),
                                        add("ex"),
                                        add("nulla"),
                                        add("excepturi"),
                                    }};
                                    cc = new String[]{{
                                        add("nostrum"),
                                        add("sapiente"),
                                        add("quisquam"),
                                        add("saepe"),
                                    }};
                                }};;
                                fax = "ea";
                                phones = new String[]{{
                                    add("corporis"),
                                    add("veniam"),
                                    add("aliquid"),
                                    add("inventore"),
                                }};
                                sms = "magnam";
                                websites = new String[]{{
                                    add("quo"),
                                    add("consectetur"),
                                }};
                            }};, 926213L);            

            UpdateContact1Response res = sdk.clients.updateContact1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCorrespondenceAddress

Updates correspondence address of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCorrespondenceAddressRequest;
import org.openapis.openapi.models.operations.UpdateCorrespondenceAddressResponse;
import org.openapis.openapi.models.shared.AddressDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCorrespondenceAddressRequest req = new UpdateCorrespondenceAddressRequest(                new AddressDTO() {{
                                addressLine1 = "aspernatur";
                                addressLine2 = "minima";
                                city = "Fort Mohammedtown";
                                countryId = 11427L;
                                postalCode = "73180-2066";
                                provinceId = 810424L;
                                sameAsBillingAddress = false;
                            }};, 245367L);            

            UpdateCorrespondenceAddressResponse res = sdk.clients.updateCorrespondenceAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomField

Updates given custom field of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFieldRequest;
import org.openapis.openapi.models.operations.UpdateCustomFieldResponse;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomFieldRequest req = new UpdateCustomFieldRequest(                new CustomFieldDTO() {{
                                key = "eum";
                                name = "Vicky Lynch";
                                type = CustomFieldDTOTypeEnum.DATE_AND_TIME;
                                value = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "tempora");
                                    put("numquam", "explicabo");
                                    put("provident", "ipsa");
                                }};
                            }};, "molestiae", 301598L);            

            UpdateCustomFieldResponse res = sdk.clients.updateCustomField(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields

Updates custom fields of a given person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFieldsRequest;
import org.openapis.openapi.models.operations.UpdateCustomFieldsResponse;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomFieldsRequest req = new UpdateCustomFieldsRequest(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "eius";
                                    name = "Tamara Leffler";
                                    type = CustomFieldDTOTypeEnum.CHECKBOX;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("ut", "eum");
                                        put("suscipit", "assumenda");
                                        put("eos", "praesentium");
                                        put("quisquam", "veritatis");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "ipsa";
                                    name = "Rickey DuBuque";
                                    type = CustomFieldDTOTypeEnum.SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("eius", "eos");
                                        put("voluptas", "ab");
                                        put("cupiditate", "consequatur");
                                    }};
                                }}),
                            }}, 272822L);            

            UpdateCustomFieldsResponse res = sdk.clients.updateCustomFields(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields1

Updates custom fields of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFields1Request;
import org.openapis.openapi.models.operations.UpdateCustomFields1Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomFields1Request req = new UpdateCustomFields1Request(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "ipsam";
                                    name = "Emily Satterfield";
                                    type = CustomFieldDTOTypeEnum.TEXT;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("quod", "dignissimos");
                                        put("inventore", "nihil");
                                        put("totam", "accusamus");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "aliquam";
                                    name = "Violet Johns";
                                    type = CustomFieldDTOTypeEnum.CHECKBOX;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("accusantium", "porro");
                                        put("eum", "quas");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "praesentium";
                                    name = "Cassandra Considine";
                                    type = CustomFieldDTOTypeEnum.DATE;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("explicabo", "minima");
                                        put("nisi", "fugit");
                                        put("sapiente", "consequuntur");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "ratione";
                                    name = "Kerry Mayert IV";
                                    type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("veritatis", "esse");
                                        put("quod", "nam");
                                        put("vero", "aliquid");
                                        put("quasi", "saepe");
                                    }};
                                }}),
                            }}, 426306L);            

            UpdateCustomFields1Response res = sdk.clients.updateCustomFields1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIndustries

Updates industries of a given client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIndustriesRequest;
import org.openapis.openapi.models.operations.UpdateIndustriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIndustriesRequest req = new UpdateIndustriesRequest(                new Long[]{{
                                add(473221L),
                                add(699622L),
                                add(580197L),
                            }}, 327720L);            

            UpdateIndustriesResponse res = sdk.clients.updateIndustries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update1

Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Update1Request;
import org.openapis.openapi.models.operations.Update1Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.CustomerPersonDTO;
import org.openapis.openapi.models.shared.CustomerPersonDTOGenderEnum;
import org.openapis.openapi.models.shared.PersonContactDTO;
import org.openapis.openapi.models.shared.PersonContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Update1Request req = new Update1Request(                new CustomerPersonDTO() {{
                                active = false;
                                contact = new PersonContactDTO() {{
                                    emails = new PersonContactEmailsDTO("distinctio") {{
                                        additional = new String[]{{
                                            add("sit"),
                                            add("culpa"),
                                            add("tempore"),
                                            add("adipisci"),
                                        }};
                                    }};;
                                    fax = "cumque";
                                    phones = new String[]{{
                                        add("consequatur"),
                                    }};
                                    sms = "minus";
                                }};;
                                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                    add(new CustomFieldDTO() {{
                                        key = "sapiente";
                                        name = "Joy Labadie";
                                        type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("esse", "quasi");
                                            put("a", "error");
                                            put("sint", "pariatur");
                                        }};
                                    }}),
                                    add(new CustomFieldDTO() {{
                                        key = "possimus";
                                        name = "Laverne Zemlak Sr.";
                                        type = CustomFieldDTOTypeEnum.TEXT;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("culpa", "aliquid");
                                            put("tenetur", "quae");
                                            put("earum", "vel");
                                        }};
                                    }}),
                                }};
                                customerId = 447378L;
                                firstProjectDate = OffsetDateTime.parse("2022-04-10T09:22:48.043Z");
                                firstQuoteDate = OffsetDateTime.parse("2020-10-10T05:59:09.149Z");
                                gender = CustomerPersonDTOGenderEnum.FEMALE;
                                id = 306986L;
                                lastName = "Williamson";
                                lastProjectDate = OffsetDateTime.parse("2022-08-24T06:58:07.315Z");
                                lastQuoteDate = OffsetDateTime.parse("2022-08-23T19:14:50.880Z");
                                motherTonguesIds = new Long[]{{
                                    add(16328L),
                                    add(531849L),
                                }};
                                name = "Rosemarie Jacobs";
                                numberOfProjects = 680270;
                                numberOfQuotes = 99615;
                                positionId = 609178L;
                            }};, 945302L);            

            Update1Response res = sdk.clients.update1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update2

Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Update2Request;
import org.openapis.openapi.models.operations.Update2Response;
import org.openapis.openapi.models.shared.AddressDTO;
import org.openapis.openapi.models.shared.ContactDTO;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.CustomerAccountingDTO;
import org.openapis.openapi.models.shared.CustomerContactEmailsDTO;
import org.openapis.openapi.models.shared.CustomerDTO;
import org.openapis.openapi.models.shared.CustomerDTOStatusEnum;
import org.openapis.openapi.models.shared.CustomerPersonDTO;
import org.openapis.openapi.models.shared.CustomerPersonDTOGenderEnum;
import org.openapis.openapi.models.shared.CustomerResponsiblePersonsDTO;
import org.openapis.openapi.models.shared.CustomerTaxNoDTO;
import org.openapis.openapi.models.shared.PersonContactDTO;
import org.openapis.openapi.models.shared.PersonContactEmailsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Update2Request req = new Update2Request(                new CustomerDTO() {{
                                accountOnCustomerServer = "quasi";
                                accounting = new CustomerAccountingDTO() {{
                                    taxNumbers = new org.openapis.openapi.models.shared.CustomerTaxNoDTO[]{{
                                        add(new CustomerTaxNoDTO() {{
                                            number = "et";
                                            type = "voluptate";
                                        }}),
                                        add(new CustomerTaxNoDTO() {{
                                            number = "ipsa";
                                            type = "minima";
                                        }}),
                                        add(new CustomerTaxNoDTO() {{
                                            number = "veritatis";
                                            type = "consectetur";
                                        }}),
                                        add(new CustomerTaxNoDTO() {{
                                            number = "adipisci";
                                            type = "iste";
                                        }}),
                                    }};
                                }};;
                                billingAddress = new AddressDTO() {{
                                    addressLine1 = "temporibus";
                                    addressLine2 = "accusantium";
                                    city = "Adriennemouth";
                                    countryId = 428796L;
                                    postalCode = "05202-5271";
                                    provinceId = 376226L;
                                    sameAsBillingAddress = false;
                                }};;
                                branchId = 12036L;
                                categoriesIds = new Long[]{{
                                    add(115484L),
                                    add(981640L),
                                }};
                                clientFirstProjectDate = OffsetDateTime.parse("2022-07-06T09:42:25.585Z");
                                clientFirstQuoteDate = OffsetDateTime.parse("2021-11-17T02:47:10.534Z");
                                clientLastProjectDate = OffsetDateTime.parse("2022-11-12T00:03:51.639Z");
                                clientLastQuoteDate = OffsetDateTime.parse("2022-09-09T19:48:26.093Z");
                                clientNumberOfProjects = 162954;
                                clientNumberOfQuotes = 831520;
                                contact = new ContactDTO() {{
                                    emails = new CustomerContactEmailsDTO("officia") {{
                                        additional = new String[]{{
                                            add("dignissimos"),
                                            add("officia"),
                                            add("asperiores"),
                                            add("nemo"),
                                        }};
                                        cc = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }};;
                                    fax = "porro";
                                    phones = new String[]{{
                                        add("labore"),
                                        add("ab"),
                                        add("adipisci"),
                                        add("fuga"),
                                    }};
                                    sms = "id";
                                    websites = new String[]{{
                                        add("velit"),
                                        add("culpa"),
                                    }};
                                }};;
                                contractNumber = "est";
                                correspondenceAddress = new AddressDTO() {{
                                    addressLine1 = "recusandae";
                                    addressLine2 = "totam";
                                    city = "Jackson";
                                    countryId = 497678L;
                                    postalCode = "42877-4439";
                                    provinceId = 828657L;
                                    sameAsBillingAddress = false;
                                }};;
                                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                    add(new CustomFieldDTO() {{
                                        key = "recusandae";
                                        name = "Kimberly Ritchie";
                                        type = CustomFieldDTOTypeEnum.DATE_AND_TIME;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("facere", "numquam");
                                            put("doloribus", "suscipit");
                                            put("reiciendis", "quidem");
                                            put("saepe", "necessitatibus");
                                        }};
                                    }}),
                                    add(new CustomFieldDTO() {{
                                        key = "dolore";
                                        name = "Ollie Flatley";
                                        type = CustomFieldDTOTypeEnum.TEXT;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("a", "debitis");
                                            put("consectetur", "corporis");
                                        }};
                                    }}),
                                }};
                                fullName = "harum";
                                id = 385237L;
                                idNumber = "ipsa";
                                industriesIds = new Long[]{{
                                    add(730709L),
                                    add(113816L),
                                    add(881721L),
                                    add(631126L),
                                }};
                                leadSourceId = 272437L;
                                limitAccessToPeopleResponsible = false;
                                name = "Yolanda Hirthe";
                                notes = "nobis";
                                persons = new org.openapis.openapi.models.shared.CustomerPersonDTO[]{{
                                    add(new CustomerPersonDTO() {{
                                        active = false;
                                        contact = new PersonContactDTO() {{
                                            emails = new PersonContactEmailsDTO("blanditiis") {{
                                                additional = new String[]{{
                                                    add("minus"),
                                                }};
                                                primary = "dolores";
                                            }};
                                            fax = "in";
                                            phones = new String[]{{
                                                add("aliquam"),
                                                add("officiis"),
                                            }};
                                            sms = "temporibus";
                                        }};
                                        customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                            add(new CustomFieldDTO() {{
                                                key = "adipisci";
                                                name = "Guy Luettgen";
                                                type = CustomFieldDTOTypeEnum.CHECKBOX;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("pariatur", "totam");
                                                    put("hic", "exercitationem");
                                                    put("nobis", "sit");
                                                }};
                                            }}),
                                            add(new CustomFieldDTO() {{
                                                key = "rerum";
                                                name = "Faith Cole";
                                                type = CustomFieldDTOTypeEnum.NUMBER;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("ab", "iste");
                                                    put("dolore", "laborum");
                                                    put("sed", "in");
                                                }};
                                            }}),
                                        }};
                                        customerId = 417486L;
                                        firstProjectDate = OffsetDateTime.parse("2022-09-27T03:48:38.490Z");
                                        firstQuoteDate = OffsetDateTime.parse("2022-05-25T11:55:40.494Z");
                                        gender = CustomerPersonDTOGenderEnum.FEMALE;
                                        id = 382808L;
                                        lastName = "Willms";
                                        lastProjectDate = OffsetDateTime.parse("2022-10-13T16:25:20.976Z");
                                        lastQuoteDate = OffsetDateTime.parse("2022-12-10T20:46:47.432Z");
                                        motherTonguesIds = new Long[]{{
                                            add(979574L),
                                            add(274823L),
                                            add(148478L),
                                        }};
                                        name = "Herbert Treutel";
                                        numberOfProjects = 579912;
                                        numberOfQuotes = 552078;
                                        positionId = 975752L;
                                    }}),
                                    add(new CustomerPersonDTO() {{
                                        active = false;
                                        contact = new PersonContactDTO() {{
                                            emails = new PersonContactEmailsDTO("ex") {{
                                                additional = new String[]{{
                                                    add("tempora"),
                                                    add("voluptate"),
                                                }};
                                                primary = "reiciendis";
                                            }};
                                            fax = "sit";
                                            phones = new String[]{{
                                                add("officiis"),
                                            }};
                                            sms = "praesentium";
                                        }};
                                        customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                            add(new CustomFieldDTO() {{
                                                key = "quaerat";
                                                name = "Brittany Tremblay DDS";
                                                type = CustomFieldDTOTypeEnum.CHECKBOX;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("minima", "recusandae");
                                                    put("reiciendis", "nulla");
                                                }};
                                            }}),
                                            add(new CustomFieldDTO() {{
                                                key = "magni";
                                                name = "Gwen Fritsch";
                                                type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("laudantium", "exercitationem");
                                                }};
                                            }}),
                                            add(new CustomFieldDTO() {{
                                                key = "praesentium";
                                                name = "Lester Parisian";
                                                type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("debitis", "neque");
                                                    put("dolorum", "nostrum");
                                                    put("officia", "dolorum");
                                                }};
                                            }}),
                                        }};
                                        customerId = 548361L;
                                        firstProjectDate = OffsetDateTime.parse("2022-03-08T09:53:15.131Z");
                                        firstQuoteDate = OffsetDateTime.parse("2022-09-14T18:19:59.469Z");
                                        gender = CustomerPersonDTOGenderEnum.FEMALE;
                                        id = 856303L;
                                        lastName = "Bartell";
                                        lastProjectDate = OffsetDateTime.parse("2021-07-31T10:53:55.286Z");
                                        lastQuoteDate = OffsetDateTime.parse("2022-12-29T02:56:05.947Z");
                                        motherTonguesIds = new Long[]{{
                                            add(372679L),
                                            add(24527L),
                                        }};
                                        name = "Willard Walker IV";
                                        numberOfProjects = 405942;
                                        numberOfQuotes = 153627;
                                        positionId = 24313L;
                                    }}),
                                    add(new CustomerPersonDTO() {{
                                        active = false;
                                        contact = new PersonContactDTO() {{
                                            emails = new PersonContactEmailsDTO("consequatur") {{
                                                additional = new String[]{{
                                                    add("nostrum"),
                                                    add("saepe"),
                                                }};
                                                primary = "error";
                                            }};
                                            fax = "incidunt";
                                            phones = new String[]{{
                                                add("dolorem"),
                                                add("harum"),
                                                add("dicta"),
                                                add("architecto"),
                                            }};
                                            sms = "occaecati";
                                        }};
                                        customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                            add(new CustomFieldDTO() {{
                                                key = "quidem";
                                                name = "Cameron Reilly";
                                                type = CustomFieldDTOTypeEnum.TEXT;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("deserunt", "voluptate");
                                                }};
                                            }}),
                                            add(new CustomFieldDTO() {{
                                                key = "unde";
                                                name = "Rene Skiles";
                                                type = CustomFieldDTOTypeEnum.TEXT;
                                                value = new java.util.HashMap<String, Object>() {{
                                                    put("quidem", "reprehenderit");
                                                    put("facere", "fuga");
                                                    put("praesentium", "mollitia");
                                                }};
                                            }}),
                                        }};
                                        customerId = 333965L;
                                        firstProjectDate = OffsetDateTime.parse("2022-03-18T08:14:24.399Z");
                                        firstQuoteDate = OffsetDateTime.parse("2022-09-16T12:27:20.507Z");
                                        gender = CustomerPersonDTOGenderEnum.MALE;
                                        id = 442036L;
                                        lastName = "Zboncak";
                                        lastProjectDate = OffsetDateTime.parse("2022-03-27T08:02:14.031Z");
                                        lastQuoteDate = OffsetDateTime.parse("2021-05-22T03:09:11.884Z");
                                        motherTonguesIds = new Long[]{{
                                            add(461007L),
                                        }};
                                        name = "Angelina Jenkins";
                                        numberOfProjects = 887265;
                                        numberOfQuotes = 886961;
                                        positionId = 880107L;
                                    }}),
                                }};
                                responsiblePersons = new CustomerResponsiblePersonsDTO(618826L, 328303L) {{
                                    accountManagerId = 133461L;
                                    projectCoordinatorId = 404425L;
                                }};;
                                salesNotes = "maiores";
                                status = CustomerDTOStatusEnum.INACTIVE;
                            }};, 871786L);            

            Update2Response res = sdk.clients.update2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
